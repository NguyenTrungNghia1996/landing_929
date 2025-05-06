import { getDb } from './mongodb'
import bcrypt from 'bcryptjs'
import { User } from '../models/user.model'

const runtimeConfig = useRuntimeConfig()

export async function seedAdminUser() {
  const db = await getDb()
  const usersCollection = db.collection<User>('users')
  
  // Kiểm tra xem đã có admin chưa
  const existingAdmin = await usersCollection.findOne({ username: 'admin' })
  
  if (existingAdmin) {
    console.log('Admin user already exists')
    return
  }

  // Tạo admin mới
  const hashedPassword = await bcrypt.hash('admin123', 10)
  
  await usersCollection.insertOne({
    username: 'admin',
    password: hashedPassword,
    role: 'admin',
    createdAt: new Date(),
    updatedAt: new Date()
  })

  console.log('Admin user created successfully')
}