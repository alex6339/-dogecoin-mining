// 模拟狗狗币价格数据生成器

// 基础价格范围（美元）
const BASE_PRICE = 0.1
const PRICE_VOLATILITY = 0.005 // 价格波动范围

// 生成当前价格数据
export function generateMockPriceData() {
  // 生成一个在基础价格附近波动的随机价格
  const randomFactor = Math.random() * 2 - 1 // -1到1之间的随机数
  const price = BASE_PRICE + randomFactor * PRICE_VOLATILITY

  // 生成随机的24小时变化百分比
  const change24h = Math.random() * 10 - 5 // -5%到5%之间的随机数

  // 计算市值和交易量
  const marketCap = price * 140000000000 // 假设流通量约1400亿
  const volume24h = marketCap * (Math.random() * 0.05 + 0.02) // 市值的2%-7%

  return {
    price,
    marketCap,
    volume24h,
    change24h,
    updatedAt: Date.now(),
    isMockData: true,
  }
}

// 生成历史价格数据
export function generateMockHistoryData(days: number) {
  const now = Date.now()
  const oneDayMs = 24 * 60 * 60 * 1000
  const dataPoints = days * 24 // 每小时一个数据点
  const result: [number, number][] = []

  // 生成起始价格
  let currentPrice = BASE_PRICE

  // 生成历史数据点
  for (let i = 0; i < dataPoints; i++) {
    // 添加一些随机波动
    const volatility = PRICE_VOLATILITY * (1 - 0.5 * (i / dataPoints)) // 越近的数据波动越大
    const change = (Math.random() * 2 - 1) * volatility
    currentPrice += change

    // 确保价格不会变为负数或偏离太远
    if (currentPrice < BASE_PRICE * 0.7) currentPrice = BASE_PRICE * 0.7
    if (currentPrice > BASE_PRICE * 1.3) currentPrice = BASE_PRICE * 1.3

    // 计算时间戳
    const timestamp = now - (dataPoints - i) * (oneDayMs / 24)

    result.push([timestamp, currentPrice])
  }

  return result
}
