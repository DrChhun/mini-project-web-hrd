import { loginService } from "@/service/auth.service";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
export const authOption = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        }),
        CredentialsProvider({
            // The name to display on the sign in form (e.g. 'Sign in with...')
            name: "Credentials",
            credentials: {},
            async authorize(data) {
                const userData = {
                    email: data?.email,
                    password: data?.password,
                };
                const userInfo = await loginService(userData)
                return userInfo;
            },
        }),
    ],
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: '/login'
    },
    callbacks: {
        async jwt({ token, user }) {
            return { ...token, ...user };
        },
        async session({ session, token }) {
            session.user = token;
            return session;
        },
    },
};
const handler = NextAuth(authOption);
export { handler as GET, handler as POST };