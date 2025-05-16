import Link from "next/link"
import Image from "next/image"
import { redirect } from "next/navigation"
import { getCurrentUser, logout } from "@/lib/auth"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BarChart, Cpu, Settings, User, LogOut } from "lucide-react"
import { PriceDisplay } from "@/components/price-display"
import { PriceChart } from "@/components/price-chart"

export default async function DashboardPage() {
  const user = await getCurrentUser()

  if (!user) {
    redirect("/login")
  }

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
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/price">
            价格
          </Link>
        </nav>
      </header>

      <div className="flex flex-1">
        {/* 侧边栏 */}
        <div className="w-64 border-r bg-gray-50 p-4 hidden md:block">
          <div className="space-y-4">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center">
                <User className="h-6 w-6 text-yellow-600" />
              </div>
              <div>
                <p className="text-sm font-medium">{user.name}</p>
                <p className="text-xs text-gray-500">{user.email}</p>
              </div>
            </div>

            <nav className="space-y-2">
              <Link
                href="/dashboard"
                className="flex items-center space-x-2 px-3 py-2 rounded-md bg-yellow-100 text-yellow-900"
              >
                <BarChart className="h-5 w-5" />
                <span>仪表盘</span>
              </Link>
              <Link
                href="/dashboard/miners"
                className="flex items-center space-x-2 px-3 py-2 rounded-md hover:bg-gray-100"
              >
                <Cpu className="h-5 w-5" />
                <span>我的矿机</span>
              </Link>
              <Link
                href="/dashboard/settings"
                className="flex items-center space-x-2 px-3 py-2 rounded-md hover:bg-gray-100"
              >
                <Settings className="h-5 w-5" />
                <span>设置</span>
              </Link>
              <form action={logout}>
                <Button
                  variant="ghost"
                  className="w-full justify-start px-3 py-2 h-auto font-normal text-red-600 hover:text-red-700 hover:bg-red-50"
                >
                  <LogOut className="h-5 w-5 mr-2" />
                  退出登录
                </Button>
              </form>
            </nav>
          </div>
        </div>

        {/* 主内容区 */}
        <div className="flex-1 p-6">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-2xl font-bold mb-6">欢迎回来，{user.name}</h1>

            <div className="grid gap-6 md:grid-cols-3 mb-8">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">总收益</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">0 DOGE</div>
                  <p className="text-xs text-gray-500 mt-1">≈ 0.00 CNY</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">活跃矿机</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">0</div>
                  <p className="text-xs text-gray-500 mt-1">总算力: 0 MH/s</p>
                </CardContent>
              </Card>
              <PriceDisplay />
            </div>

            <div className="grid gap-6 md:grid-cols-3 mb-8">
              <div className="md:col-span-2">
                <PriceChart />
              </div>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">挖矿收益估算</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-500">每日预估</span>
                      <span className="font-medium">0 DOGE</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-500">每周预估</span>
                      <span className="font-medium">0 DOGE</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-500">每月预估</span>
                      <span className="font-medium">0 DOGE</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-500">电费成本</span>
                      <span className="font-medium">0.00 USD</span>
                    </div>
                    <div className="pt-2 border-t">
                      <div className="flex justify-between">
                        <span className="text-sm font-medium">净收益</span>
                        <span className="font-medium text-green-500">0.00 USD</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-6">
                <TabsTrigger value="overview">概览</TabsTrigger>
                <TabsTrigger value="earnings">收益历史</TabsTrigger>
                <TabsTrigger value="miners">矿机状态</TabsTrigger>
              </TabsList>
              <TabsContent value="overview">
                <Card>
                  <CardHeader>
                    <CardTitle>挖矿概览</CardTitle>
                    <CardDescription>您的挖矿活动总览</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-center p-12 border-2 border-dashed rounded-lg">
                      <div className="text-center">
                        <Cpu className="mx-auto h-12 w-12 text-gray-400" />
                        <h3 className="mt-2 text-sm font-semibold text-gray-900">没有活跃的矿机</h3>
                        <p className="mt-1 text-sm text-gray-500">开始添加您的第一台矿机来开始挖矿</p>
                        <div className="mt-6">
                          <Button className="bg-yellow-500 hover:bg-yellow-600">添加矿机</Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="earnings">
                <Card>
                  <CardHeader>
                    <CardTitle>收益历史</CardTitle>
                    <CardDescription>查看您的挖矿收益历史</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-center p-12 border-2 border-dashed rounded-lg">
                      <div className="text-center">
                        <BarChart className="mx-auto h-12 w-12 text-gray-400" />
                        <h3 className="mt-2 text-sm font-semibold text-gray-900">暂无收益数据</h3>
                        <p className="mt-1 text-sm text-gray-500">开始挖矿后，您的收益将显示在这里</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="miners">
                <Card>
                  <CardHeader>
                    <CardTitle>矿机状态</CardTitle>
                    <CardDescription>管理您的挖矿设备</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-center p-12 border-2 border-dashed rounded-lg">
                      <div className="text-center">
                        <Cpu className="mx-auto h-12 w-12 text-gray-400" />
                        <h3 className="mt-2 text-sm font-semibold text-gray-900">没有矿机</h3>
                        <p className="mt-1 text-sm text-gray-500">添加您的矿机来开始挖矿</p>
                        <div className="mt-6">
                          <Button className="bg-yellow-500 hover:bg-yellow-600">添加矿机</Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>

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
