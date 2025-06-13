'use client';

import '@/app/globals.css';
import Image from 'next/image';
import SuccessToast from '@/app/DashBoard/Generic-Component/popup';
import { useState } from 'react';
// import { Inter } from 'next/font/google';

const loginApp = () => {
   const [showSuccess, setShowSuccess] = useState(false);
   
   const handleSuccessEvent = () => {
    setShowSuccess(true);
   };
   
  return (
    <div className="login-page min-h-screen flex items-center justify-center bg-white">
      <div  style={{marginTop:'2rem',paddingBottom:'2rem'}} className=" flex flex-col  justify-center gap-12 bg-white p-12 rounded shadow-md w-full min-h-screen">
        <div className='flex flex-col items-center gap-3 mb-6'>
        {/* Logo and Title */}
          <div className="flex flex-col items-center mb-6">
          <img
            src='/images/logo.png'
            alt="InvestNaija Logo"
            />
          <p className='text-2xl font-semibold text-[var(--primary)]'>InvestNaija</p>
        </div>
        <p className=" text-4xl font-extrabold text-gray-800 mb-6 text-center">Welcome to InvestNaija</p>
        <p className="text-var(--sm) text-gray-500 mb-4 text-center">LEARN. INVEST. GROW.</p>
        </div>
        {/* Social Login Buttons */}
        <div className="flex flex-col items-center justify-center gap-3 space-y-4 my-6">
          <button style={{padding:'2rem'}} className="flex items-center justify-center gap-4 w-128 h-12 px-4 py-6 bg-white text-gray-800 p-2 border border-gray-300 rounded-4xl hover:bg-[var(--primary)] hover:text-white transition duration-200 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 48 48">
              <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
            </svg>
            Continue with Google
          </button>
          <button style={{padding:'2rem'}} className="flex items-center justify-center gap-4 w-128 h-12 px-4 py-6 bg-white text-gray-800 p-2 border border-gray-300 rounded-4xl hover:bg-[var(--primary)] hover:text-white transition duration-200 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 50 50 ">
             <path d="M 44.527344 34.75 C 43.449219 37.144531 42.929688 38.214844 41.542969 40.328125 C 39.601563 43.28125 36.863281 46.96875 33.480469 46.992188 C 30.46875 47.019531 29.691406 45.027344 25.601563 45.0625 C 21.515625 45.082031 20.664063 47.03125 17.648438 47 C 14.261719 46.96875 11.671875 43.648438 9.730469 40.699219 C 4.300781 32.429688 3.726563 22.734375 7.082031 17.578125 C 9.457031 13.921875 13.210938 11.773438 16.738281 11.773438 C 20.332031 11.773438 22.589844 13.746094 25.558594 13.746094 C 28.441406 13.746094 30.195313 11.769531 34.351563 11.769531 C 37.492188 11.769531 40.8125 13.480469 43.1875 16.433594 C 35.421875 20.691406 36.683594 31.78125 44.527344 34.75 Z M 31.195313 8.46875 C 32.707031 6.527344 33.855469 3.789063 33.4375 1 C 30.972656 1.167969 28.089844 2.742188 26.40625 4.78125 C 24.878906 6.640625 23.613281 9.398438 24.105469 12.066406 C 26.796875 12.152344 29.582031 10.546875 31.195313 8.46875 Z"></path>
            </svg>
            Continue with Apple
          </button>
          </div>
        {/* OR Divider */}
        <div className="flex items-center justify-center my-4 gap-2">
          <div className="border-t border-gray-300 h-1 w-40"></div>
          <span className="text mx-4 text-gray-500">OR</span>
          <div className="border-t border-gray-300 h-1 w-40"></div>
          </div>
        {/* Login Form */}
        <div className="flex flex-col items-center justify center gap-4 space-y-4">
          <input
            type="email"
            placeholder="helloyou@gmail.com"
            style={{padding:'2rem'}}
            className="w-128 h-12 px-4 py-6 border border-gray-300 rounded-4xl focus:outline-none focus:ring-1 focus:ring-emerald-200  focus:ring-opacity-50  placeholder:text-gray-300 placeholder:font-semibold"
          />
          <input
            type="password"
            required
            minLength="6"
            maxLength="20"
            placeholder="Enter your password"
            style={{padding:'2rem'}}
            className="w-128 h-12 px-96 py-6 border border-gray-300 rounded-4xl focus:outline-none focus:ring-1 focus:ring-emerald-200 focus:ring-opacity-50 placeholder:text-gray-300 placeholder:font-semibold"
          />
          <button onClick={handleSuccessEvent} style={{ marginTop:'3rem', padding:'2rem'}} className=" flex items-center justify-center gap-4 w-128 h-12 px-4 py-6 bg-[var(--primary)] text-white p-2 rounded-4xl hover:bg-white hover:py-12 hover:text-emerald-200 hover:border-2 hover:border-emerald-200 hover:text-xl hover:font-bold cursor-pointer transition duration-200">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
            </svg>
            Continue with email
          </button>
        </div>
        {/* Footer */}
        <div className='flex flex-col items-center justify-center gap-2 mt-6 mb-6'>
          <p className='flex items-center gap-2 text-sm text-gray-500 mb-4 text-center'>
            <span className="text-gray-500">Don&apos;t have an account?</span>
            <a href="/signUp-IN/signUp" className="mx-2 text-[var(--primary)] font-bold hover:underline">
              Sign Up
            </a>
          </p>
        </div>
      </div>
    <div className="p-6">

      <SuccessToast
        message="Successful!"
        show={showSuccess}
        onClose={() => setShowSuccess(false)}
      />
    </div>
    </div>
  ); 
   setShowSuccess(true)
};

export default loginApp;