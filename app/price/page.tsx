import Link from "next/link"
import Image from "next/image"
import { PriceDisplay } from "@/components/price-display"
import { PriceChart } from "@/components/price-chart"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, TrendingUp, DollarSign, BarChart2, Layers } from "lucide-react"

export default function PricePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-16 flex items-center border-b">
        <Link className="flex items-center justify-center" href="/">
          <Image
            src="/placeholder.svg?height=40&width=40"
            alt="Dogecoin Logo"
            width={40}
            height={40}
            className="mr-2"
          />
          <span className="text-xl font-bold">狗狗币挖矿</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/">
            首页
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/mining-guide">
            挖矿指南
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/hardware">
            硬件推荐
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/faq">
            常见问题
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/login">
            登录
          </Link>
          <Link
            className="text-sm font-medium bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded-md"
            href="/register"
          >
            注册
          </Link>
        </nav>
      </header>

      <main className="flex-1 py-8 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center mb-6">
            <Link href="/" className="flex items-center text-sm text-gray-500 hover:text-gray-900 mr-4">
              <ArrowLeft className="mr-1 h-4 w-4" />
              返回首页
            </Link>
            <h1 className="text-3xl font-bold">狗狗币价格</h1>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-8">
            <PriceDisplay />

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">挖矿收益计算</CardTitle>
                <CardDescription>基于当前价格</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <TrendingUp className="h-5 w-5 text-yellow-500 mr-2" />
                      <span className="text-sm font-medium">每MH/s每天收益</span>
                    </div>
                    <span className="font-medium">≈ 0.05 DOGE</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <DollarSign className="h-5 w-5 text-yellow-500 mr-2" />
                      <span className="text-sm font-medium">每MH/s每月收益</span>
                    </div>
                    <span className="font-medium">≈ 1.5 DOGE</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <BarChart2 className="h-5 w-5 text-yellow-500 mr-2" />
                      <span className="text-sm font-medium">网络难度</span>
                    </div>
                    <span className="font-medium">8.42M</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Layers className="h-5 w-5 text-yellow-500 mr-2" />
                      <span className="text-sm font-medium">区块奖励</span>
                    </div>
                    <span className="font-medium">10,000 DOGE</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">市场信息</CardTitle>
                <CardDescription>狗狗币市场数据</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-500">流通供应量</p>
                    <p className="font-medium">143.81B DOGE</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">总供应量</p>
                    <p className="font-medium">143.81B DOGE</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">最大供应量</p>
                    <p className="font-medium">无上限</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">排名</p>
                    <p className="font-medium">市值排名 #8</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-6 md:grid-cols-3 mb-8">
            <div className="md:col-span-2">
              <PriceChart />
            </div>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">价格提醒</CardTitle>
                <CardDescription>设置价格变动提醒</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="price-alert" className="block text-sm font-medium text-gray-700 mb-1">
                      价格目标 (USD)
                    </label>
                    <div className="flex">
                      <input
                        type="number"
                        id="price-alert"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="0.00"
                        step="0.0001"
                      />
                      <button className="ml-2 px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600">
                        设置
                      </button>
                    </div>
                  </div>

                  <div>
                    <p className="text-sm font-medium mb-2">活跃提醒</p>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between p-2 bg-gray-50 rounded-md">
                        <span className="text-sm">当价格 &gt; $0.15</span>
                        <button className="text-xs text-red-500">删除</button>
                      </div>
                      <div className="flex items-center justify-between p-2 bg-gray-50 rounded-md">
                        <span className="text-sm">当价格 &lt; $0.05</span>
                        <button className="text-xs text-red-500">删除</button>
                      </div>
                    </div>
                  </div>

                  <div className="text-center text-sm text-gray-500">
                    <p>登录后可以接收价格提醒通知</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200 mb-8">
            <h2 className="text-xl font-bold mb-4">狗狗币挖矿收益计算器</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label htmlFor="hashrate" className="block text-sm font-medium text-gray-700 mb-1">
                  算力 (MH/s)
                </label>
                <input
                  type="number"
                  id="hashrate"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="输入您的算力"
                />
              </div>
              <div>
                <label htmlFor="power" className="block text-sm font-medium text-gray-700 mb-1">
                  功耗 (W)
                </label>
                <input
                  type="number"
                  id="power"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="输入您的功耗"
                />
              </div>
              <div>
                <label htmlFor="electricity" className="block text-sm font-medium text-gray-700 mb-1">
                  电费 ($/kWh)
                </label>
                <input
                  type="number"
                  id="electricity"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="输入您的电费"
                  step="0.01"
                  defaultValue="0.10"
                />
              </div>
              <div>
                <label htmlFor="pool-fee" className="block text-sm font-medium text-gray-700 mb-1">
                  矿池费用 (%)
                </label>
                <input
                  type="number"
                  id="pool-fee"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="矿池费用百分比"
                  step="0.1"
                  defaultValue="1"
                />
              </div>
            </div>
            <div className="mt-4">
              <button className="px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 w-full md:w-auto">
                计算收益
              </button>
            </div>
          </div>
        </div>
      </main>

      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full border-t px-4 md:px-6">
        <p className="text-xs text-gray-500">© 2025 狗狗币挖矿. 保留所有权利.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            条款
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            隐私政策
          </Link>
        </nav>
      </footer>
    </div>
  )
}
