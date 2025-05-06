import { UserModel } from '../models/user.model'

export default defineEventHandler(async (event) => {
  // Skip auth for non-admin routes
  if (!event.path.startsWith('/api/admin')) {
    return
  }

  const authHeader = getHeader(event, 'Authorization')
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    throw createError({
      statusCode: 401,
      statusMessage: 'Unauthorized: No token provided'
    })
  }

  const token = authHeader.split(' ')[1]
  const decoded = await UserModel.verifyToken(token)

  if (!decoded) {
    throw createError({
      statusCode: 401,
      statusMessage: 'Unauthorized: Invalid token'
    })
  }

  // Attach user to the context
  event.context.user = decoded
})