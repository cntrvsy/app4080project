import { z } from 'zod'

// Sign In Schema
export const SignInSchema = z.object({
    email: z.string().email().min(3),
    password: z.string().min(6)
  })

export type SignInSchema = typeof SignInSchema;

// Sign Up Schema
export const SignUpSchema = z.object({
  email: z.string().email().min(3),
  password: z.string().min(6)
})

export type SignUpSchema = typeof SignUpSchema;