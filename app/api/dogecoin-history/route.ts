import { NextResponse } from "next/server"
import { fetchDogecoinHistory, getLastSuccessfulHistory } from "@/lib/api-client"

// 简单的内存缓存
const historyCache: {
  [key: string]: {
    prices: [number, number][]
    updatedAt: number
    isRealData?: boolean
    isMockData?: boolean
  }
} = {}

// 缓存过期时间（增加到2小时，大幅减少API调用频率）
const CACHE_EXPIRY = 2 * 60 * 60 * 1000

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const days = searchParams.get("days") || "7"
    const daysNum = Number.parseInt(days, 10)

    // 检查缓存是否有效
    const now = Date.now()
    if (historyCache[days] && now - historyCache[days].updatedAt < CACHE_EXPIRY) {
      return NextResponse.json({
        prices: historyCache[days].prices,
        fromCache: true,
        isRealData: historyCache[days].isRealData,
        isMockData: historyCache[days].isMockData,
      })
    }

    // 获取历史价格数据（可能是实时API数据或模拟数据）
    const prices = await fetchDogecoinHistory(daysNum, true)

    // 更新缓存
    historyCache[days] = {
      prices,
      updatedAt: now,
      isRealData: !prices.isMockData,
      isMockData: !!prices.isMockData,
    }

    return NextResponse.json({
      prices,
      isRealData: !prices.isMockData,
      isMockData: !!prices.isMockData,
    })
  } catch (error) {
    console.error("获取狗狗币历史价格时出错:", error)

    // 如果有缓存数据，即使过期也返回
    const { searchParams } = new URL(request.url)
    const days = searchParams.get("days") || "7"
    if (historyCache[days]) {
      return NextResponse.json({
        prices: historyCache[days].prices,
        fromCache: true,
        isRealData: historyCache[days].isRealData,
        isMockData: historyCache[days].isMockData,
      })
    }

    // 尝试使用最后一次成功的数据
    const lastSuccessful = getLastSuccessfulHistory(days)
    if (lastSuccessful) {
      return NextResponse.json({
        prices: lastSuccessful.prices,
        fromLastSuccessful: true,
        isRealData: lastSuccessful.isRealData,
      })
    }

    // 如果没有缓存，返回错误信息
    return NextResponse.json({ error: true, message: "未获得API数据" }, { status: 503 })
  }
}
