import { getDb } from '../utils/mongodb'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

const runtimeConfig = useRuntimeConfig()

export interface User {
  _id?: string
  username: string
  password: string
  role?: string
  createdAt?: Date
  updatedAt?: Date
}

export const UserModel = {
  async createUser(user: Omit<User, '_id' | 'createdAt' | 'updatedAt'>) {
    const db = await getDb()
    const hashedPassword = await bcrypt.hash(user.password, 10)
    const newUser = {
      ...user,
      password: hashedPassword,
      role: user.role || 'user',
      createdAt: new Date(),
      updatedAt: new Date()
    }
    
    const result = await db.collection<User>('users').insertOne(newUser)
    return result.insertedId
  },

  async findUserByUsername(username: string) {
    const db = await getDb()
    return await db.collection<User>('users').findOne({ username })
  },

  async validatePassword(user: User, password: string) {
    return await bcrypt.compare(password, user.password)
  },

  generateToken(user: User) {
    return jwt.sign(
      { userId: user._id, username: user.username, role: user.role },
      runtimeConfig.jwtSecret,
      { expiresIn: runtimeConfig.jwtExpiresIn }
    )
  },

  async verifyToken(token: string) {
    try {
      return jwt.verify(token, runtimeConfig.jwtSecret) as { 
        userId: string
        username: string
        role: string
        iat: number
        exp: number
      }
    } catch (error) {
      return null
    }
  }
}