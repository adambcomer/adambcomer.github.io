import React from 'react'
import { Link } from 'gatsby'
import { OutboundLink } from 'gatsby-plugin-google-gtag'

const Footer = (): JSX.Element => {
  return (
    <>
      <hr className='border-[#8F909A]' />
      <footer className='grid lg:grid-cols-12 m-6'>
        <div className='lg:col-span-8'>
          <span className='text-2xl'>ADAM COMER</span>
          <div className='flex flex-row mt-6'>
            <div className='mr-4'>
              <OutboundLink href='mailto:adambcomer@gmail.com'>
                <svg
                  className='w-8'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 32 32'
                >
                  <path
                    d='M28,6H4A2,2,0,0,0,2,8V24a2,2,0,0,0,2,2H28a2,2,0,0,0,2-2V8A2,2,0,0,0,28,6ZM25.8,8,16,14.78,6.2,8ZM4,24V8.91l11.43,7.91a1,1,0,0,0,1.14,0L28,8.91V24Z'
                    transform='translate(0)'
                  />
                </svg>
              </OutboundLink>
            </div>
            <div className='mx-4'>
              <OutboundLink href='https://www.linkedin.com/in/adambcomer'>
                <svg
                  className='w-8'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 32 32'
                >
                  <path
                    d='M26.21,4H5.79A1.78,1.78,0,0,0,4,5.73V26.2a1.77,1.77,0,0,0,1.79,1.73H26.21A1.77,1.77,0,0,0,28,26.2V5.73A1.78,1.78,0,0,0,26.21,4ZM11.11,24.41H7.59V13h3.52Zm-1.72-13A2.07,2.07,0,0,1,7.32,9.39,2,2,0,0,1,9.39,7.32a2.07,2.07,0,0,1,0,4.13ZM24.48,24.34H21V18.76c0-1.33,0-3.06-1.86-3.06S17,17.16,17,18.63v5.65H13.44V13h3.32V14.5h.07a3.72,3.72,0,0,1,3.39-1.86c3.59,0,4.26,2.4,4.26,5.45Z'
                    transform='translate(0 0)'
                  />
                </svg>
              </OutboundLink>
            </div>
            <div className='mx-4'>
              <OutboundLink href='https://github.com/adambcomer'>
                <svg
                  className='w-8'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 32 32'
                >
                  <path d='M16,2a14,14,0,0,0-4.43,27.28c.7.13,1-.3,1-.67s0-1.21,0-2.38c-3.89.84-4.71-1.88-4.71-1.88A3.71,3.71,0,0,0,6.24,22.3c-1.27-.86.1-.85.1-.85A2.94,2.94,0,0,1,8.48,22.9a3,3,0,0,0,4.08,1.16,2.93,2.93,0,0,1,.88-1.87c-3.1-.36-6.37-1.56-6.37-6.92a5.4,5.4,0,0,1,1.44-3.76,5,5,0,0,1,.14-3.7s1.17-.38,3.85,1.43a13.3,13.3,0,0,1,7,0c2.67-1.81,3.84-1.43,3.84-1.43a5,5,0,0,1,.14,3.7,5.4,5.4,0,0,1,1.44,3.76c0,5.38-3.27,6.56-6.39,6.91a3.33,3.33,0,0,1,.95,2.59c0,1.87,0,3.38,0,3.84s.25.81,1,.67A14,14,0,0,0,16,2Z' />
                </svg>
              </OutboundLink>
            </div>
            <div className='mx-4'>
              <OutboundLink href='https://twitter.com/adambcomer'>
                <svg
                  className='w-8'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='2 2 27 27'
                >
                  <path
                    d='M11.92,24.94A12.76,12.76,0,0,0,24.76,12.1c0-.2,0-.39,0-.59A9.4,9.4,0,0,0,27,9.18a9.31,9.31,0,0,1-2.59.71,4.56,4.56,0,0,0,2-2.5,8.89,8.89,0,0,1-2.86,1.1,4.52,4.52,0,0,0-7.7,4.11,12.79,12.79,0,0,1-9.3-4.71,4.51,4.51,0,0,0,1.4,6,4.47,4.47,0,0,1-2-.56v.05A4.53,4.53,0,0,0,9.5,17.83a4.53,4.53,0,0,1-2,.08A4.51,4.51,0,0,0,11.68,21,9.05,9.05,0,0,1,6.07,23,9.77,9.77,0,0,1,5,22.91a12.77,12.77,0,0,0,6.92,2'
                    transform='translate(0)'
                  />
                </svg>
              </OutboundLink>
            </div>
            <div className='mx-4'>
              <OutboundLink href='https://www.instagram.com/adamcomer/'>
                <svg
                  className='w-8'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 32 32'
                >
                  <circle cx='22.4056' cy='9.5944' r='1.44' />
                  <path d='M16,9.8378A6.1622,6.1622,0,1,0,22.1622,16,6.1622,6.1622,0,0,0,16,9.8378ZM16,20a4,4,0,1,1,4-4A4,4,0,0,1,16,20Z' />
                  <path d='M16,6.1622c3.2041,0,3.5837.0122,4.849.07a6.6418,6.6418,0,0,1,2.2283.4132,3.9748,3.9748,0,0,1,2.2774,2.2774,6.6418,6.6418,0,0,1,.4132,2.2283c.0577,1.2653.07,1.6449.07,4.849s-.0122,3.5837-.07,4.849a6.6418,6.6418,0,0,1-.4132,2.2283,3.9748,3.9748,0,0,1-2.2774,2.2774,6.6418,6.6418,0,0,1-2.2283.4132c-1.2652.0577-1.6446.07-4.849.07s-3.5838-.0122-4.849-.07a6.6418,6.6418,0,0,1-2.2283-.4132,3.9748,3.9748,0,0,1-2.2774-2.2774,6.6418,6.6418,0,0,1-.4132-2.2283c-.0577-1.2653-.07-1.6449-.07-4.849s.0122-3.5837.07-4.849a6.6418,6.6418,0,0,1,.4132-2.2283A3.9748,3.9748,0,0,1,8.9227,6.6453a6.6418,6.6418,0,0,1,2.2283-.4132c1.2653-.0577,1.6449-.07,4.849-.07M16,4c-3.259,0-3.6677.0138-4.9476.0722A8.8068,8.8068,0,0,0,8.14,4.63,6.1363,6.1363,0,0,0,4.63,8.14a8.8068,8.8068,0,0,0-.5578,2.9129C4.0138,12.3323,4,12.741,4,16s.0138,3.6677.0722,4.9476A8.8074,8.8074,0,0,0,4.63,23.8605a6.1363,6.1363,0,0,0,3.51,3.51,8.8068,8.8068,0,0,0,2.9129.5578C12.3323,27.9862,12.741,28,16,28s3.6677-.0138,4.9476-.0722a8.8074,8.8074,0,0,0,2.9129-.5578,6.1363,6.1363,0,0,0,3.51-3.51,8.8074,8.8074,0,0,0,.5578-2.9129C27.9862,19.6677,28,19.259,28,16s-.0138-3.6677-.0722-4.9476A8.8068,8.8068,0,0,0,27.37,8.14a6.1363,6.1363,0,0,0-3.51-3.5095,8.8074,8.8074,0,0,0-2.9129-.5578C19.6677,4.0138,19.259,4,16,4Z' />
                </svg>
              </OutboundLink>
            </div>
          </div>
        </div>

        <div className='lg:col-span-2 mt-12 lg:mt-0'>
          <div className='text-lg font-semibold'>Directory</div>
          <div className='mt-2 text-lg hover:underline'>
            <Link to='/'>Home</Link>
          </div>
          <div className='mt-2 text-lg hover:underline'>
            <Link to='/blog/'>Blog</Link>
          </div>
          <div className='mt-2 text-lg hover:underline'>
            <Link to='/projects/'>Projects</Link>
          </div>
          <div className='mt-2 text-lg hover:underline'>
            <Link to='/experience/'>Experience</Link>
          </div>
        </div>

        <div className='lg:col-span-2 mt-12 lg:mt-0'>
          <div className='text-lg font-semibold'>Languages</div>
          <div className='mt-2 text-lg hover:underline'>
            <Link to='/'>English</Link>
          </div>
        </div>

        <div className='lg:col-span-12 mt-12 lg:mt-0'>
          © 2023 Adam Comer — All rights reserved
        </div>
      </footer>
    </>
  )
}

export default Footer
