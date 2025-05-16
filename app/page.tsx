import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Cpu, DollarSign, BarChart } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { PriceDisplay } from "@/components/price-display"

export default function Home() {
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
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-yellow-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">开始挖掘狗狗币，加入数字货币革命</h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    狗狗币是一种流行的加密货币，通过挖矿可以获得回报。我们的网站提供全面的指南，帮助您开始狗狗币挖矿之旅。
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/mining-guide">
                    <Button className="bg-yellow-500 hover:bg-yellow-600">
                      开始挖矿
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/faq">
                    <Button variant="outline">了解更多</Button>
                  </Link>
                </div>
              </div>
              <div className="mx-auto lg:mr-0">
                <Image
                  alt="狗狗币挖矿示意图"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover"
                  height={310}
                  src="/placeholder.svg?height=310&width=550"
                  width={550}
                />
              </div>
            </div>
          </div>
        </section>

        {/* 添加价格部分 */}
        <section className="w-full py-8 bg-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <PriceDisplay />
              </div>
              <div className="flex items-center justify-center">
                <Link href="/price">
                  <Button className="bg-yellow-500 hover:bg-yellow-600">
                    查看详细价格信息
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">为什么选择挖掘狗狗币？</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  狗狗币是一种有趣且有潜力的加密货币，以下是选择挖掘狗狗币的几个理由
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
              <Card>
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <Cpu className="h-8 w-8 text-yellow-500" />
                  <CardTitle className="text-lg">易于开始</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500">相比其他加密货币，狗狗币挖矿门槛较低，适合初学者入门。</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <DollarSign className="h-8 w-8 text-yellow-500" />
                  <CardTitle className="text-lg">潜在回报</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500">随着狗狗币价格的波动，挖矿可能带来可观的经济回报。</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <BarChart className="h-8 w-8 text-yellow-500" />
                  <CardTitle className="text-lg">社区支持</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500">狗狗币拥有庞大而活跃的社区，为矿工提供支持和资源。</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">开始您的挖矿之旅</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  按照以下步骤，快速开始您的狗狗币挖矿之旅
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3 mt-8">
              <div className="flex flex-col items-center space-y-2 border rounded-lg p-4 bg-white">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-yellow-100 text-yellow-600">
                  1
                </div>
                <h3 className="text-xl font-bold">选择合适的硬件</h3>
                <p className="text-sm text-gray-500 text-center">
                  了解并选择适合狗狗币挖矿的硬件设备，包括GPU或ASIC矿机。
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border rounded-lg p-4 bg-white">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-yellow-100 text-yellow-600">
                  2
                </div>
                <h3 className="text-xl font-bold">设置挖矿软件</h3>
                <p className="text-sm text-gray-500 text-center">下载并配置挖矿软件，连接到矿池，准备开始挖矿。</p>
              </div>
              <div className="flex flex-col items-center space-y-2 border rounded-lg p-4 bg-white">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-yellow-100 text-yellow-600">
                  3
                </div>
                <h3 className="text-xl font-bold">开始挖矿</h3>
                <p className="text-sm text-gray-500 text-center">
                  启动挖矿程序，监控性能，并将挖到的狗狗币存入您的钱包。
                </p>
              </div>
            </div>
            <div className="flex justify-center mt-8">
              <Link href="/mining-guide">
                <Button className="bg-yellow-500 hover:bg-yellow-600">
                  查看详细指南
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
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
