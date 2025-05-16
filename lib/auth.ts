"use server"

import { cookies } from "next/headers"

// 模拟用户数据库 - 在实际应用中，这应该连接到真实数据库
const users: { id: string; email: string; password: string; name: string; createdAt: Date }[] = []

// 生成唯一ID
function generateId() {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}

// 设置会话cookie
export async function setSession(userId: string) {
  cookies().set("session", userId, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60 * 24 * 7, // 一周
    path: "/",
    sameSite: "lax",
  })
}

// 获取当前会话
export async function getSession() {
  const session = cookies().get("session")
  return session?.value
}

// 获取当前用户
export async function getCurrentUser() {
  const userId = await getSession()
  if (!userId) return null

  return users.find((user) => user.id === userId) || null
}

// 登出
export async function logout() {
  cookies().delete("session")
}

// 登录
export async function login(formData: FormData) {
  const email = formData.get("email") as string
  const password = formData.get("password") as string

  if (!email || !password) {
    return { success: false, message: "请提供邮箱和密码" }
  }

  // 验证邮箱格式
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return { success: false, message: "请输入有效的邮箱地址" }
  }

  const user = users.find((u) => u.email === email && u.password === password)

  if (!user) {
    return { success: false, message: "邮箱或密码不正确" }
  }

  await setSession(user.id)
  return { success: true, user }
}

// 注册
export async function register(formData: FormData) {
  const email = formData.get("email") as string
  const password = formData.get("password") as string
  const name = formData.get("name") as string

  if (!email || !password || !name) {
    return { success: false, message: "所有字段都是必填的" }
  }

  // 验证邮箱格式
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return { success: false, message: "请输入有效的邮箱地址" }
  }

  // 检查邮箱是否已被使用
  if (users.some((u) => u.email === email)) {
    return { success: false, message: "该邮箱已被注册" }
  }

  const newUser = {
    id: generateId(),
    email,
    password,
    name,
    createdAt: new Date(),
  }

  users.push(newUser)
  await setSession(newUser.id)

  return { success: true, user: newUser }
}

// 重置密码 (简化版)
export async function resetPassword(formData: FormData) {
  const email = formData.get("email") as string

  if (!email) {
    return { success: false, message: "请提供邮箱地址" }
  }

  // 验证邮箱格式
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return { success: false, message: "请输入有效的邮箱地址" }
  }

  const user = users.find((u) => u.email === email)

  if (!user) {
    return { success: false, message: "未找到该邮箱对应的账户" }
  }

  // 在实际应用中，这里应该发送重置密码邮件
  return { success: true, message: "密码重置链接已发送到您的邮箱" }
}
