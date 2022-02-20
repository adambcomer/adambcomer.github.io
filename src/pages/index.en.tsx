import React, { FC } from 'react'
import Navbar from '../components/Navbar'
import { graphql, Link, useStaticQuery } from 'gatsby'
import { getSrc, StaticImage } from 'gatsby-plugin-image'
import Footer from '../components/Footer'
import { OutboundLink } from 'gatsby-plugin-google-gtag'
import { Helmet } from 'react-helmet'
import { PageQuery } from '../types/page'

const IndexPage: FC = () => {
  const result: PageQuery = useStaticQuery(graphql`
    {
      image: file(relativePath: { eq: "portrait.png" }) {
        childImageSharp {
          gatsbyImageData(width: 720)
        }
      }
    }
  `)

  return (
    <>
      <Helmet htmlAttributes={{ lang: 'en' }}>
        <link rel='canonical' href='https://adambcomer.com/' />

        <title>Adam Comer | Software Developer</title>
        <meta name='description' content='Adam Comer is a Software Developer and Co-Founder Knowtworthy. He is a Frontend, Backend, and Fullstack Developer that specializes in Javascript, Node.js, Python, Docker, Kubernetes, MongoDB, and AWS.' />

        <meta property='og:title' content='Adam Comer | Software Developer' />
        <meta property='og:description' content='Adam Comer is a Software Developer and Co-Founder Knowtworthy. He is a Frontend, Backend, and Fullstack Developer that specializes in Javascript, Node.js, Python, Docker, Kubernetes, MongoDB, and AWS.' />
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://adambcomer.com/' />
        <meta property='og:image' content={`https://adambcomer.com${getSrc(result.image) ?? ''}`} />
        <meta property='og:image:width' content='720' />
        <meta property='og:image:height' content='720' />

        <script type='application/ld+json'>{`
          {
            "@context": "http://schema.org",
            "@type": "Person",
            "name": "Adam Comer",
            "url": "https://adambcomer.com/",
            "email": "adambcomer@gmail.com",
            "image": "https://adambcomer.com${getSrc(result.image) ?? ''}",
            "sameAs": [
                "https://www.facebook.com/adam.comer.779",
                "https://www.linkedin.com/in/adambcomer",
                "https://www.instagram.com/adamcomer/",
                "https://twitter.com/adambcomer",
                "https://github.com/adambcomer",
                "https://gitlab.com/adambcomer",
                "https://stackoverflow.com/users/17834001/adambcomer",
                "https://knowtworthy.com/blog/author/adambcomer/"
            ]
          }
        `}
        </script>
      </Helmet>
      <Navbar />
      <main className='px-6 md:px-12 mb-32 max-w-screen-2xl mx-auto'>
        <div className='my-24 grid grid-cols-1 md:grid-cols-12 items-center'>

          <div className='col-span-8'>
            <h1 className='md-display-large text-center md:text-left'>Adam Comer</h1>
            <p className='md-headline-medium mt-6 md:mt-2 text-center md:text-left'>Software Developer and Co-founder of Knowtworthy</p>
            <div className='flex flex-row gap-12 mt-12 w-full place-content-evenly md:place-content-start'>
              <OutboundLink href='https://www.linkedin.com/in/adambcomer' className='cursor-pointer md-title-large md-color-primary hover:md-color-secondary'>LinkedIn</OutboundLink>
              <OutboundLink href='https://twitter.com/adambcomer' className='cursor-pointer md-title-large md-color-primary hover:md-color-secondary'>Twitter</OutboundLink>
              <OutboundLink href='https://github.com/adambcomer' className='cursor-pointer md-title-large md-color-primary hover:md-color-secondary'>Github</OutboundLink>
            </div>
          </div>

          <StaticImage className='col-span-4 h-fit rounded-[48px] mt-16 md:mt-0' src='../images/portrait.png' alt='Adam Comer' quality={90} />
        </div>

        <div className='mt-48'>
          <h2 className='text-center md-display-large'>About Me</h2>
          <p className='m-2 text-center md-headline-small md-color-secondary'>Experience, skills, and expertise</p>

          <div className='relative md-surface-3 mt-8 px-6 pt-6 pb-16 md:p-12 rounded-[32px] md:rounded-[64px]'>
            <h3 className='md-display-medium'>Fullstack Developer</h3>
            <div className='grid gap-8 grid-cols-1 lg:grid-cols-2 my-4'>
              <p className='md-body-large'>I’m a full-stack developer with Frontend, Backend, and DevOps experience. As a Software Developer at Knowtworthy, I work on the Frontend, Backend, and AWS infrastructure. Most of my efforts are focused on building out our Web App and Backend on the MERN stack. Additionally, I manage and maintain our CI/CD system and our Kubernetes cluster on AWS, ensuring that our work is tested and deployed to customers with confidence. Outside of work, I enjoy working with Python and Rust as the basis for my personal projects.</p>
              <div>
                <p className='md-title-small md-on-surface-variant'>Languages</p>
                <div className='flex flex-wrap'>
                  <span className='md-label-large !text-white md-bg-primary px-3 py-1.5 rounded-lg mr-4 mt-2'>Javascript</span>
                  <span className='md-label-large !text-white md-bg-primary px-3 py-1.5 rounded-lg mr-4 mt-2'>Python</span>
                  <span className='md-label-large !text-white md-bg-primary px-3 py-1.5 rounded-lg mr-4 mt-2'>HTML</span>
                  <span className='md-label-large !text-white md-bg-primary px-3 py-1.5 rounded-lg mr-4 mt-2'>CSS</span>
                  <span className='md-label-large !text-white md-bg-primary px-3 py-1.5 rounded-lg mr-4 mt-2'>Rust</span>
                  <span className='md-label-large !text-white md-bg-primary px-3 py-1.5 rounded-lg mr-4 mt-2'>Golang</span>
                  <span className='md-label-large !text-white md-bg-primary px-3 py-1.5 rounded-lg mr-4 mt-2'>Java</span>
                </div>

                <p className='md-title-small md-on-surface-variant mt-4'>Tools</p>
                <div className='flex flex-wrap'>
                  <span className='md-label-large !text-white md-bg-primary px-3 py-1.5 rounded-lg mr-4 mt-2'>Docker</span>
                  <span className='md-label-large !text-white md-bg-primary px-3 py-1.5 rounded-lg mr-4 mt-2'>MongoDB</span>
                  <span className='md-label-large !text-white md-bg-primary px-3 py-1.5 rounded-lg mr-4 mt-2'>Git</span>
                  <span className='md-label-large !text-white md-bg-primary px-3 py-1.5 rounded-lg mr-4 mt-2'>Kubernetes</span>
                  <span className='md-label-large !text-white md-bg-primary px-3 py-1.5 rounded-lg mr-4 mt-2'>React</span>
                  <span className='md-label-large !text-white md-bg-primary px-3 py-1.5 rounded-lg mr-4 mt-2'>AWS</span>
                </div>
              </div>
            </div>

            <Link to='/experience/'><button className='absolute right-8 bottom-6 md:right-16 inline-flex items-center cursor-pointer md-title-large md-color-primary hover:md-color-secondary'>Experience <i className='material-icons ml-2'>arrow_forward</i></button></Link>
          </div>

          <div className='relative md-surface-3 mt-16 mt-8 px-6 pt-6 pb-16 md:p-12 rounded-[32px] md:rounded-[64px]'>
            <h3 className='md-display-medium'>Co-Founder of Knowtworthy</h3>
            <p className='md-body-large my-4 lg:w-1/2'>Knowtworthy is a Meetings Productivity tool for business professionals to aid in organizing, formatting, and sharing meeting minutes. My responsibilities at Knowtworthy extend to every layer of stack: Frontend, Backend, and Cloud Infrastructure. Additionally, I work closely with the business side of the company on customer acquisition. Everyday, I work closely with my Co-Founders to take our product ideas and make them into functioning systems.</p>

            <OutboundLink href='https://knowtworthy.com/'><button className='absolute right-8 bottom-6 md:right-16 inline-flex items-center cursor-pointer md-title-large md-color-primary hover:md-color-secondary'>Knowtworthy <i className='material-icons ml-2'>arrow_forward</i></button></OutboundLink>
          </div>
        </div>

        <div className='mt-32'>
          <h2 className='text-center md-display-large'>Blog</h2>
          <p className='m-2 text-center md-headline-small md-color-secondary'>Projects, writings, and code</p>

          <div className='grid gap-6 grid-cols-1 lg:grid-cols-12 mt-8'>
            <Link to='/blog/install-gitlab-runner-kubernetes/' className='col-span-4'>
              <div className='md-surface-2 p-8 rounded-[32px] overflow-hidden h-full hover:md-surface-5'>
                <StaticImage className='-mt-8 -mx-8 aspect-video' src='../images/blog/post-1-cover.jpeg' alt='Gitlab logo on purple background' />

                <p className='md-body-medium md-color-secondary mt-8'>Article</p>
                <h3 className='md-headline-medium font-medium line-clamp-2'>How to Install a GitLab Runner on Kubernetes</h3>
                <p className='md-body-large mt-4 line-clamp-3'>Learn how to install Gitlab CI/CD Runner on Kubernetes and grant access to the Docker Daemon to build containers.</p>
              </div>
            </Link>
            <Link to='/blog/simple-database/' className='col-span-4'>
              <div className='md-surface-2 p-8 rounded-[32px] overflow-hidden h-full hover:md-surface-5'>
                <StaticImage className='-mt-8 -mx-8 aspect-video' src='../images/blog/simple-database-motivation-design-cover.jpg' alt='Servers in a data center' />

                <p className='md-body-medium md-color-secondary mt-8'>Article</p>
                <h3 className='md-headline-medium font-medium line-clamp-2'>Build a Simple Database</h3>
                <p className='md-body-large mt-4 line-clamp-3'>Introductory tutorial to designing and building a LSM-Tree based Key-Value Store like RocksDB.</p>
              </div>
            </Link>
            <Link to='/blog/chess-analysis/' className='col-span-4'>
              <div className='md-surface-2 p-8 rounded-[32px] overflow-hidden h-full hover:md-surface-5'>
                <StaticImage className='-mt-8 -mx-8 aspect-video' src='../images/blog/post-2-cover.jpg' alt='Pawns on a chessboard' />

                <p className='md-body-medium md-color-secondary mt-8'>Article</p>
                <h3 className='md-headline-medium font-medium line-clamp-2'>Relationship Between Chess Opening Knowledge and Player Rating</h3>
                <p className='md-body-large mt-4 line-clamp-3'>How does knowledge of Chess Openings relate to player rating? In this analysis, I investigate the use Book Openings and Master Games with a sample of 20,000 public Lichess Games.</p>
              </div>
            </Link>
          </div>
        </div>

        <div>
          <h2 className='mt-32 text-center md-display-large'>Contact</h2>
          <p className='m-2 text-center md-headline-small md-color-secondary'>Reach out. Send a message.</p>

          <div className='grid grid-cols-1 md:grid-cols-2 col-span-4 mt-8 rounded-[32px] overflow-hidden border border-[#8F909A]'>
            <OutboundLink href='mailto:adambcomer@gmail.com'>
              <div className='md-title-medium md-color-primary hover:!text-black inline-flex items-center border-b md:border-r border-[#8F909A] hover:bg-[#D9E2FF] px-12 py-6 w-full'>
                <i className='material-icons mr-4'>mail</i> adambcomer@gmail.com
              </div>
            </OutboundLink>
            <OutboundLink href='https://www.linkedin.com/in/adambcomer'>
              <div className='group md-title-medium md-color-primary hover:!text-black inline-flex items-center border-b border-l border-[#8F909A] hover:bg-[#D9E2FF] -ml-px px-12 py-6 w-full'>
                <i className='mr-3'>
                  <svg className='w-6 fill-[#0056D2] group-hover:fill-black' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'>
                    <path d='M26.21,4H5.79A1.78,1.78,0,0,0,4,5.73V26.2a1.77,1.77,0,0,0,1.79,1.73H26.21A1.77,1.77,0,0,0,28,26.2V5.73A1.78,1.78,0,0,0,26.21,4ZM11.11,24.41H7.59V13h3.52Zm-1.72-13A2.07,2.07,0,0,1,7.32,9.39,2,2,0,0,1,9.39,7.32a2.07,2.07,0,0,1,0,4.13ZM24.48,24.34H21V18.76c0-1.33,0-3.06-1.86-3.06S17,17.16,17,18.63v5.65H13.44V13h3.32V14.5h.07a3.72,3.72,0,0,1,3.39-1.86c3.59,0,4.26,2.4,4.26,5.45Z' transform='translate(0 0)' />
                  </svg>
                </i>
                @adambcomer
              </div>
            </OutboundLink>
            <OutboundLink href='https://github.com/adambcomer'>
              <div className='group md-title-medium md-color-primary hover:!text-black inline-flex items-center border-t md:border-r border-[#8F909A] hover:bg-[#D9E2FF] -mt-px px-12 py-6 w-full'>
                <i className='mr-4'>
                  <svg className='w-6 fill-[#0056D2] group-hover:fill-black' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'>
                    <path d='M16,2a14,14,0,0,0-4.43,27.28c.7.13,1-.3,1-.67s0-1.21,0-2.38c-3.89.84-4.71-1.88-4.71-1.88A3.71,3.71,0,0,0,6.24,22.3c-1.27-.86.1-.85.1-.85A2.94,2.94,0,0,1,8.48,22.9a3,3,0,0,0,4.08,1.16,2.93,2.93,0,0,1,.88-1.87c-3.1-.36-6.37-1.56-6.37-6.92a5.4,5.4,0,0,1,1.44-3.76,5,5,0,0,1,.14-3.7s1.17-.38,3.85,1.43a13.3,13.3,0,0,1,7,0c2.67-1.81,3.84-1.43,3.84-1.43a5,5,0,0,1,.14,3.7,5.4,5.4,0,0,1,1.44,3.76c0,5.38-3.27,6.56-6.39,6.91a3.33,3.33,0,0,1,.95,2.59c0,1.87,0,3.38,0,3.84s.25.81,1,.67A14,14,0,0,0,16,2Z' />
                  </svg>
                </i>
                @adambcomer
              </div>
            </OutboundLink>
            <OutboundLink href='https://twitter.com/adambcomer'>
              <div className='group md-title-medium md-color-primary hover:!text-black inline-flex items-center border-t border-l border-[#8F909A] hover:bg-[#D9E2FF] -mt-px -ml-px px-12 py-6 w-full'>
                <i className='mr-4'>
                  <svg className='w-6 fill-[#0056D2] group-hover:fill-black' xmlns='http://www.w3.org/2000/svg' viewBox='2 2 27 27'>
                    <path d='M11.92,24.94A12.76,12.76,0,0,0,24.76,12.1c0-.2,0-.39,0-.59A9.4,9.4,0,0,0,27,9.18a9.31,9.31,0,0,1-2.59.71,4.56,4.56,0,0,0,2-2.5,8.89,8.89,0,0,1-2.86,1.1,4.52,4.52,0,0,0-7.7,4.11,12.79,12.79,0,0,1-9.3-4.71,4.51,4.51,0,0,0,1.4,6,4.47,4.47,0,0,1-2-.56v.05A4.53,4.53,0,0,0,9.5,17.83a4.53,4.53,0,0,1-2,.08A4.51,4.51,0,0,0,11.68,21,9.05,9.05,0,0,1,6.07,23,9.77,9.77,0,0,1,5,22.91a12.77,12.77,0,0,0,6.92,2' transform='translate(0)' />
                  </svg>
                </i>
                @adambcomer
              </div>
            </OutboundLink>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}

export default IndexPage
