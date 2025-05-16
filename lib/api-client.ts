import { generateMockPriceData, generateMockHistoryData } from "./mock-data"

const COINGECKO_API_URL = "https://api.coingecko.com/api/v3"

// 添加延迟函数
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

// 跟踪API失败次数
let apiFailureCount = 0
const MAX_FAILURES_BEFORE_FALLBACK = 3
const API_FAILURE_RESET_INTERVAL = 30 * 60 * 1000 // 30分钟

// 定期重置失败计数器
let resetIntervalId: NodeJS.Timeout | null = null

// 只在客户端环境中设置定时器
if (typeof window !== "undefined") {
  resetIntervalId = setInterval(() => {
    if (apiFailureCount > 0) {
      console.log("Resetting API failure counter")
      apiFailureCount = 0
    }
  }, API_FAILURE_RESET_INTERVAL)
}

// 添加重试逻辑的包装函数，增加更长的退避时间
async function fetchWithRetry(url: string, options: RequestInit, retries = 3, backoff = 3000) {
  try {
    // 如果API已经连续失败多次，直接使用模拟数据
    if (apiFailureCount >= MAX_FAILURES_BEFORE_FALLBACK) {
      throw new Error("API failure threshold reached, using mock data")
    }

    const response = await fetch(url, options)

    // 如果是429错误，等待更长时间并重试
    if (response.status === 429 && retries > 0) {
      console.log(`Rate limited, waiting ${backoff}ms before retry. Retries left: ${retries}`)
      await delay(backoff)
      return fetchWithRetry(url, options, retries - 1, backoff * 2)
    }

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    // 成功获取数据，重置失败计数
    apiFailureCount = 0
    return response
  } catch (error) {
    if (retries > 0) {
      console.log(`Fetch error, retrying... Retries left: ${retries}`)
      await delay(backoff)
      return fetchWithRetry(url, options, retries - 1, backoff * 2)
    }

    // 增加失败计数
    apiFailureCount++
    console.log(`API failure count: ${apiFailureCount}/${MAX_FAILURES_BEFORE_FALLBACK}`)
    throw error
  }
}

// 添加一个简单的缓存数据结构
const lastSuccessfulData = {
  price: null,
  history: {},
}

export const fetchDogecoinPrice = async (useMockOnFailure = true) => {
  try {
    // 如果API已经连续失败多次，直接使用模拟数据
    if (apiFailureCount >= MAX_FAILURES_BEFORE_FALLBACK && useMockOnFailure) {
      console.log("Using mock price data due to API failures")
      return generateMockPriceData()
    }

    const API_HEADERS = {
      Accept: "application/json",
      "User-Agent": "Dogecoin Mining Website",
    }

    const response = await fetchWithRetry(
      `${COINGECKO_API_URL}/simple/price?ids=dogecoin&vs_currencies=usd&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true`,
      {
        headers: API_HEADERS,
        cache: "no-store",
      },
    )

    const data = await response.json()
    const dogecoinData = data.dogecoin

    if (!dogecoinData) {
      throw new Error("Could not retrieve Dogecoin price data")
    }

    const result = {
      price: dogecoinData.usd,
      marketCap: dogecoinData.usd_market_cap,
      volume24h: dogecoinData.usd_24h_vol,
      change24h: dogecoinData.usd_24h_change,
      updatedAt: Date.now(),
      isRealData: true,
    }

    // 保存最后一次成功的数据
    lastSuccessfulData.price = result

    return result
  } catch (error) {
    console.error("Error fetching Dogecoin price:", error)

    // 如果允许使用模拟数据，则在API失败时返回模拟数据
    if (useMockOnFailure) {
      return generateMockPriceData()
    }

    throw error
  }
}

export const fetchDogecoinHistory = async (days: number, useMockOnFailure = true) => {
  try {
    // 如果API已经连续失败多次，直接使用模拟数据
    if (apiFailureCount >= MAX_FAILURES_BEFORE_FALLBACK && useMockOnFailure) {
      console.log("Using mock history data due to API failures")
      return generateMockHistoryData(days)
    }

    const API_HEADERS = {
      Accept: "application/json",
      "User-Agent": "Dogecoin Mining Website",
    }

    const response = await fetchWithRetry(
      `${COINGECKO_API_URL}/coins/dogecoin/market_chart?vs_currency=usd&days=${days}`,
      {
        headers: API_HEADERS,
        cache: "no-store",
      },
    )

    const data = await response.json()

    if (!data.prices || !Array.isArray(data.prices)) {
      throw new Error("Invalid price history data format")
    }

    // 保存最后一次成功的数据
    lastSuccessfulData.history[days] = {
      prices: data.prices,
      updatedAt: Date.now(),
      isRealData: true,
    }

    return data.prices
  } catch (error) {
    console.error("Error fetching Dogecoin history:", error)

    // 如果允许使用模拟数据，则在API失败时返回模拟数据
    if (useMockOnFailure) {
      return generateMockHistoryData(days)
    }

    throw error
  }
}

// 导出最后一次成功的数据，以便在API失败时使用
export const getLastSuccessfulPrice = () => lastSuccessfulData.price
export const getLastSuccessfulHistory = (days: number) => lastSuccessfulData.history[days]

// 导出API失败计数器重置函数，用于手动重置
export const resetApiFailureCount = () => {
  apiFailureCount = 0
  console.log("API failure counter manually reset")
}

// 清理函数，用于在应用卸载时清理资源
export const cleanup = () => {
  if (resetIntervalId) {
    clearInterval(resetIntervalId)
    resetIntervalId = null
  }
}
