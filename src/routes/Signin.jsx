


const Signin = () =>{


    console.log("hello, world");
    return(
        <div className="h-[calc(100vh)] w-full bg-gray-200 flex justify-center items-center">
            <div className="bg-white w-96 px-4 py-6 rounded-lg shadow-2xl">
                <div className="text-center">
                    <h1 className="uppercase text-2xl font-semibold">fitze</h1>
                    <p className="capitalize text-gray-600">the health master</p>
                </div>
                <div className="mt-4">
                    <form className="flex flex-col">
                        <label className="mt-1">Enter Your Email Address</label>
                        <input className="border-2 border-gray-800 px-4 py-2 rounded-lg" type="email" placeholder="example@gmail.com"/>
                        <label className="mt-4">Enter Your Password</label>
                        <input className="border-2 mt-2 border-gray-800 px-4 py-2 rounded-lg" type="password" placeholder="*******"/>
                        <button className="text-white uppercase bg-gray-800 hover:bg-gray-900 duration-300 px-4 py-2 rounded-lg mt-4" type="submit">
                            login
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mb-1 inline-flex items-center ml-2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>

                        </button>
                    </form>
                    <div className="mt-4 select-none">
                        <h1 className="capitalize">new to fitze? <a className="text-blue-600 hover:underline" href="/signup">create a Account</a></h1>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Signin;