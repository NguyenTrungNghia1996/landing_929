import { UserModel } from '../../models/user.model'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  
  if (!body.username || !body.password) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Username and password are required'
    })
  }

  const user = await UserModel.findUserByUsername(body.username)
  
  if (!user) {
    throw createError({
      statusCode: 401,
      statusMessage: 'Invalid credentials'
    })
  }

  const isValid = await UserModel.validatePassword(user, body.password)
  
  if (!isValid) {
    throw createError({
      statusCode: 401,
      statusMessage: 'Invalid credentials'
    })
  }

  const token = UserModel.generateToken(user)

  return {
    token,
    user: {
      _id: user._id,
      username: user.username,
      role: user.role
    }
  }
})