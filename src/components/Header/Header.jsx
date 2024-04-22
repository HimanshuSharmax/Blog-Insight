import React from 'react'
import {Container, Logo, LogoutBtn} from '../index'
import { Link } from 'react-router-dom'
import {useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Header() {

  const authStatus = useSelector((state) => state.auth.status)
  const navigate = useNavigate()

  const navItems = [
    {
      name: 'Home',
      slug: "/",
      active: true
    }, 
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
  },
  {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
  },
  {
      name: "All Blogs",
      slug: "/all-blogs",
      active: authStatus,
  },
  {
      name: "Add Blog",
      slug: "/add-blog",
      active: authStatus,
  },
  ]


  return (
    <header className='py-1 shadow bg-blue-900 mb-2 bg-gradient-to-r from-stone-800 to-blue-700'>
      <Container>
        <nav className='flex'>
          <div className='mr-4'>
            <Link to='/'>
              <Logo width='60px'/>

              </Link>
          </div>
          <ul className='flex ml-auto pt-2 text-lg font-medium text-blue-200'>
            {navItems.map((item) => 
            item.active ? (
              <li key={item.name}>
                <button
                onClick={() => navigate(item.slug)}
                className='inline-bock px-5 py-2 duration-300 hover:text-yellow-200 hover:duration-300'
                >{item.name}</button>
              </li>
            ) : null
            )}
 {/* if authStatus is true then after && difine <li> task is executed */}
            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul>
        </nav>
        </Container>
    </header>

  )
}

export default Header