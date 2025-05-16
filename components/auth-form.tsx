"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Alert, AlertDescription } from "@/components/ui/alert"

interface AuthFormProps {
  action: (formData: FormData) => Promise<{ success: boolean; message?: string }>
  submitText: string
  fields: {
    id: string
    label: string
    type: string
    placeholder: string
    required?: boolean
    autoComplete?: string
  }[]
}

export function AuthForm({ action, submitText, fields }: AuthFormProps) {
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  async function handleSubmit(formData: FormData) {
    setLoading(true)
    setError(null)

    try {
      const result = await action(formData)
      if (result.success) {
        router.push("/dashboard")
        router.refresh()
      } else {
        setError(result.message || "发生错误，请重试")
      }
    } catch (err) {
      setError("提交表单时发生错误")
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <form action={handleSubmit}>
      {error && (
        <Alert variant="destructive" className="mb-4">
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {fields.map((field) => (
        <div key={field.id} className="space-y-2 mb-4">
          <label
            htmlFor={field.id}
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            {field.label}
          </label>
          <Input
            id={field.id}
            name={field.id}
            type={field.type}
            placeholder={field.placeholder}
            required={field.required}
            autoComplete={field.autoComplete}
          />
        </div>
      ))}

      <Button type="submit" className="w-full bg-yellow-500 hover:bg-yellow-600" disabled={loading}>
        {loading ? "处理中..." : submitText}
      </Button>
    </form>
  )
}
