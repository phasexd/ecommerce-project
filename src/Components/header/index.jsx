import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../authContext'
import { doSignOut } from '../auth'

const Header = () => {
    const navigate = useNavigate()
    const { userLoggedIn } = useAuth()
    return (
        <nav className='flex flex-row gap-x-2 w-full z-20 fixed top-0 left-0 h-12 border-b place-content-end items-center bg-gray-200 pr-4 font-bold'>
            {
                userLoggedIn
                    ?
                    <>
                    <Link className='text-ls text-black-300 pr-4' to={'/products'}>Products</Link>
                    <Link className='text-ls text-black-300 pr-4' to={'/about'}>About</Link>
                        <button onClick={() => { doSignOut().then(() => { navigate('/login') }) }} className='text-ls text-black-300 right-0 bg-slate-50 border-black border-2 rounded-3xl p-1 w-20'>Logout</button>
                        
                    </>
                    :
                    <>
                        <Link className='text-sm text-blue-600 underline' to={'/login'}>Login</Link>
                        <Link className='text-sm text-blue-600 underline' to={'/register'}>Register New Account</Link>
                    </>
            }

        </nav>
    )
}

export default Header