"use client"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowUpIcon, ArrowDownIcon, AlertCircle, RefreshCw } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"

interface PriceData {
  price: number
  marketCap: number
  volume24h: number
  change24h: number
  fromCache?: boolean
  fromLastSuccessful?: boolean
  isRealData?: boolean
  isMockData?: boolean
}

export function PriceDisplay() {
  const [priceData, setPriceData] = useState<PriceData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null)
  const [retryCount, setRetryCount] = useState(0)

  // 使用ref来跟踪组件是否已卸载
  const isMounted = useRef(true)

  // 安全地更新状态的函数，只有在组件仍然挂载时才更新
  const safeSetState = {
    setPriceData: (data: PriceData | null) => {
      if (isMounted.current) setPriceData(data)
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
  }

  const fetchPrice = async () => {
    try {
      safeSetState.setLoading(true)
      safeSetState.setError(null)

      const response = await fetch("/api/dogecoin-price", {
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

      const data = await response.json()

      if (!isMounted.current) return // 再次检查组件是否已卸载

      // 检查是否有错误
      if (data.error) {
        throw new Error(data.message || "获取价格数据失败")
      }

      // 验证数据格式
      if (!data || typeof data.price !== "number") {
        throw new Error("返回的数据格式无效")
      }

      safeSetState.setPriceData(data)
      safeSetState.setLastUpdated(new Date())
      safeSetState.setRetryCount(0) // 重置重试计数
    } catch (err) {
      console.error("Error fetching price:", err)
      if (isMounted.current) {
        safeSetState.setError("获取价格数据时出错")

        // 如果是首次加载失败，尝试自动重试一次
        if (retryCount === 0 && !priceData) {
          safeSetState.setRetryCount(1)
          const retryTimeout = setTimeout(() => {
            if (isMounted.current) fetchPrice()
          }, 3000) // 3秒后重试

          // 清理超时
          return () => clearTimeout(retryTimeout)
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

    fetchPrice()

    // 每5分钟刷新一次价格（大幅减少API调用频率）
    const intervalId = setInterval(
      () => {
        if (isMounted.current) fetchPrice()
      },
      5 * 60 * 1000,
    )

    // 组件卸载时清理
    return () => {
      isMounted.current = false
      clearInterval(intervalId)
    }
  }, [])

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat("zh-CN").format(num)
  }

  const formatCurrency = (num: number) => {
    return new Intl.NumberFormat("zh-CN", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 4,
      maximumFractionDigits: 4,
    }).format(num)
  }

  // 获取数据源描述
  const getDataSourceDescription = () => {
    if (error && !priceData) {
      return "未获得API数据"
    }
    if (priceData?.isMockData) {
      return "使用模拟数据"
    }
    if (priceData?.fromCache) {
      return "使用缓存数据"
    }
    if (priceData?.fromLastSuccessful) {
      return "使用上次成功获取的数据"
    }
    return lastUpdated ? `更新于 ${lastUpdated.toLocaleTimeString()}` : "实时市场数据"
  }

  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <div>
            <CardTitle className="text-lg">狗狗币价格</CardTitle>
            <CardDescription>{getDataSourceDescription()}</CardDescription>
          </div>
          <Button variant="ghost" size="sm" onClick={fetchPrice} disabled={loading} className="h-8 w-8 p-0">
            <RefreshCw className={`h-4 w-4 ${loading ? "animate-spin" : ""}`} />
            <span className="sr-only">刷新</span>
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        {loading && !priceData ? (
          <div className="flex justify-center items-center h-20">
            <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-yellow-500"></div>
          </div>
        ) : error && !priceData ? (
          <div className="flex flex-col justify-center items-center">
            <Alert variant="destructive" className="mb-4">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>未获得API数据</AlertDescription>
            </Alert>
            <Button onClick={fetchPrice} className="bg-yellow-500 hover:bg-yellow-600">
              重试
            </Button>
          </div>
        ) : priceData ? (
          <div className="space-y-2">
            <div className="flex items-baseline justify-between">
              <span className="text-3xl font-bold">{formatCurrency(priceData.price)}</span>
              <div className={`flex items-center ${priceData.change24h >= 0 ? "text-green-500" : "text-red-500"}`}>
                {priceData.change24h >= 0 ? (
                  <ArrowUpIcon className="h-4 w-4 mr-1" />
                ) : (
                  <ArrowDownIcon className="h-4 w-4 mr-1" />
                )}
                <span className="font-medium">{priceData.change24h.toFixed(2)}%</span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div>
                <p className="text-gray-500">市值</p>
                <p className="font-medium">{formatCurrency(priceData.marketCap)}</p>
              </div>
              <div>
                <p className="text-gray-500">24小时交易量</p>
                <p className="font-medium">{formatCurrency(priceData.volume24h)}</p>
              </div>
            </div>
            {priceData.isMockData && (
              <div className="mt-2 text-xs text-amber-600 bg-amber-50 p-2 rounded-md">
                注意：显示的是模拟数据，非实际市场价格。
              </div>
            )}
            {(error || priceData.fromCache || priceData.fromLastSuccessful) && !priceData.isMockData && (
              <div className="mt-2 text-xs text-amber-600 bg-amber-50 p-2 rounded-md">
                注意：无法获取最新数据，显示的可能不是最新价格。
              </div>
            )}
          </div>
        ) : null}
      </CardContent>
    </Card>
  )
}
