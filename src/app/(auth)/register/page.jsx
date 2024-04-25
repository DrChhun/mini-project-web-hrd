import { handleRegister } from "@/app/actions/workspaceAction"
const Register = () => {
    return (
        <div className="container w-full flex flex-col justify-center h-screen">
            <div>
                <img className="h-[50px] items-start" src="/assets/icons/logo.svg" alt="" />
            </div>
            <div className="flex mt-12">
                <div className="w-1/2">
                    <form className="space-y-8" action={handleRegister}>
                        <div className="flex space-x-4">
                            <div className="flex flex-col space-y-2 w-full">
                                <label className="text-slate-500" htmlFor="">First Name :</label>
                                <input name="fname" type="text" className="bg-[#eeeeee] px-6 py-4 rounded-xl" placeholder="Enter your name." />
                            </div>
                            <div className="flex flex-col space-y-2 w-full">
                                <label className="text-slate-500" htmlFor="">Last Name :</label>
                                <input name="lname" type="text" className="bg-[#eeeeee] px-6 py-4 rounded-xl" placeholder="Enter your name." />
                            </div>
                        </div>
                        <div className="flex space-x-4">
                            <div className="flex flex-col space-y-2 w-full">
                                <label className="text-slate-500" htmlFor="">Email :</label>
                                <input name="email" type="text" className="bg-[#eeeeee] px-6 py-4 rounded-xl" placeholder="info@xyz.com" />
                            </div>
                            <div className="flex flex-col space-y-2 w-full">
                                <label className="text-slate-500" htmlFor="">Mobile No. :</label>
                                <input name="mobile" type="text" className="bg-[#eeeeee] px-6 py-4 rounded-xl" placeholder="+91-98596 58000" />
                            </div>
                        </div>
                        <div className="flex space-x-4">
                            <div className="flex flex-col space-y-2 w-full">
                                <label className="text-slate-500" htmlFor="">Password :</label>
                                <input name="password" type="text" className="bg-[#eeeeee] px-6 py-4 rounded-xl" placeholder="xxxxxxxx" />
                            </div>
                            <div className="flex flex-col space-y-2 w-full">
                                <label className="text-slate-500" htmlFor="">Confirm Password :</label>
                                <input name="confirm" type="text" className="bg-[#eeeeee] px-6 py-4 rounded-xl" placeholder="xxxxxxxx" />
                            </div>
                        </div>
                        <button className="!mt-8 w-fit px-12 bg-blue-600 text-white border-2 border-blue-600 py-4 rounded-xl text-lg" type="submit">Sign Up</button>
                    </form>
                </div>
                <img className="w-1/2 p-8" src="/assets/icons/sign-up.svg" alt="" />
            </div>
        </div>
    )
}

export default Register