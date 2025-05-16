import { NextResponse } from "next/server"
import { fetchDogecoinPrice, getLastSuccessfulPrice } from "@/lib/api-client"

// 简单的内存缓存
let priceCache: {
  price: number
  marketCap: number
  volume24h: number
  change24h: number
  updatedAt: number
  isRealData?: boolean
  isMockData?: boolean
} | null = null

// 缓存过期时间（增加到30分钟，大幅减少API调用频率）
const CACHE_EXPIRY = 30 * 60 * 1000

export async function GET() {
  try {
    // 检查缓存是否有效
    const now = Date.now()
    if (priceCache && now - priceCache.updatedAt < CACHE_EXPIRY) {
      return NextResponse.json({
        ...priceCache,
        fromCache: true,
      })
    }

    // 获取价格数据（可能是实时API数据或模拟数据）
    const priceData = await fetchDogecoinPrice(true)

    // 更新缓存
    priceCache = priceData

    return NextResponse.json(priceData)
  } catch (error) {
    console.error("获取狗狗币价格时出错:", error)

    // 如果有缓存数据，即使过期也返回
    if (priceCache) {
      return NextResponse.json({
        ...priceCache,
        fromCache: true,
        cacheTime: new Date(priceCache.updatedAt).toISOString(),
      })
    }

    // 尝试使用最后一次成功的数据
    const lastSuccessful = getLastSuccessfulPrice()
    if (lastSuccessful) {
      return NextResponse.json({
        ...lastSuccessful,
        fromLastSuccessful: true,
      })
    }

    // 如果没有缓存，返回错误信息
    return NextResponse.json({ error: true, message: "未获得API数据" }, { status: 503 })
  }
}
