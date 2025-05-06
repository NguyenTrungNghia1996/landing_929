import { seedAdminUser } from './../utils/seed'

export default defineEventHandler(async (event) => {
  // Chỉ cho phép trong development
  if (process.env.NODE_ENV !== 'development') {
    throw createError({
      statusCode: 403,
      statusMessage: 'Forbidden'
    })
  }

  await seedAdminUser()
  
  return { success: true, message: 'Seed completed' }
})