'use client'
import { SessionProvider } from "next-auth/react"

export const Provider = (props) => {
    return <SessionProvider>{props.children}</SessionProvider>
}