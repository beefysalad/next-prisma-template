import prisma from '@/lib/prisma'
import bcrypt from 'bcryptjs'
import { TRegisterSchemaApi } from '../schemas/auth'

export async function registerUser(data: TRegisterSchemaApi) {
  try {
    const findExisting = await prisma.user.findUnique({
      where: {
        email: data.email,
      },
    })
    if (findExisting) {
      throw new Error('User already exists')
    }
    const hashedPassword = await bcrypt.hash(data.password, 10)
    const user = await prisma.user.create({
      data: {
        email: data.email,
        hashedPassword: hashedPassword,
        name: data.name,
      },
    })
    return user
  } catch (error) {
    throw error
  }
}
