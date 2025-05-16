import Link from "next/link"
import { resetPassword } from "@/lib/auth"
import { AuthForm } from "@/components/auth-form"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function ForgotPasswordPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center justify-center">
            <span className="text-2xl font-bold text-yellow-500">狗狗币挖矿</span>
          </Link>
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900">重置您的密码</h2>
          <p className="mt-2 text-sm text-gray-600">我们将向您发送密码重置链接</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>忘记密码</CardTitle>
            <CardDescription>输入您的邮箱地址，我们将发送重置链接</CardDescription>
          </CardHeader>
          <CardContent>
            <AuthForm
              action={resetPassword}
              submitText="发送重置链接"
              fields={[
                {
                  id: "email",
                  label: "邮箱",
                  type: "email",
                  placeholder: "您的邮箱地址",
                  required: true,
                  autoComplete: "email",
                },
              ]}
            />
          </CardContent>
          <CardFooter className="flex justify-center">
            <Link href="/login" className="text-sm font-medium text-yellow-600 hover:text-yellow-500">
              返回登录
            </Link>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
