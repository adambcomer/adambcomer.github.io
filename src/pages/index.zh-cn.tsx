import React from 'react'
import Navbar from '../components/Navbar'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import Footer from '../components/Footer/index'
import { OutboundLink } from 'gatsby-plugin-google-gtag'
import { Helmet } from 'react-helmet'

import '../styles/index.css'

const IndexPage = () => {
  return (
    <>
      <Helmet htmlAttributes={{ lang: 'zh-cn' }}>
        <link rel="canonical" href="https://adambcomer.com/zh-cn/" />

        <title>Adam Comer | 软件开发师</title>
        <meta name="description" content="Adam Comer is a Software Developer, Co-Founder Knowtworthy, and Student at the University of Toronto. He is proficient with Node.js, Kubernetes, Python, and AWS." />

        <meta property="og:title" content="Adam Comer | Software Developer" />
        <meta property="og:description" content="Adam Comer is a Software Developer, Co-Founder Knowtworthy, and Student at the University of Toronto. He is proficient with Node.js, Kubernetes, Python, and AWS." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://adambcomer.com/" />
        <meta property="og:image" content="https://adambcomer.com/portrait.png" />
        <meta property="og:image:width" content="720" />
        <meta property="og:image:height" content="720" />

        <script type="application/ld+json">{`
          {
            "@context": "http://schema.org",
            "@type": "Person",
            "name": "Adam Comer",
            "url": "https://adambcomer.com/",
            "email": "adambcomer@gmail.com",
            "sameAs": [
                "https://www.facebook.com/adam.comer.779",
                "https://www.linkedin.com/in/adambcomer",
                "https://www.instagram.com/adamcomer/",
                "https://twitter.com/adambcomer",
                "https://github.com/adambcomer",
                "https://gitlab.com/adambcomer",
                "https://knowtworthy.com/blog/author/adambcomer/"
            ]
          }
        `}
        </script>
      </Helmet>
      <Navbar />
      <main className='w-100 font-sc'>
        <div className='mx-6 my-64'>
          <h1 className='text-4xl font-sc'>
            你好！我叫 Adam。<br />
            我是在多伦多的<span className='color-1'>软件开发师</span>。
          </h1>
        </div>

        <hr />

        <div className='grid grid-cols-1 lg:grid-cols-2 block'>
          <StaticImage className='hidden lg:block' src='../images/bmo.jpg' alt='Toronto Skyline with the Bank of Montreal HQ in the center.' />
          <div className='w-100 px-6 py-24'>
            <h2 className='text-3xl'>我是<span className='color-1'>软件开发师</span>。</h2>
            <p className='mt-8'>
              I started writing code in early high school and haven’t stopped since.
              I used to be a freelance developer for small businesses and universities in the Northern Virginia area.
              Since starting University, I’ve had the opportunity to work for the Bank of Montreal(BMO) and eventually start my own company.
              </p>

            <div className='mt-16'>
              <Link className='text-xl hover:underline arrow-link ml-6' to='/experience/'>Experience</Link>
            </div>
            <div className='mt-4'>
              <Link className='text-xl hover:underline arrow-link ml-6' to='/projects/'>Projects</Link>
            </div>
          </div>
        </div>

        <hr />

        <div className='block flex items-center'>
          <div className='px-6'>
            <h3 className='text-3xl'>你想看我的简历吗？</h3>
            <p className='mt-2 text-1-color'>看这里</p>
            <div className='mt-8'>
              <a className='' href='/resume.pdf'>
                <div className='px-6 py-4 button-color inline-flex flex-row items-center'>
                  <div className='mr-6'>简历</div>
                  <div className='svg-fill'>
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="14px" height="16px" viewBox="0 0 14 16">
                      <g>
                        <path id="arrow" d="M7.5,11l4.1-4.4l0.7,0.7L7,13L1.6,7.3l0.7-0.7L6.5,11V0h1V11z" />
                        <path id="bottom" d="M13,15v-2h1v2c0,0.6-0.4,1-1,1H1c-0.6,0-1-0.4-1-1v-2h1v2H13z" />
                      </g>
                    </svg>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>

        <hr />


        <div className='grid grid-cols-1 lg:grid-cols-2 block'>
          <StaticImage className='hidden lg:block' src='../images/con-hall.jpg' alt='Convocation Hall at the University of Toronto.' />
          <div className='px-6 py-24'>
            <h2 className='text-3xl'>我是<span className='color-2'>学生</span>。</h2>
            <p className='mt-8'>
              我学习 Statistics 和 Cognitive Science at the University of Toronto. In other words, I study data and the mind.
              These disciplines have allowed me to explore other departments such as Computer Science, Linguistics, and Psychology.
              With broad exposure to many domains, I’ve been able to integrate many outside ideas into my projects and work.
              </p>

            <div className='mt-16'>
              <Link className='text-xl hover:underline arrow-link ml-6' to='/experience/'>Experience</Link>
            </div>
            <div className='mt-4'>
              <Link className='text-xl hover:underline arrow-link ml-6' to='/projects/'>Projects</Link>
            </div>
          </div>
        </div>

        <hr />

        <div className='grid grid-cols-1 lg:grid-cols-5 block px-6 py-16 gap-x-12'>
          <div>
            <h3 className='text-xl font-semibold'>Blog</h3>
            <p className='mt-2 lg:mt-4 text-sm text-1-color'>Read about some stuff I’m working on</p>
          </div>

          <div className='mt-8 lg:mt-0 lg:col-span-2 relative h-64 lg:h-full'>
            <Link to='/blog/simple-database'>
              <div className='p-8 h-full hover:underline ui-1-color'>
                <h4 className='text-4xl font-thin'>Build a Simple Database</h4>
                <svg className='absolute bottom-8 right-8 svg-fill' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                  <polygon points="18 6 16.57 7.393 24.15 15 4 15 4 17 24.15 17 16.57 24.573 18 26 28 16 18 6" />
                </svg>
              </div>
            </Link>
          </div>
          <div className='mt-8 lg:mt-0 lg:col-span-2 relative h-64 lg:h-full'>
            <Link to='/blog/install-gitlab-runner-kubernetes'>
              <div className='p-8 h-full hover:underline ui-1-color'>
                <h4 className='text-4xl font-thin'>How to Install a GitLab Runner on Kubernetes</h4>
                <svg className='absolute bottom-8 right-8 svg-fill' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                  <polygon points="18 6 16.57 7.393 24.15 15 4 15 4 17 24.15 17 16.57 24.573 18 26 28 16 18 6" />
                </svg>
              </div>
            </Link>
          </div>
        </div>

        <hr />

        <div className='grid grid-cols-1 lg:grid-cols-2 block'>
          <StaticImage className='hidden lg:block' src='../images/knowtworthy.jpg' alt='Knowtworthy meeting minutes editor and transcription.' />
          <div className='px-6 py-24'>
            <h2 className='text-3xl'>我是<span className='color-3'>Co-Founder</span>。</h2>
            <p className='mt-8'>
              After my first year in university, my co-founders and I were given the opportunity to join the UofT’s Hatchery's NEST Program to build out our company: Knowtworthy.
              Our vision is to increase the efficiency of office meetings with software that implements meeting best practices in conjunction with automatic speech transcription.
              So far, Knowtworthy has successfully launched an Alpha and Beta and is now available to individuals and businesses.
            </p>

            <div className='mt-16'>
              <OutboundLink className='text-xl hover:underline arrow-link ml-6' href='https://knowtworthy.com/'>Knowtworthy</OutboundLink>
            </div>
          </div>
        </div>

        <hr />

        <div className='grid grid-cols-1 lg:grid-cols-5 block px-6 py-16 gap-x-12'>
          <div>
            <h3 className='text-xl font-semibold'>Contact</h3>
            <p className='mt-2 lg:mt-4 text-sm text-1-color'>Reach out to start a conversation with me</p>
          </div>

          <div className='grid grid-cols-1 lg:grid-cols-2 col-span-4 mt-8 lg:mt-0'>
            <div>
              <OutboundLink href='mailto:adambcomer@gmail.com'>
                <div className='flex flex-row p-8 items-center contact-container'>
                  <svg className='w-8 svg-fill' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                    <path d="M28,6H4A2,2,0,0,0,2,8V24a2,2,0,0,0,2,2H28a2,2,0,0,0,2-2V8A2,2,0,0,0,28,6ZM25.8,8,16,14.78,6.2,8ZM4,24V8.91l11.43,7.91a1,1,0,0,0,1.14,0L28,8.91V24Z" transform="translate(0)" />
                  </svg>
                  <h4 className='text-lg lg:text-xl font-thin ml-8'>adambcomer@gmail.com</h4>
                </div>
              </OutboundLink>
              <OutboundLink href='https://github.com/adambcomer'>
                <div className='flex flex-row p-8 items-center -mt-px contact-container'>
                  <svg className='w-8 svg-fill' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                    <path d="M16,2a14,14,0,0,0-4.43,27.28c.7.13,1-.3,1-.67s0-1.21,0-2.38c-3.89.84-4.71-1.88-4.71-1.88A3.71,3.71,0,0,0,6.24,22.3c-1.27-.86.1-.85.1-.85A2.94,2.94,0,0,1,8.48,22.9a3,3,0,0,0,4.08,1.16,2.93,2.93,0,0,1,.88-1.87c-3.1-.36-6.37-1.56-6.37-6.92a5.4,5.4,0,0,1,1.44-3.76,5,5,0,0,1,.14-3.7s1.17-.38,3.85,1.43a13.3,13.3,0,0,1,7,0c2.67-1.81,3.84-1.43,3.84-1.43a5,5,0,0,1,.14,3.7,5.4,5.4,0,0,1,1.44,3.76c0,5.38-3.27,6.56-6.39,6.91a3.33,3.33,0,0,1,.95,2.59c0,1.87,0,3.38,0,3.84s.25.81,1,.67A14,14,0,0,0,16,2Z" />
                  </svg>
                  <h4 className='text-lg lg:text-xl font-thin ml-8'>@adambcomer</h4>
                </div>
              </OutboundLink>
            </div>
            <div>
              <OutboundLink href='https://www.linkedin.com/in/adambcomer'>
                <div className='flex flex-row p-8 items-center -ml-px contact-container'>
                  <svg className='w-8 svg-fill' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                    <path d="M26.21,4H5.79A1.78,1.78,0,0,0,4,5.73V26.2a1.77,1.77,0,0,0,1.79,1.73H26.21A1.77,1.77,0,0,0,28,26.2V5.73A1.78,1.78,0,0,0,26.21,4ZM11.11,24.41H7.59V13h3.52Zm-1.72-13A2.07,2.07,0,0,1,7.32,9.39,2,2,0,0,1,9.39,7.32a2.07,2.07,0,0,1,0,4.13ZM24.48,24.34H21V18.76c0-1.33,0-3.06-1.86-3.06S17,17.16,17,18.63v5.65H13.44V13h3.32V14.5h.07a3.72,3.72,0,0,1,3.39-1.86c3.59,0,4.26,2.4,4.26,5.45Z" transform="translate(0 0)" />
                  </svg>
                  <h4 className='text-lg lg:text-xl font-thin ml-8'>@adambcomer</h4>
                </div>
              </OutboundLink>
              <OutboundLink href='https://twitter.com/adambcomer'>
                <div className='flex flex-row p-8 items-center -mt-px -ml-px contact-container'>
                  <svg className='w-8 svg-fill' xmlns="http://www.w3.org/2000/svg" viewBox="2 2 27 27">
                    <path d="M11.92,24.94A12.76,12.76,0,0,0,24.76,12.1c0-.2,0-.39,0-.59A9.4,9.4,0,0,0,27,9.18a9.31,9.31,0,0,1-2.59.71,4.56,4.56,0,0,0,2-2.5,8.89,8.89,0,0,1-2.86,1.1,4.52,4.52,0,0,0-7.7,4.11,12.79,12.79,0,0,1-9.3-4.71,4.51,4.51,0,0,0,1.4,6,4.47,4.47,0,0,1-2-.56v.05A4.53,4.53,0,0,0,9.5,17.83a4.53,4.53,0,0,1-2,.08A4.51,4.51,0,0,0,11.68,21,9.05,9.05,0,0,1,6.07,23,9.77,9.77,0,0,1,5,22.91a12.77,12.77,0,0,0,6.92,2" transform="translate(0)" />
                  </svg>
                  <h4 className='text-lg lg:text-xl font-thin ml-8'>@adambcomer</h4>
                </div>
              </OutboundLink>
            </div>
          </div>
        </div>
      </main >

      <Footer lang='zh-cn' />
    </>
  )
}

export default IndexPage
