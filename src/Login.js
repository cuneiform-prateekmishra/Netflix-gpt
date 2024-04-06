import React from 'react'
import Header from './Header'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div>
           <div className='absolute z-100'>
         <img className="w-44"  src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" /> 
        </div>
      <Header/>
      <form className='relative p-12 w-4/12 p-20 m-20 mx-auto r-0 l-0 bg-black bg-opacity-80'>
        
        <div className='flex items-center flex-col justify-center '>
        <h2 className='text-white'> Sign In</h2>
        <input type='text' placeholder='email' className='p-2 m-2 bg-gray-700' />
        <input type='text' placeholder='email' className='p-2 m-2 bg-gray-700' />

        </div>

<div className=' '>
<button type="button" className='p-4 m-4 bg-transparent border border-solid border-red-500 hover:bg-white hover:text-black active:bg-pink-600 font-bold uppercase text-xs px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 text-white rounded-lg'>Sign in</button>
<p className='text-white'>New to Netflix?   <br /><Link>sign up</Link>  now</p>
</div>
      </form>
    </div>
  )
}

export default Login
