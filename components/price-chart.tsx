"use client"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AlertCircle, RefreshCw } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"

interface HistoryResponse {
  prices: [number, number][]
  fromCache?: boolean
  fromLastSuccessful?: boolean
  isRealData?: boolean
  isMockData?: boolean
}

export function PriceChart() {
  const [priceHistory, setPriceHistory] = useState<[number, number][]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [period, setPeriod] = useState("7")
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null)
  const [retryCount, setRetryCount] = useState(0)
  const [dataSource, setDataSource] = useState<string>("loading")

  // 使用ref来跟踪组件是否已卸载
  const isMounted = useRef(true)
  // 用于取消超时的ref
  const retryTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  // 安全地更新状态的函数，只有在组件仍然挂载时才更新
  const safeSetState = {
    setPriceHistory: (data: [number, number][]) => {
      if (isMounted.current) setPriceHistory(data)
    },
    setLoading: (isLoading: boolean) => {
      if (isMounted.current) setLoading(isLoading)
    },
    setError: (err: string | null) => {
      if (isMounted.current) setError(err)
    },
    setLastUpdated: (date: Date | null) => {
      if (isMounted.current) setLastUpdated(date)
    },
    setRetryCount: (count: number) => {
      if (isMounted.current) setRetryCount(count)
    },
    setDataSource: (source: string) => {
      if (isMounted.current) setDataSource(source)
    },
  }

  const fetchPriceHistory = async () => {
    try {
      safeSetState.setLoading(true)
      safeSetState.setError(null)

      const response = await fetch(`/api/dogecoin-history?days=${period}`, {
        cache: "no-store",
        headers: {
          "Cache-Control": "no-cache",
          Pragma: "no-cache",
        },
      })

      if (!isMounted.current) return // 如果组件已卸载，不继续处理

      if (!response.ok) {
        throw new Error(`服务器返回错误: ${response.status}`)
      }

      const data: HistoryResponse = await response.json()

      if (!isMounted.current) return // 再次检查组件是否已卸载

      // 检查是否有错误
      if (data.error) {
        throw new Error(data.message || "未获得API数据")
      }

      // 验证数据格式
      if (!Array.isArray(data.prices)) {
        throw new Error("返回的数据格式无效")
      }

      // 设置价格历史数据
      safeSetState.setPriceHistory(data.prices)
      safeSetState.setLastUpdated(new Date())
      safeSetState.setRetryCount(0) // 重置重试计数

      // 设置数据源
      if (data.isMockData) {
        safeSetState.setDataSource("mock")
      } else if (data.fromCache) {
        safeSetState.setDataSource("cache")
      } else if (data.fromLastSuccessful) {
        safeSetState.setDataSource("lastSuccessful")
      } else {
        safeSetState.setDataSource("realtime")
      }
    } catch (err) {
      console.error("Error fetching price history:", err)

      if (isMounted.current) {
        safeSetState.setError("未获得API数据")

        // 如果是首次加载失败，尝试自动重试一次
        if (retryCount === 0 && priceHistory.length === 0) {
          safeSetState.setRetryCount(1)

          // 清除之前的超时
          if (retryTimeoutRef.current) {
            clearTimeout(retryTimeoutRef.current)
          }

          // 设置新的超时
          retryTimeoutRef.current = setTimeout(() => {
            if (isMounted.current) fetchPriceHistory()
          }, 3000) // 3秒后重试
        }
      }
    } finally {
      if (isMounted.current) {
        safeSetState.setLoading(false)
      }
    }
  }

  useEffect(() => {
    // 组件挂载时设置标志
    isMounted.current = true

    fetchPriceHistory()

    // 组件卸载时清理
    return () => {
      isMounted.current = false
      // 清除任何挂起的超时
      if (retryTimeoutRef.current) {
        clearTimeout(retryTimeoutRef.current)
      }
    }
  }, [period])

  // 计算图表数据
  const chartData = priceHistory.map(([timestamp, price]) => ({
    x: new Date(timestamp).toLocaleDateString(),
    y: price,
  }))

  // 找出最高和最低价格
  const prices = priceHistory.map((item) => item[1])
  const minPrice = prices.length > 0 ? Math.min(...prices) : 0
  const maxPrice = prices.length > 0 ? Math.max(...prices) : 0

  // 计算图表高度和宽度
  const chartHeight = 200
  const chartWidth = "100%"

  // 计算Y轴比例
  const yScale = (price: number) => {
    if (maxPrice === minPrice) return chartHeight / 2
    return chartHeight - ((price - minPrice) / (maxPrice - minPrice)) * chartHeight
  }

  // 生成路径
  const generatePath = () => {
    if (chartData.length === 0) return ""

    const points = chartData.map((point, i) => {
      const x = (i / (chartData.length - 1)) * 100
      const y = yScale(point.y)
      return `${x},${y}`
    })

    return `M ${points.join(" L ")}`
  }

  // 获取数据源描述
  const getDataSourceDescription = () => {
    if (error && priceHistory.length === 0) {
      return "未获得API数据"
    }

    switch (dataSource) {
      case "mock":
        return "使用模拟数据"
      case "cache":
        return "使用缓存数据"
      case "lastSuccessful":
        return "使用上次成功获取的数据"
      case "realtime":
        return lastUpdated ? `更新于 ${lastUpdated.toLocaleTimeString()}` : "狗狗币历史价格"
      default:
        return "加载中..."
    }
  }

  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <div>
            <CardTitle className="text-lg">价格走势</CardTitle>
            <CardDescription>{getDataSourceDescription()}</CardDescription>
          </div>
          <Button variant="ghost" size="sm" onClick={fetchPriceHistory} disabled={loading} className="h-8 w-8 p-0">
            <RefreshCw className={`h-4 w-4 ${loading ? "animate-spin" : ""}`} />
            <span className="sr-only">刷新</span>
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="7" onValueChange={setPeriod}>
          <TabsList className="grid w-full grid-cols-4 mb-4">
            <TabsTrigger value="1">1天</TabsTrigger>
            <TabsTrigger value="7">7天</TabsTrigger>
            <TabsTrigger value="30">30天</TabsTrigger>
            <TabsTrigger value="90">90天</TabsTrigger>
          </TabsList>

          <div className="h-[200px] w-full relative">
            {loading && priceHistory.length === 0 ? (
              <div className="flex justify-center items-center h-full">
                <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-yellow-500"></div>
              </div>
            ) : error && priceHistory.length === 0 ? (
              <div className="flex flex-col justify-center items-center h-full">
                <Alert variant="destructive" className="mb-4">
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
                <Button onClick={fetchPriceHistory} className="bg-yellow-500 hover:bg-yellow-600">
                  重试
                </Button>
              </div>
            ) : priceHistory.length === 0 ? (
              <div className="flex justify-center items-center h-full text-gray-500">暂无价格数据</div>
            ) : (
              <>
                <svg width="100%" height={chartHeight} className="overflow-visible">
                  {/* 价格线 */}
                  <path d={generatePath()} fill="none" stroke="#EAB308" strokeWidth="2" />

                  {/* 填充区域 */}
                  <path
                    d={`${generatePath()} L 100,${chartHeight} L 0,${chartHeight} Z`}
                    fill="url(#gradient)"
                    opacity="0.2"
                  />

                  {/* 渐变定义 */}
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#EAB308" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#EAB308" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                </svg>

                {/* 价格范围 */}
                <div className="absolute top-0 right-0 text-xs text-gray-500">
                  {new Intl.NumberFormat("zh-CN", {
                    style: "currency",
                    currency: "USD",
                    minimumFractionDigits: 4,
                    maximumFractionDigits: 4,
                  }).format(maxPrice)}
                </div>
                <div className="absolute bottom-0 right-0 text-xs text-gray-500">
                  {new Intl.NumberFormat("zh-CN", {
                    style: "currency",
                    currency: "USD",
                    minimumFractionDigits: 4,
                    maximumFractionDigits: 4,
                  }).format(minPrice)}
                </div>

                {dataSource === "mock" && (
                  <div className="absolute bottom-0 left-0 right-0 text-xs text-amber-600 bg-amber-50 p-2 rounded-md text-center">
                    注意：显示的是模拟数据，非实际市场价格。
                  </div>
                )}
                {(error || dataSource === "cache" || dataSource === "lastSuccessful") && dataSource !== "mock" && (
                  <div className="absolute bottom-0 left-0 right-0 text-xs text-amber-600 bg-amber-50 p-2 rounded-md text-center">
                    注意：无法获取最新数据，显示的可能不是最新价格。
                  </div>
                )}
              </>
            )}
          </div>
        </Tabs>
      </CardContent>
    </Card>
  )
}
