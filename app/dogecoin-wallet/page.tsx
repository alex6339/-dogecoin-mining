import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { QrCode } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription } from "@/components/ui/alert"

export default function DogecoinWalletPage() {
  // 请替换为您的实际狗狗币钱包地址
  const DOGECOIN_ADDRESS = "D9fYj9aB4Z9fYj9aB4Z9fYj9aB4Z9fYj9aB4Z9fYj9" // 示例地址

  return (
    <div className="container mx-auto py-12">
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl">购买狗狗币打款地址</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">狗狗币钱包地址</h3>
                <p className="text-sm text-muted-foreground">
                  请将狗狗币转账到以下地址
                </p>
              </div>
              <Button
                variant="outline"
                onClick={() => {
                  navigator.clipboard.writeText(DOGECOIN_ADDRESS)
                  alert("钱包地址已复制到剪贴板！")
                }}
              >
                复制地址
              </Button>
            </div>

            <div className="flex flex-col items-center gap-4">
              <div className="w-48 h-48 bg-gray-100 rounded-lg flex items-center justify-center">
                <QrCode className="w-32 h-32 text-gray-400" />
                {/* 这里需要替换为实际的二维码图片 */}
              </div>
              <p className="text-sm text-center text-muted-foreground">
                扫描二维码或复制地址进行转账
              </p>
            </div>

            <Alert>
              <AlertDescription>
                <strong>注意事项：</strong>
                <ul className="list-disc list-inside mt-2">
                  <li>请确保转账金额正确</li>
                  <li>转账后请保留交易记录</li>
                  <li>如有问题请联系客服</li>
                </ul>
              </AlertDescription>
            </Alert>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
