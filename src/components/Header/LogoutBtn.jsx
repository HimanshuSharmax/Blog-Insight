import React from 'react'
import {useDispatch} from 'react-redux'
import authService from '../../appwrite/auth'
import {logout} from '../../store/authSlice'

function LogoutBtn() {
    const dispatch = useDispatch()

    const logoutHandler = () => {
        authService.logout().then(() => {
            dispatch(logout())
        })
    }
    
  return (
    <button
    className='inline-bock px-5 py-2 duration-200 hover:scale-105 hover:text-gray-200'
    onClick={logoutHandler}
    >Logout</button>
  )
}

export default LogoutBtn