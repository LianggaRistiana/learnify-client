"use client"

import { z } from "zod"

export const loginSchema = z.object({
  email: z.string()
    .email({ message: "Invalid email address" })
    .max(100, { message: "Email must be less than 100 characters" }),
  
  password: z.string()
    .min(6, { message: "Password must be at least 6 characters" })
    .max(100, { message: "Password must be less than 100 characters" }),
})
