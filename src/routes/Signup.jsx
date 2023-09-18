



const Signup = () =>{



    return(
        <div className="h-[calc(100vh)] w-full bg-gray-200 flex justify-center items-center">
            <div className="bg-white w-96 px-4 py-6 rounded-lg shadow-2xl">
                <div className="text-center">
                    <h1 className="uppercase text-2xl font-semibold">fitze</h1>
                    <p className="capitalize text-gray-600">the health master</p>
                </div>
                <div className="mt-4">
                    <form className="flex flex-col">
                    <label className="mt-1">Enter Your Name</label>
                        <input className="border-2 border-gray-800 px-4 py-2 rounded-lg" type="email" placeholder="barath"/>
                        <label className="mt-4">Enter Your Email Address</label>
                        <input className="border-2 border-gray-800 px-4 py-2 rounded-lg" type="email" placeholder="example@gmail.com"/>
                        <label className="mt-4">Enter Your Password</label>
                        <input className="border-2 mt-2 border-gray-800 px-4 py-2 rounded-lg" type="password" placeholder="*******"/>
                        <label className="mt-4">Re-Enter Your Password</label>
                        <input className="border-2 mt-2 border-gray-800 px-4 py-2 rounded-lg" type="password" placeholder="*******"/>
                        <button className="text-white uppercase bg-gray-800 hover:bg-gray-900 duration-300 px-4 py-2 rounded-lg mt-4" type="submit">
                            create account
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mb-1 inline-flex items-center ml-2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                            </svg>


                        </button>
                    </form>
                    <div className="mt-4 select-none">
                        <h1 className="capitalize">already have a account? <a className="text-blue-600 hover:underline" href="/signin">login</a></h1>
                    </div>
                </div>
            </div>
        </div>
        
    )
};


export default Signup;