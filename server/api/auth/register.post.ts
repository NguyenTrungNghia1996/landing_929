import { UserModel } from '../../models/user.model'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  
  if (!body.username || !body.password) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Username and password are required'
    })
  }

  // Check if user already exists
  const existingUser = await UserModel.findUserByUsername(body.username)
  if (existingUser) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Username already exists'
    })
  }

  const userId = await UserModel.createUser({
    username: body.username,
    password: body.password,
    role: body.role || 'user'
  })

  return { success: true, userId }
})