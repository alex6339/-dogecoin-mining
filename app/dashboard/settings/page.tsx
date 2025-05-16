import Link from "next/link"
import Image from "next/image"
import { redirect } from "next/navigation"
import { getCurrentUser, logout } from "@/lib/auth"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BarChart, Cpu, Settings, User, LogOut } from "lucide-react"

export default async function SettingsPage() {
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
              <Link href="/dashboard" className="flex items-center space-x-2 px-3 py-2 rounded-md hover:bg-gray-100">
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
                className="flex items-center space-x-2 px-3 py-2 rounded-md bg-yellow-100 text-yellow-900"
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
          <div className="max-w-3xl mx-auto">
            <h1 className="text-2xl font-bold mb-6">账户设置</h1>

            <Tabs defaultValue="profile" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-6">
                <TabsTrigger value="profile">个人资料</TabsTrigger>
                <TabsTrigger value="wallet">钱包设置</TabsTrigger>
                <TabsTrigger value="notifications">通知设置</TabsTrigger>
              </TabsList>
              <TabsContent value="profile">
                <Card>
                  <CardHeader>
                    <CardTitle>个人资料</CardTitle>
                    <CardDescription>管理您的个人信息</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        姓名
                      </label>
                      <Input id="name" defaultValue={user.name} />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        邮箱
                      </label>
                      <Input id="email" defaultValue={user.email} disabled />
                      <p className="text-xs text-gray-500">邮箱地址不可更改</p>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="password" className="text-sm font-medium">
                        密码
                      </label>
                      <Input id="password" type="password" value="********" disabled />
                      <Button variant="outline" size="sm">
                        更改密码
                      </Button>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="bg-yellow-500 hover:bg-yellow-600">保存更改</Button>
                  </CardFooter>
                </Card>
              </TabsContent>
              <TabsContent value="wallet">
                <Card>
                  <CardHeader>
                    <CardTitle>钱包设置</CardTitle>
                    <CardDescription>管理您的狗狗币钱包</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <label htmlFor="wallet-address" className="text-sm font-medium">
                        狗狗币钱包地址
                      </label>
                      <Input
                        id="wallet-address"
                        placeholder="输入您的狗狗币钱包地址"
                        pattern="^D[5-9A-HJ-NP-U]{1}[1-9A-HJ-NP-Za-km-z]{32}$"
                        title="请输入有效的狗狗币钱包地址，以D开头，长度为34个字符"
                      />
                      <p className="text-xs text-gray-500">挖矿收益将发送到此地址</p>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="payout-threshold" className="text-sm font-medium">
                        支付阈值
                      </label>
                      <div className="flex items-center space-x-2">
                        <Input id="payout-threshold" type="number" defaultValue="100" />
                        <span className="text-sm font-medium">DOGE</span>
                      </div>
                      <p className="text-xs text-gray-500">当余额达到此阈值时自动支付</p>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="bg-yellow-500 hover:bg-yellow-600">保存钱包设置</Button>
                  </CardFooter>
                </Card>
              </TabsContent>
              <TabsContent value="notifications">
                <Card>
                  <CardHeader>
                    <CardTitle>通知设置</CardTitle>
                    <CardDescription>管理您的通知偏好</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium">矿机状态通知</p>
                        <p className="text-xs text-gray-500">当您的矿机离线或性能下降时通知您</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          id="miner-status"
                          className="rounded text-yellow-500 focus:ring-yellow-500"
                          defaultChecked
                        />
                        <label htmlFor="miner-status" className="text-sm">
                          启用
                        </label>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium">支付通知</p>
                        <p className="text-xs text-gray-500">当您收到挖矿支付时通知您</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          id="payment-notifications"
                          className="rounded text-yellow-500 focus:ring-yellow-500"
                          defaultChecked
                        />
                        <label htmlFor="payment-notifications" className="text-sm">
                          启用
                        </label>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium">市场价格提醒</p>
                        <p className="text-xs text-gray-500">当狗狗币价格发生重大变化时通知您</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          id="price-alerts"
                          className="rounded text-yellow-500 focus:ring-yellow-500"
                        />
                        <label htmlFor="price-alerts" className="text-sm">
                          启用
                        </label>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium">电子邮件通讯</p>
                        <p className="text-xs text-gray-500">接收关于新功能和挖矿技巧的电子邮件</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          id="newsletter"
                          className="rounded text-yellow-500 focus:ring-yellow-500"
                          defaultChecked
                        />
                        <label htmlFor="newsletter" className="text-sm">
                          启用
                        </label>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="bg-yellow-500 hover:bg-yellow-600">保存通知设置</Button>
                  </CardFooter>
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
