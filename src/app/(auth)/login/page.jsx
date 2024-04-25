'use client'
import Link from "next/link"
import { signIn, useSession } from "next-auth/react"
import { useRouter } from "next/navigation"

const Login = () => {
    const router = useRouter();
    const { data } = useSession();
    const handleLogin = async (userData) => {
        const newUser = {
            email: userData.get('email'),
            password: userData.get('password')
        }

        //working with next auth
        const res = await signIn("credentials", {
            redirect: false,
            ...newUser
        })

        { res.ok && router.push('/todo-list') }

    }
    return (
        <div className="container py-12">
            <img src="/assets/icons/logo.svg" alt="" />
            <div className="flex mt-6 w-full h-[80vh]">
                <div className="w-1/2 flex flex-col py-24 justify-between">
                    <form action={handleLogin} className="w-2/3 mx-auto space-y-6">
                        <h2 className="text-3xl font-semibold text-slate-800">Login</h2>
                        <div className="flex space-y-4 flex-col">
                            <input className="px-6 py-4 border-2 border-slate-200 rounded-xl" type="text" name="email" placeholder="Email" />
                            <input className="px-6 py-4 border-2 border-slate-200 rounded-xl" type="text" name="password" placeholder="Password" />
                        </div>
                        <button className="!mt-8 w-full hover:bg-[#d0d0d0] duration-300 bg-[#306BFF] py-4 rounded-xl text-lg text-white" type="submit">Login</button>
                        <p className="mt-4 text-slate-500">Don't have an account? <Link href={`/register`} className="text-[#306BFF] font-semibold">Register</Link></p>
                        <button onClick={() => signIn("google")} className="!mt-8 w-full border-2 border-slate-200 py-4 rounded-xl text-lg text-[#505050]" type="button">
                            <div className="flex justify-center">
                                <img className=" h-7" src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png" alt="" />
                                Google
                            </div>
                        </button>
                    </form>
                    <p className="capitalize text-[#8A8A8A]">@ 2024 My office . All Rights Reserved</p>
                </div>
                <img className="w-1/2" src="/assets/icons/login.svg" alt="" />
            </div>
        </div>
    )
}

export default Login