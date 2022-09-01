import React, { useState } from 'react'
import { Link } from 'gatsby'
import './navbar.css'

const Navbar = (): JSX.Element => {
  const [open, setOpen] = useState(false)

  function navClicked(): void {
    setOpen(!open)

    if (!open) {
      document.body.classList.add('overflow-hidden')
    } else {
      document.body.classList.remove('overflow-hidden')
    }
  }

  function navItemClicked(): void {
    document.body.classList.remove('overflow-hidden')
  }

  return (
    <nav className='flex flex-row m-6'>
      <div className='flex-1'>
        <span className='flex-1 text-2xl'>
          <Link to='/' onClick={navItemClicked}>
            ADAM COMER
          </Link>
        </span>
      </div>

      <div className='flex flex-row hidden lg:block'>
        <Link to='/' onClick={navItemClicked}>
          <button className='inline-flex items-center py-3 px-3 md-title-medium md-button rounded-full mx-2 hover:md-surface-3'>
            <i className='material-icons mr-2'>home</i>Home
          </button>
        </Link>
        <Link to='/blog/' onClick={navItemClicked}>
          <button className='inline-flex items-center py-3 px-3 md-title-medium md-button rounded-full mx-2 hover:md-surface-3'>
            <i className='material-icons mr-2'>article</i>Blog
          </button>
        </Link>
        <Link to='/projects/' onClick={navItemClicked}>
          <button className='inline-flex items-center py-3 px-3 md-title-medium md-button rounded-full mx-2 hover:md-surface-3'>
            <i className='material-icons mr-2'>build</i>Projects
          </button>
        </Link>
        <Link to='/experience/' onClick={navItemClicked}>
          <button className='inline-flex items-center py-3 px-3 md-title-medium md-button rounded-full mx-2 hover:md-surface-3'>
            <i className='material-icons mr-2'>work</i>Experience
          </button>
        </Link>
      </div>

      <svg
        className='lg:hidden'
        version='1.1'
        id='icon'
        xmlns='http://www.w3.org/2000/svg'
        x='0px'
        y='0px'
        width='32px'
        height='32px'
        viewBox='0 0 32 32'
        onClick={navClicked}
      >
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

      {open && (
        <div className='fixed lg:hidden bottom-0 left-0 right-0 z-50 mobile-nav'>
          <hr />
          <div>
            <Link to='/' onClick={navItemClicked}>
              <button className='inline-flex items-center py-3 px-3 md-title-medium md-button rounded-full mx-2 mt-4'>
                <i className='material-icons mr-2'>home</i>Home
              </button>
            </Link>
          </div>
          <div>
            <Link to='/blog/' onClick={navItemClicked}>
              <button className='inline-flex items-center py-3 px-3 md-title-medium md-button rounded-full mx-2 mt-4'>
                <i className='material-icons mr-2'>article</i>Blog
              </button>
            </Link>
          </div>
          <div>
            <Link to='/projects/' onClick={navItemClicked}>
              <button className='inline-flex items-center py-3 px-3 md-title-medium md-button rounded-full mx-2 mt-4'>
                <i className='material-icons mr-2'>build</i>Projects
              </button>
            </Link>
          </div>
          <div>
            <Link to='/experience/' onClick={navItemClicked}>
              <button className='inline-flex items-center py-3 px-3 md-title-medium md-button rounded-full mx-2 mt-4'>
                <i className='material-icons mr-2'>work</i>Experience
              </button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
