import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Cpu, Gauge, HardDrive, Zap } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function HardwarePage() {
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
      <main className="flex-1">
        <div className="container px-4 md:px-6 py-8">
          <div className="flex items-center mb-6">
            <Link href="/" className="flex items-center text-sm text-gray-500 hover:text-gray-900 mr-4">
              <ArrowLeft className="mr-1 h-4 w-4" />
              返回首页
            </Link>
            <h1 className="text-3xl font-bold">狗狗币挖矿硬件推荐</h1>
          </div>

          <p className="text-lg text-gray-600 mb-8">
            选择合适的硬件对于狗狗币挖矿至关重要。以下是我们根据不同预算和需求推荐的挖矿硬件。
          </p>

          <Tabs defaultValue="asic" className="w-full mb-8">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="asic">ASIC矿机</TabsTrigger>
              <TabsTrigger value="gpu">GPU挖矿</TabsTrigger>
              <TabsTrigger value="cpu">CPU挖矿</TabsTrigger>
            </TabsList>
            <TabsContent value="asic" className="p-4 border rounded-md mt-4">
              <div className="grid gap-6">
                <div>
                  <h2 className="text-2xl font-bold mb-4">ASIC矿机推荐</h2>
                  <p className="mb-4">
                    ASIC (Application-Specific Integrated Circuit)
                    矿机是专为特定算法设计的挖矿设备，提供最高的挖矿效率。对于狗狗币挖矿，您需要寻找支持Scrypt算法的ASIC矿机。
                  </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  <Card>
                    <CardHeader>
                      <CardTitle>Bitmain Antminer L7</CardTitle>
                      <CardDescription>高端ASIC矿机</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="aspect-square relative mb-4">
                        <Image
                          src="/placeholder.svg?height=300&width=300"
                          alt="Bitmain Antminer L7"
                          fill
                          className="object-contain"
                        />
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-sm font-medium">算力:</span>
                          <span className="text-sm">9.5 GH/s</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm font-medium">功耗:</span>
                          <span className="text-sm">3425W</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm font-medium">效率:</span>
                          <span className="text-sm">0.36 J/MH</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm font-medium">价格范围:</span>
                          <span className="text-sm">$10,000-$15,000</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full bg-yellow-500 hover:bg-yellow-600">查看详情</Button>
                    </CardFooter>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Goldshell LT6</CardTitle>
                      <CardDescription>中端ASIC矿机</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="aspect-square relative mb-4">
                        <Image
                          src="/placeholder.svg?height=300&width=300"
                          alt="Goldshell LT6"
                          fill
                          className="object-contain"
                        />
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-sm font-medium">算力:</span>
                          <span className="text-sm">3.35 GH/s</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm font-medium">功耗:</span>
                          <span className="text-sm">3100W</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm font-medium">效率:</span>
                          <span className="text-sm">0.93 J/MH</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm font-medium">价格范围:</span>
                          <span className="text-sm">$5,000-$7,000</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full bg-yellow-500 hover:bg-yellow-600">查看详情</Button>
                    </CardFooter>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>FusionSilicon X7</CardTitle>
                      <CardDescription>入门级ASIC矿机</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="aspect-square relative mb-4">
                        <Image
                          src="/placeholder.svg?height=300&width=300"
                          alt="FusionSilicon X7"
                          fill
                          className="object-contain"
                        />
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-sm font-medium">算力:</span>
                          <span className="text-sm">1.48 GH/s</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm font-medium">功耗:</span>
                          <span className="text-sm">1350W</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm font-medium">效率:</span>
                          <span className="text-sm">0.91 J/MH</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm font-medium">价格范围:</span>
                          <span className="text-sm">$2,000-$3,000</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full bg-yellow-500 hover:bg-yellow-600">查看详情</Button>
                    </CardFooter>
                  </Card>
                </div>

                <div className="bg-yellow-50 p-4 rounded-md border border-yellow-200 mt-4">
                  <h3 className="font-semibold text-yellow-800 mb-2">ASIC矿机注意事项</h3>
                  <ul className="list-disc pl-6 text-sm text-yellow-700">
                    <li>ASIC矿机噪音较大，需要考虑放置位置</li>
                    <li>功耗高，需要稳定的电源供应</li>
                    <li>散热要求高，需要良好的通风环境</li>
                    <li>购买前检查当地电费，确保挖矿盈利</li>
                    <li>考虑二手市场，但注意验证设备状况</li>
                  </ul>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="gpu" className="p-4 border rounded-md mt-4">
              <div className="grid gap-6">
                <div>
                  <h2 className="text-2xl font-bold mb-4">GPU挖矿推荐</h2>
                  <p className="mb-4">
                    GPU挖矿是一种灵活的挖矿方式，您可以使用游戏显卡进行挖矿，并且在不挖矿时可以用于其他用途。虽然GPU在狗狗币挖矿效率上不如ASIC矿机，但仍然是许多矿工的选择。
                  </p>
                </div>

                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>显卡型号</TableHead>
                        <TableHead>算力 (MH/s)</TableHead>
                        <TableHead>功耗 (W)</TableHead>
                        <TableHead>效率 (MH/W)</TableHead>
                        <TableHead>价格范围 (¥)</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium">NVIDIA RTX 3090</TableCell>
                        <TableCell>1.25</TableCell>
                        <TableCell>320</TableCell>
                        <TableCell>0.0039</TableCell>
                        <TableCell>8,000-12,000</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">NVIDIA RTX 3080</TableCell>
                        <TableCell>1.10</TableCell>
                        <TableCell>280</TableCell>
                        <TableCell>0.0039</TableCell>
                        <TableCell>5,000-8,000</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">AMD Radeon RX 6900 XT</TableCell>
                        <TableCell>1.05</TableCell>
                        <TableCell>300</TableCell>
                        <TableCell>0.0035</TableCell>
                        <TableCell>6,000-9,000</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">NVIDIA RTX 3070</TableCell>
                        <TableCell>0.85</TableCell>
                        <TableCell>220</TableCell>
                        <TableCell>0.0039</TableCell>
                        <TableCell>3,500-5,500</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">AMD Radeon RX 6800</TableCell>
                        <TableCell>0.83</TableCell>
                        <TableCell>250</TableCell>
                        <TableCell>0.0033</TableCell>
                        <TableCell>4,000-6,000</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">NVIDIA RTX 3060 Ti</TableCell>
                        <TableCell>0.70</TableCell>
                        <TableCell>200</TableCell>
                        <TableCell>0.0035</TableCell>
                        <TableCell>2,500-4,000</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <Card>
                    <CardHeader>
                      <CardTitle>GPU挖矿优势</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        <li className="flex items-center">
                          <Gauge className="mr-2 h-4 w-4 text-green-500" />
                          <span>灵活性高，可用于其他用途</span>
                        </li>
                        <li className="flex items-center">
                          <Gauge className="mr-2 h-4 w-4 text-green-500" />
                          <span>初始投资较低</span>
                        </li>
                        <li className="flex items-center">
                          <Gauge className="mr-2 h-4 w-4 text-green-500" />
                          <span>可以挖掘多种加密货币</span>
                        </li>
                        <li className="flex items-center">
                          <Gauge className="mr-2 h-4 w-4 text-green-500" />
                          <span>二手市场价值保持较好</span>
                        </li>
                        <li className="flex items-center">
                          <Gauge className="mr-2 h-4 w-4 text-green-500" />
                          <span>噪音较ASIC矿机小</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>GPU挖矿劣势</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        <li className="flex items-center">
                          <Zap className="mr-2 h-4 w-4 text-red-500" />
                          <span>算力低于ASIC矿机</span>
                        </li>
                        <li className="flex items-center">
                          <Zap className="mr-2 h-4 w-4 text-red-500" />
                          <span>能效比较低</span>
                        </li>
                        <li className="flex items-center">
                          <Zap className="mr-2 h-4 w-4 text-red-500" />
                          <span>需要组装和维护矿机</span>
                        </li>
                        <li className="flex items-center">
                          <Zap className="mr-2 h-4 w-4 text-red-500" />
                          <span>需要额外购买电源、主板等配件</span>
                        </li>
                        <li className="flex items-center">
                          <Zap className="mr-2 h-4 w-4 text-red-500" />
                          <span>软件配置较复杂</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                <div className="bg-blue-50 p-4 rounded-md border border-blue-200 mt-4">
                  <h3 className="font-semibold text-blue-800 mb-2">GPU挖矿建议</h3>
                  <p className="text-sm text-blue-700 mb-2">对于GPU挖矿，我们建议：</p>
                  <ul className="list-disc pl-6 text-sm text-blue-700">
                    <li>选择能效比高的显卡，如NVIDIA 30系列</li>
                    <li>使用高质量电源，确保稳定供电</li>
                    <li>保持良好散热，延长显卡寿命</li>
                    <li>考虑使用挖矿架，提高散热效率</li>
                    <li>使用专业挖矿软件，如T-Rex Miner或GMiner</li>
                  </ul>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="cpu" className="p-4 border rounded-md mt-4">
              <div className="grid gap-6">
                <div>
                  <h2 className="text-2xl font-bold mb-4">CPU挖矿</h2>
                  <p className="mb-4">
                    CPU挖矿是入门门槛最低的挖矿方式，几乎任何计算机都可以参与。然而，由于狗狗币使用Scrypt算法，CPU挖矿效率极低，通常不推荐作为主要挖矿方式。
                  </p>
                </div>

                <div className="bg-red-50 p-4 rounded-md border border-red-200">
                  <h3 className="font-semibold text-red-800 mb-2">CPU挖矿效率警告</h3>
                  <p className="text-sm text-red-700">
                    使用CPU挖掘狗狗币的收益极低，在大多数情况下，电费成本将超过挖矿收益。我们建议仅将CPU挖矿作为学习和体验目的，而不是作为盈利手段。
                  </p>
                </div>

                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>处理器型号</TableHead>
                        <TableHead>算力 (kH/s)</TableHead>
                        <TableHead>功耗 (W)</TableHead>
                        <TableHead>效率 (kH/W)</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium">AMD Ryzen 9 5950X</TableCell>
                        <TableCell>17.5</TableCell>
                        <TableCell>105</TableCell>
                        <TableCell>0.167</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Intel Core i9-12900K</TableCell>
                        <TableCell>16.2</TableCell>
                        <TableCell>125</TableCell>
                        <TableCell>0.130</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">AMD Ryzen 7 5800X</TableCell>
                        <TableCell>12.8</TableCell>
                        <TableCell>105</TableCell>
                        <TableCell>0.122</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Intel Core i7-12700K</TableCell>
                        <TableCell>12.5</TableCell>
                        <TableCell>125</TableCell>
                        <TableCell>0.100</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">AMD Ryzen 5 5600X</TableCell>
                        <TableCell>9.5</TableCell>
                        <TableCell>65</TableCell>
                        <TableCell>0.146</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <Card>
                    <CardHeader>
                      <CardTitle>CPU挖矿软件</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        <li className="flex items-center">
                          <Cpu className="mr-2 h-4 w-4 text-yellow-500" />
                          <span>cpuminer-multi</span>
                        </li>
                        <li className="flex items-center">
                          <Cpu className="mr-2 h-4 w-4 text-yellow-500" />
                          <span>XMRig (可配置用于Scrypt)</span>
                        </li>
                        <li className="flex items-center">
                          <Cpu className="mr-2 h-4 w-4 text-yellow-500" />
                          <span>Awesome Miner</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>CPU挖矿替代方案</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm mb-4">如果您只有CPU可用于挖矿，考虑以下替代方案：</p>
                      <ul className="space-y-2">
                        <li className="flex items-center">
                          <HardDrive className="mr-2 h-4 w-4 text-green-500" />
                          <span>挖掘其他对CPU友好的加密货币，如Monero</span>
                        </li>
                        <li className="flex items-center">
                          <HardDrive className="mr-2 h-4 w-4 text-green-500" />
                          <span>参与分布式计算项目，如Folding@home</span>
                        </li>
                        <li className="flex items-center">
                          <HardDrive className="mr-2 h-4 w-4 text-green-500" />
                          <span>使用云挖矿服务</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
          </Tabs>

          <div className="border rounded-lg p-6 bg-gray-50">
            <h2 className="text-2xl font-bold mb-4">挖矿硬件投资回报计算</h2>
            <p className="mb-6">在投资挖矿硬件前，请考虑以下因素来计算潜在的回报：</p>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">硬件成本</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500">包括矿机、电源、散热设备等初始投资</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">电费成本</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500">设备功耗 × 电价 × 运行时间</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">挖矿收益</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500">算力 × 狗狗币产出 × 狗狗币价格</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">其他成本</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500">包括维护、矿池费用、网络费用等</p>
                </CardContent>
              </Card>
            </div>

            <div className="mt-6">
              <Button className="bg-yellow-500 hover:bg-yellow-600">使用挖矿收益计算器</Button>
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
