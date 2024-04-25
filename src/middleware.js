export { default } from "next-auth/middleware"

//all route below is the route that we need to protect
export const config = { matcher: ['/todo-list/:path*', '/todo-board/:path*'] }