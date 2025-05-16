import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQPage() {
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
            <h1 className="text-3xl font-bold">常见问题</h1>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="relative mb-8">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
              <Input type="search" placeholder="搜索问题..." className="pl-8 bg-white" />
            </div>

            <div className="grid gap-8">
              <div>
                <h2 className="text-xl font-bold mb-4">基础知识</h2>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>什么是狗狗币？</AccordionTrigger>
                    <AccordionContent>
                      狗狗币(Dogecoin)是一种基于区块链技术的加密货币，于2013年由Billy Markus和Jackson
                      Palmer创建。它最初是作为比特币的一个玩笑而创建的，以网络流行的"Doge"柴犬表情包为标志。尽管起源于玩笑，狗狗币已发展成为一种受欢迎的加密货币，拥有庞大的社区支持。
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>狗狗币挖矿是什么？</AccordionTrigger>
                    <AccordionContent>
                      狗狗币挖矿是通过计算机解决复杂数学问题来验证交易并将其添加到狗狗币区块链的过程。矿工通过提供计算能力来保护网络，并因此获得新铸造的狗狗币作为奖励。狗狗币使用Scrypt算法进行挖矿，这与比特币使用的SHA-256算法不同。
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>我需要什么设备来挖掘狗狗币？</AccordionTrigger>
                    <AccordionContent>
                      挖掘狗狗币主要有三种设备选择：ASIC矿机、GPU(显卡)和CPU。ASIC矿机专为挖矿设计，效率最高但价格昂贵；GPU挖矿是性价比较高的选择，适合中小型矿工；CPU挖矿效率极低，不推荐用于盈利目的。对于初学者，建议从GPU挖矿开始，或考虑加入矿池以提高收益稳定性。
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-4">
                    <AccordionTrigger>狗狗币挖矿是否合法？</AccordionTrigger>
                    <AccordionContent>
                      狗狗币挖矿在大多数国家是合法的，但法律状况因国家而异。一些国家如中国、俄罗斯、土耳其等对加密货币有严格限制。在开始挖矿前，请务必了解您所在国家或地区的相关法规。此外，请注意挖矿产生的收入可能需要缴税，建议咨询专业税务顾问了解您的纳税义务。
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>

              <div>
                <h2 className="text-xl font-bold mb-4">挖矿技术问题</h2>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-5">
                    <AccordionTrigger>什么是挖矿难度？它如何影响我的收益？</AccordionTrigger>
                    <AccordionContent>
                      挖矿难度是衡量在区块链网络中找到有效区块的难度系数。随着更多矿工加入网络，难度会自动增加，使得找到新区块的平均时间保持稳定。当难度增加时，相同算力的挖矿设备产出的狗狗币会减少。因此，即使您的设备性能保持不变，随着网络难度的增加，您的挖矿收益可能会逐渐降低。
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-6">
                    <AccordionTrigger>什么是矿池？我应该加入矿池吗？</AccordionTrigger>
                    <AccordionContent>
                      矿池是矿工们共同贡献算力以增加找到区块几率的组织。当矿池找到区块时，奖励会按照每个矿工贡献的算力比例分配。对于大多数个人矿工，特别是算力较小的矿工，加入矿池是更明智的选择，因为它提供了更稳定的收入流。单独挖矿可能需要很长时间才能找到区块，而且收益具有很大的不确定性。
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-7">
                    <AccordionTrigger>如何选择最佳的挖矿软件？</AccordionTrigger>
                    <AccordionContent>
                      选择挖矿软件时，应考虑以下因素：兼容性（确保软件支持您的硬件）、性能（寻找能提供最高哈希率的软件）、用户界面（初学者可能更喜欢图形界面）、开发者支持（活跃维护的软件更可靠）以及安全性（避免来源不明的软件）。常用的狗狗币挖矿软件包括CGMiner、EasyMiner和cpuminer-multi等。
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-8">
                    <AccordionTrigger>我的挖矿设备需要特殊的散热措施吗？</AccordionTrigger>
                    <AccordionContent>
                      是的，挖矿设备在长时间运行时会产生大量热量，适当的散热对于设备寿命和性能至关重要。对于GPU挖矿，确保机箱通风良好，考虑额外的风扇或水冷系统；对于ASIC矿机，需要放置在通风良好的环境中，某些情况下可能需要专业的散热系统。监控设备温度，避免过热导致性能下降或硬件损坏。
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>

              <div>
                <h2 className="text-xl font-bold mb-4">经济与投资</h2>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-9">
                    <AccordionTrigger>挖矿狗狗币是否有利可图？</AccordionTrigger>
                    <AccordionContent>
                      狗狗币挖矿的盈利性取决于多个因素：硬件成本、电费、狗狗币价格、网络难度等。在进行投资前，建议使用挖矿收益计算器估算潜在收益。需要注意的是，加密货币市场波动较大，狗狗币价格可能大幅波动，影响挖矿收益。此外，随着时间推移，挖矿难度通常会增加，可能降低收益率。
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-10">
                    <AccordionTrigger>我应该购买新设备还是二手设备进行挖矿？</AccordionTrigger>
                    <AccordionContent>
                      这取决于您的预算和风险承受能力。新设备通常有保修、性能更好且寿命更长，但初始投资较高。二手设备价格更低，投资回报期可能更短，但存在性能下降和提前故障的风险。如果选择二手设备，建议从可靠来源购买，检查使用历史和当前状况，并测试性能。无论选择哪种方式，都应计算投资回报期。
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-11">
                    <AccordionTrigger>电费如何影响我的挖矿收益？</AccordionTrigger>
                    <AccordionContent>
                      电费是挖矿运营成本中最主要的持续支出。在一些电价高的地区，电费可能占到挖矿总成本的70%以上。计算挖矿收益时，必须考虑设备功耗和当地电价。公式为：每日电费
                      = 设备功率(kW) × 24小时 ×
                      电价(元/kWh)。如果电费成本超过挖矿收益，那么挖矿活动将亏损。寻找低电价地区或使用可再生能源可以降低电费成本。
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-12">
                    <AccordionTrigger>我应该持有挖到的狗狗币还是立即出售？</AccordionTrigger>
                    <AccordionContent>
                      这是一个个人投资决策，取决于您对狗狗币未来价值的看法和风险承受能力。立即出售可以锁定当前收益，避免价格下跌风险，并帮助支付运营成本。持有则是押注狗狗币价格未来会上涨，潜在收益可能更高，但也承担价格下跌的风险。许多矿工采用混合策略，出售一部分支付成本，持有剩余部分作为长期投资。
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>

              <div>
                <h2 className="text-xl font-bold mb-4">故障排除</h2>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-13">
                    <AccordionTrigger>我的挖矿软件无法连接到矿池，该怎么办？</AccordionTrigger>
                    <AccordionContent>
                      首先检查网络连接是否正常，然后验证矿池地址和端口是否正确。确认您的防火墙或杀毒软件没有阻止挖矿软件。检查矿池是否处于维护状态。如果使用代理或VPN，尝试禁用它们。最后，尝试使用不同的矿池或挖矿软件来排除特定兼容性问题。如果问题持续存在，查阅软件文档或联系矿池支持。
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-14">
                    <AccordionTrigger>我的挖矿设备哈希率低于预期，可能的原因是什么？</AccordionTrigger>
                    <AccordionContent>
                      哈希率低于预期可能有多种原因：驱动程序过时或不兼容、设备过热导致降频、电源不足、挖矿软件配置不当、设备超频设置不稳定、后台运行其他程序占用资源、硬件老化或损坏。解决方法包括：更新驱动程序、改善散热、使用更高质量的电源、优化挖矿软件设置、调整超频参数、关闭不必要的程序，以及检查硬件状况。
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-15">
                    <AccordionTrigger>我的ASIC矿机发出异常噪音，这是正常的吗？</AccordionTrigger>
                    <AccordionContent>
                      ASIC矿机通常会产生较大噪音，这主要来自散热风扇。然而，如果噪音突然增大或出现异常声音（如咔嗒声、刮擦声），可能表明存在问题。常见原因包括：风扇轴承磨损、风扇叶片积灰、风扇碰到障碍物、电源问题或内部组件松动。建议定期清洁矿机，检查风扇状况，确保放置在平稳表面上，并在必要时更换损坏的风扇。
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-16">
                    <AccordionTrigger>我的挖矿收益突然下降，可能是什么原因？</AccordionTrigger>
                    <AccordionContent>
                      挖矿收益突然下降可能由以下因素导致：网络难度增加、狗狗币价格下跌、矿池问题（如服务中断或费率变化）、设备性能下降、电力问题导致设备不稳定运行、挖矿软件错误或更新问题。建议检查这些因素，比较当前网络难度和价格与之前的数据，确认设备运行状态，并考虑尝试不同的矿池或更新挖矿软件。
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>

            <div className="mt-12 p-6 bg-yellow-50 rounded-lg border border-yellow-200">
              <h2 className="text-xl font-bold mb-4">没有找到您的问题？</h2>
              <p className="mb-4">如果您有其他问题或需要更详细的帮助，请随时联系我们的支持团队。</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-yellow-500 hover:bg-yellow-600">联系支持</Button>
                <Button variant="outline">访问社区论坛</Button>
              </div>
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
