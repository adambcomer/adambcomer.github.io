import React, { useState, FC } from 'react'
import { Link } from 'gatsby'
import './navbar.css'

const Navbar: FC = () => {
  const [open, setOpen] = useState(false)

  function navClicked (): void {
    setOpen(!open)

    if (!open) {
      document.body.classList.add('overflow-hidden')
    } else {
      document.body.classList.remove('overflow-hidden')
    }
  }

  function navItemClicked (): void {
    document.body.classList.remove('overflow-hidden')
  }

  return (
    <nav className='flex flex-row m-6'>
      <div className='flex-1'>
        <span className='flex-1 text-2xl'><Link to='/' onClick={navItemClicked}>ADAM COMER</Link></span>
      </div>

      <div className='flex flex-row hidden lg:block'>
        <span className='mx-4 text-lg hover:underline'><Link to='/' onClick={navItemClicked}>Home</Link></span>
        <span className='mx-4 text-lg hover:underline'><Link to='/blog/' onClick={navItemClicked}>Blog</Link></span>
        <span className='mx-4 text-lg hover:underline'><Link to='/projects/' onClick={navItemClicked}>Projects</Link></span>
        <span className='mx-4 text-lg hover:underline'><Link to='/experience/' onClick={navItemClicked}>Experience</Link></span>
      </div>

      <svg className='icon lg:hidden' version='1.1' id='icon' xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' width='32px' height='32px' viewBox='0 0 32 32' onClick={navClicked}>
        <rect x='14' y='4' width='4' height='4' />
        <rect x='4' y='4' width='4' height='4' />
        <rect x='24' y='4' width='4' height='4' />
        <rect x='14' y='14' width='4' height='4' />
        <rect x='4' y='14' width='4' height='4' />
        <rect x='24' y='14' width='4' height='4' />
        <rect x='14' y='24' width='4' height='4' />
        <rect x='4' y='24' width='4' height='4' />
        <rect x='24' y='24' width='4' height='4' />
      </svg>

      {open &&
        <div className='fixed lg:hidden bottom-0 left-0 right-0 z-50 mobile-nav'>
          <hr />
          <div className='ml-8 mt-8 text-xl hover:underline'><Link to='/' onClick={navItemClicked}>Home</Link></div>
          <div className='ml-8 mt-8 text-xl hover:underline'><Link to='/blog/' onClick={navItemClicked}>Blog</Link></div>
          <div className='ml-8 mt-8 text-xl hover:underline'><Link to='/projects/' onClick={navItemClicked}>Projects</Link></div>
          <div className='ml-8 mt-8 text-xl hover:underline'><Link to='/experience/' onClick={navItemClicked}>Experience</Link></div>
        </div>}
    </nav>
  )
}

export default Navbar
