"use client"

import { z } from "zod"

export const registerSchema = z.object({
  name: z.string()
    .min(2, { message: "Name must be at least 2 characters" })
    .max(100, { message: "Name must be less than 100 characters" }),

  email: z.string()
    .email({ message: "Invalid email address" })
    .max(100, { message: "Email must be less than 100 characters" }),

  password: z.string()
    .min(6, { message: "Password must be at least 6 characters" })
    .max(100, { message: "Password must be less than 100 characters" }),

  confirmPassword: z.string()
    .min(6, { message: "Confirm password must be at least 6 characters" })
}).refine((data) => data.password === data.confirmPassword, {
  path: ["confirmPassword"],
  message: "Passwords do not match",
})
