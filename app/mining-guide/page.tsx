import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Download, Server, Settings, Shield } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function MiningGuidePage() {
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
            <h1 className="text-3xl font-bold">狗狗币挖矿指南</h1>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="md:col-span-2">
              <Tabs defaultValue="beginner" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="beginner">新手指南</TabsTrigger>
                  <TabsTrigger value="intermediate">进阶设置</TabsTrigger>
                  <TabsTrigger value="advanced">高级优化</TabsTrigger>
                </TabsList>
                <TabsContent value="beginner" className="p-4 border rounded-md mt-4">
                  <h2 className="text-2xl font-bold mb-4">狗狗币挖矿新手指南</h2>
                  <p className="mb-4">
                    狗狗币(Dogecoin)是一种基于Scrypt算法的加密货币，相比比特币的SHA-256算法，它更适合个人挖矿。以下是开始挖掘狗狗币的基本步骤：
                  </p>

                  <h3 className="text-xl font-semibold mt-6 mb-2">第一步：准备钱包</h3>
                  <p className="mb-4">在开始挖矿前，您需要一个狗狗币钱包来存储您挖到的币。您可以选择：</p>
                  <ul className="list-disc pl-6 mb-4">
                    <li>官方钱包 - Dogecoin Core</li>
                    <li>在线钱包 - Dogechain.info</li>
                    <li>移动钱包 - Trust Wallet, Coinomi</li>
                  </ul>
                  <Button variant="outline" className="mb-6">
                    <Download className="mr-2 h-4 w-4" />
                    下载官方钱包
                  </Button>

                  <h3 className="text-xl font-semibold mt-6 mb-2">第二步：选择挖矿方式</h3>
                  <p className="mb-4">狗狗币挖矿主要有两种方式：</p>
                  <div className="grid gap-4 md:grid-cols-2 mb-6">
                    <Card>
                      <CardHeader>
                        <CardTitle>单独挖矿</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm">独自挖矿，所有收益归您所有，但难度较大，适合拥有强大算力的矿工。</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader>
                        <CardTitle>矿池挖矿</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm">加入矿池与其他矿工共同挖矿，按贡献分配收益，更稳定但需支付矿池费用。</p>
                      </CardContent>
                    </Card>
                  </div>

                  <h3 className="text-xl font-semibold mt-6 mb-2">第三步：设置挖矿软件</h3>
                  <p className="mb-4">根据您的硬件选择合适的挖矿软件：</p>
                  <ul className="list-disc pl-6 mb-6">
                    <li>CPU挖矿：cpuminer</li>
                    <li>GPU挖矿：CGMiner, EasyMiner</li>
                    <li>ASIC挖矿：专用矿机自带软件</li>
                  </ul>

                  <h3 className="text-xl font-semibold mt-6 mb-2">第四步：开始挖矿</h3>
                  <p className="mb-4">
                    配置好软件后，您就可以开始挖矿了。记得监控您的设备温度和性能，确保安全高效地挖矿。
                  </p>

                  <div className="bg-yellow-50 p-4 rounded-md border border-yellow-200 mt-6">
                    <h4 className="font-semibold text-yellow-800">新手提示</h4>
                    <p className="text-sm text-yellow-700">
                      对于大多数新手来说，加入矿池是最好的选择。推荐的矿池包括：Aikapool、Litecoinpool（合并挖矿）和Prohashing。
                    </p>
                  </div>
                </TabsContent>
                <TabsContent value="intermediate" className="p-4 border rounded-md mt-4">
                  <h2 className="text-2xl font-bold mb-4">进阶挖矿设置</h2>
                  <p className="mb-4">当您熟悉了基本的挖矿流程后，可以考虑以下进阶设置来提高您的挖矿效率：</p>

                  <h3 className="text-xl font-semibold mt-6 mb-2">优化挖矿软件配置</h3>
                  <p className="mb-4">调整挖矿软件的参数可以显著提高挖矿效率：</p>
                  <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto mb-6">
                    <code>{`--scrypt -o stratum+tcp://pool.example.com:3333 -u YOUR_WALLET_ADDRESS -p x -I 13`}</code>
                  </pre>

                  <h3 className="text-xl font-semibold mt-6 mb-2">设置矿池策略</h3>
                  <p className="mb-4">不同的矿池有不同的支付方式，了解并选择适合您的矿池：</p>
                  <ul className="list-disc pl-6 mb-6">
                    <li>PPS (Pay Per Share) - 每提交一个有效份额就获得固定支付</li>
                    <li>PPLNS (Pay Per Last N Shares) - 根据最近N个份额计算收益</li>
                    <li>PROP (Proportional) - 按比例分配区块奖励</li>
                  </ul>

                  <h3 className="text-xl font-semibold mt-6 mb-2">监控和维护</h3>
                  <p className="mb-4">使用监控工具来跟踪您的挖矿性能：</p>
                  <ul className="list-disc pl-6 mb-6">
                    <li>HWiNFO - 监控硬件温度和性能</li>
                    <li>Mining Pool Hub - 查看您的挖矿统计数据</li>
                    <li>设置自动重启脚本，在出现问题时自动恢复挖矿</li>
                  </ul>

                  <div className="bg-blue-50 p-4 rounded-md border border-blue-200 mt-6">
                    <h4 className="font-semibold text-blue-800">进阶提示</h4>
                    <p className="text-sm text-blue-700">
                      考虑设置自动转换服务，将挖到的狗狗币自动转换为其他加密货币或法币，以规避市场波动风险。
                    </p>
                  </div>
                </TabsContent>
                <TabsContent value="advanced" className="p-4 border rounded-md mt-4">
                  <h2 className="text-2xl font-bold mb-4">高级挖矿优化</h2>
                  <p className="mb-4">对于经验丰富的矿工，以下高级优化技巧可以进一步提升挖矿效率和收益：</p>

                  <h3 className="text-xl font-semibold mt-6 mb-2">硬件超频</h3>
                  <p className="mb-4">通过安全地超频您的挖矿硬件，可以提高算力：</p>
                  <ul className="list-disc pl-6 mb-6">
                    <li>GPU超频 - 使用MSI Afterburner等工具调整核心频率和内存频率</li>
                    <li>ASIC超频 - 根据矿机型号调整频率和电压</li>
                    <li>注意：超频会增加功耗和热量，需要加强散热</li>
                  </ul>

                  <h3 className="text-xl font-semibold mt-6 mb-2">自定义固件</h3>
                  <p className="mb-4">为ASIC矿机安装自定义固件可以解锁更多功能：</p>
                  <ul className="list-disc pl-6 mb-6">
                    <li>Braiins OS - 开源矿机固件，提供高级功能</li>
                    <li>HiveOS - 多功能挖矿操作系统，支持远程管理</li>
                    <li>注意：刷固件有风险，可能导致设备损坏</li>
                  </ul>

                  <h3 className="text-xl font-semibold mt-6 mb-2">多币种挖矿策略</h3>
                  <p className="mb-4">实施智能挖矿策略，最大化收益：</p>
                  <ul className="list-disc pl-6 mb-6">
                    <li>合并挖矿 - 同时挖掘多种使用相同算法的加密货币</li>
                    <li>自动切换 - 使用如NiceHash等服务自动切换到最有利可图的币种</li>
                    <li>套利挖矿 - 根据市场价格和难度动态调整挖矿策略</li>
                  </ul>

                  <h3 className="text-xl font-semibold mt-6 mb-2">挖矿场设置</h3>
                  <p className="mb-4">对于大规模挖矿操作，考虑以下因素：</p>
                  <ul className="list-disc pl-6 mb-6">
                    <li>电力管理 - 寻找低成本电力，考虑太阳能等可再生能源</li>
                    <li>散热系统 - 设计高效的散热系统，降低温度</li>
                    <li>网络冗余 - 设置备用网络连接，确保挖矿不中断</li>
                  </ul>

                  <div className="bg-purple-50 p-4 rounded-md border border-purple-200 mt-6">
                    <h4 className="font-semibold text-purple-800">专家提示</h4>
                    <p className="text-sm text-purple-700">
                      考虑使用API和自动化脚本来监控市场趋势，自动调整挖矿策略，以及在最佳时机出售您挖到的狗狗币。
                    </p>
                  </div>
                </TabsContent>
              </Tabs>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>推荐矿池</CardTitle>
                  <CardDescription>加入这些矿池开始挖矿</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <Server className="mr-2 h-4 w-4 text-yellow-500" />
                      <span>Aikapool</span>
                    </li>
                    <li className="flex items-center">
                      <Server className="mr-2 h-4 w-4 text-yellow-500" />
                      <span>Prohashing</span>
                    </li>
                    <li className="flex items-center">
                      <Server className="mr-2 h-4 w-4 text-yellow-500" />
                      <span>Litecoinpool (合并挖矿)</span>
                    </li>
                    <li className="flex items-center">
                      <Server className="mr-2 h-4 w-4 text-yellow-500" />
                      <span>ViaBTC</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>挖矿软件</CardTitle>
                  <CardDescription>常用的狗狗币挖矿软件</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <Settings className="mr-2 h-4 w-4 text-yellow-500" />
                      <span>CGMiner (GPU/ASIC)</span>
                    </li>
                    <li className="flex items-center">
                      <Settings className="mr-2 h-4 w-4 text-yellow-500" />
                      <span>EasyMiner (初学者友好)</span>
                    </li>
                    <li className="flex items-center">
                      <Settings className="mr-2 h-4 w-4 text-yellow-500" />
                      <span>cpuminer (CPU)</span>
                    </li>
                    <li className="flex items-center">
                      <Settings className="mr-2 h-4 w-4 text-yellow-500" />
                      <span>MultiMiner (多币种)</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>安全提示</CardTitle>
                  <CardDescription>保护您的挖矿操作</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <Shield className="mr-2 h-4 w-4 text-yellow-500" />
                      <span>使用强密码保护钱包</span>
                    </li>
                    <li className="flex items-center">
                      <Shield className="mr-2 h-4 w-4 text-yellow-500" />
                      <span>定期备份钱包文件</span>
                    </li>
                    <li className="flex items-center">
                      <Shield className="mr-2 h-4 w-4 text-yellow-500" />
                      <span>使用可信任的矿池和软件</span>
                    </li>
                    <li className="flex items-center">
                      <Shield className="mr-2 h-4 w-4 text-yellow-500" />
                      <span>监控设备温度防止过热</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
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
