import React from 'react';
import { FaRegEnvelope} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { MdLockOutline } from 'react-icons/md';
import { RiLockPasswordFill } from 'react-icons/ri';

const ResetPassword = () => {

    return (
        <div className="flex flex-col items-center min-h-screen py-2 bg-zinc-800">
        <form className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
            <div className="bg-cyan-800 rounded-2xl shadow-2xl flex w-full max-w-3xl">
                <div className="w-full p-5 py-10">
                    <h2 className="font-serif text-3xl font-bold text-white mb-2">Forgot Your Password</h2>
                    <p className='text-zinc-200 my-3 font-bold'>No Worries !!</p>
                    <p className='text-zinc-200 my-3 pt-2 pb-6'>Please check your email and enter the 6 digit code</p>
                    <div className='flex flex-col items-center'>
                    <div className="bg-gray-100 w-64 p-2 flex items-center mb-3">
                            <RiLockPasswordFill className='text-gray-400 mr-2'/>
                            <input type="text" name="text" placeholder="6 Digit Code" className='bg-gray-100 outline-none text-sm'></input>
                        </div>

                        <div className="bg-gray-100 w-64 p-2 flex items-center mb-3">
                            <FaRegEnvelope className='text-gray-400 mr-2'/>
                            <input type="email" name="email" placeholder="Email" className='bg-gray-100 outline-none text-sm'></input>
                        </div>

                        <div className="bg-gray-100 w-64 p-2 flex items-center">
                            <MdLockOutline className='text-gray-400 mr-2'/>
                            <input type="password" name="password" placeholder="Password" className='bg-gray-100 outline-none text-sm'></input>
                        </div>

                        <div className='p-5'>
                            <button className='font-semibold bg-white border-2 text-gray-600 border-cyan-900 rounded-lg px-6 w-full py-2  shadow-lg shadow-gray-500/50 hover:bg-zinc-800 hover:text-white'><Link to="/SignIn"> Reset Password </Link></button>
                        </div>

                    </div>
                </div>
            </div>            
        </form>
    </div>
    );
};

export default ResetPassword;