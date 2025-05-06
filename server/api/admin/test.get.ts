export default defineEventHandler((event) => {
  // This route is protected by the auth middleware
  const user = event.context.user
  
  return {
    message: `Hello admin ${user.username}`,
    user
  }
})