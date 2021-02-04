import * as React from 'react'
import { Link } from 'gatsby'

const NotFoundPage = () => {
  return (
    <main>
      <title>404 Not found</title>
      <h1>Page not found</h1>
      <Link to='/'className='hover:underline'>Go home</Link>.
    </main >
  )
}

export default NotFoundPage
