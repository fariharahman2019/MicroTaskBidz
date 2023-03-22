import React, { useState } from "react";
import { FaRegEnvelope} from 'react-icons/fa';
import { MdLockOutline } from 'react-icons/md';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";

function SignIn(){

    const [user, setUser] = useState(
        { email: "",
         password: "" }
        );
      const users = useSelector(selectUser);
      const navigate = useNavigate();

      function handleSubmit(e) {
        e.preventDefault();
        if (user.email === "" && user.password === "") {
          alert("Please enter your Email & Password");
        }
        else if (user.email === users.email && user.password === users.password) {
          navigate("/");
        }
       
      }

      function handleChange(e) {
        const { name, value } = e.target;
        // console.log(e.target);
        setUser({ ...user, [name]: value });
      }


    return(
        <div className="flex flex-col items-center min-h-screen py-2 bg-zinc-800">
            <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
                <div className="bg-cyan-800 rounded-2xl shadow-2xl flex w-full max-w-3xl">
                    <div className="w-full p-5 py-10">
                        <h2 className="font-serif text-3xl font-bold text-white mb-2">Welcome Back to MicroTaskBidz</h2>
                        <p className='text-zinc-200 my-3 pt-6 pb-6'>Sign in using your email</p>
                        <div className='flex flex-col items-center'>
                            <div className="bg-gray-100 w-64 p-2 flex items-center mb-3">
                                <FaRegEnvelope className='text-gray-400 mr-2'/>
                                <input onChange={handleChange} value={user.email} required type="email" name="email" placeholder="Email" className='bg-gray-100 outline-none text-sm'></input>
                            </div>

                            <div className="bg-gray-100 w-64 p-2 flex items-center">
                                <MdLockOutline className='text-gray-400 mr-2'/>
                                <input  onChange={handleChange} value={user.password} required type="password" name="password" placeholder="Password" className='bg-gray-100 outline-none text-sm'></input>
                            </div>

                            <div className='flex w-64 justify-between mb-5 mt-1 pt-2'>
                                <label className='flex-items-center text-xs text-white'><input type="checkbox" name="remember" className="mr-1"/>Remember me</label>
                                <p href="#" className="text-xs text-white">Forgot Password?</p>
                            </div>  

                            <div>
                                <p className="rounded-full px-12 py-2 inline-block font-semibold text-sm pb-6 text-zinc-200">Don't Have an Account? <span className="underline md:underline-offset-4"><Link to="/SignUp"> Sign Up </Link> </span> </p>
                            </div>

                            <div>
                                <button className='font-semibold bg-white border-2 text-gray-600 border-cyan-900 rounded-lg px-6 w-full py-2  shadow-lg shadow-gray-500/50 hover:bg-zinc-800 hover:text-white'><Link to="/"> Sign In </Link></button>
                            </div>

                        </div>
                    </div>
                </div>            
            </form>
        </div>
    )
}

export default SignIn;