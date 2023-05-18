import React from 'react'
import Navbar from '../../components/Navbar'
import { Link } from 'gatsby'
import Footer from '../../components/Footer'

const IndexPage = (): JSX.Element => {
  return (
    <>
      <Navbar />
      <main className='px-6 md:px-12 mb-32 max-w-screen-2xl mx-auto'>
        <div className='mx-6 my-64 text-center'>
          <h1 className='md-display-large'>Healthcare Data</h1>
          <p className='md-headline-medium md-color-secondary mt-6'>
            APIs and Archives of public Healthcare Data
          </p>
        </div>

        <div className='md-surface-2 rounded-[32px] p-6 md:p-12 max-w-screen-lg mx-auto'>
          <h2 className='md-display-small'>
            National Provider Identifier Standard (NPI)
          </h2>

          <h3 className='md-title-small md-on-surface-variant mt-6'>About</h3>
          <p className='md-body-large mt-2'>
            Monthly Archives of Healthcare Providers and NPI numbers.
          </p>

          <div className='flex flex-row mt-8'>
            <Link
              to='/healthcare-data/npi'
              className='md-link hover:md-on-primary-container'
            >
              Learn More
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}

export default IndexPage

export const Head = () => {
  return (
    <>
      <link rel='canonical' href='https://adambcomer.com/healthcare-data/' />

      <title>Healthcare Data</title>
      <meta name='description' content='Catalog of Healthcare Data.' />

      <meta property='og:title' content='Healthcare Data' />
      <meta property='og:description' content='Catalog of Healthcare Data.' />
      <meta property='og:type' content='website' />
      <meta
        property='og:url'
        content='https://adambcomer.com/healthcare-data/'
      />
    </>
  )
}
