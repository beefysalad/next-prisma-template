import { z } from 'zod'

export const LoginSchema = z.object({
  email: z.email({
    message: 'Email is required',
  }),
  password: z.string().min(1, {
    message: 'Password is required',
  }),
})

//form
export const RegisterSchema = z
  .object({
    email: z.string().email({
      message: 'Email is required',
    }),
    password: z.string().min(6, {
      message: 'Minimum 6 characters required',
    }),
    confirmPassword: z.string().min(6, {
      message: 'Minimum 6 characters required',
    }),
    name: z.string().min(1, {
      message: 'Name is required',
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  })

//api
export const RegisterSchemaApi = z.object({
  email: z.string().email({
    message: 'Email is required',
  }),
  password: z.string().min(6, {
    message: 'Minimum 6 characters required',
  }),
  name: z.string().min(1, {
    message: 'Name is required',
  }),
})

export type TRegisterSchemaApi = z.infer<typeof RegisterSchemaApi>
export type TLoginSchema = z.infer<typeof LoginSchema>
export type TRegisterSchema = z.infer<typeof RegisterSchema>
