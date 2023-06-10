import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { graphql, useStaticQuery } from 'gatsby'
import { getSrc } from 'gatsby-plugin-image'
import { PageQuery } from '../types/page'

const ExperiencePage = (): JSX.Element => {
  return (
    <>
      <Navbar />
      <main className='px-6 md:px-12 mb-32'>
        <div className='mx-6 my-64 text-center'>
          <h1 className='md-display-large'>Experience</h1>
          <p className='md-headline-medium md-color-secondary mt-6'>
            My work experience and resume
          </p>
        </div>

        <div className='md-surface-2 rounded-[32px] p-6 md:p-12 max-w-screen-lg mx-auto'>
          <h2 className='md-display-small'>Knowtworthy</h2>

          <h3 className='md-title-small md-on-surface-variant mt-6'>Role</h3>
          <p className='md-body-large mt-2'>
            Software Developer and Co-Founder
          </p>

          <h3 className='md-title-small md-on-surface-variant mt-6'>Time</h3>
          <p className='md-body-large mt-2'>Nov 2017 - Present</p>

          <h3 className='md-title-small md-on-surface-variant mt-6'>About</h3>
          <p className='md-body-large mt-2'>
            <a
              href='https://knowtworthy.com/'
              className='md-link underline hover:md-on-primary-container'
            >
              Knowtworthy
            </a>{' '}
            is a Meetings Productivity tool for business professionals to aid in
            organizing, formatting, and sharing meeting minutes. My job at the
            company is primarily a Full Stack Software Developer. My
            responsibility are to build and maintain the Web App and Backend
            API. Additionally, I manage our Kubernetes Cluster on AWS.
          </p>
          <p className='md-body-large mt-4'>
            When I joined the company, my focus was designing and building the
            Backend API in Node.js, Koa.js, and MongoDB and establishing
            infrastructure on AWS. Today, my responsibilities have expanded to
            the Frontend, other Backend Services, and the CI/CD systems. On the
            Frontend, I redesigned the Web App from scratch using our new design
            language, Typescript, and React Hooks. On top of the Backend API in
            Node.js, I authored our audio streaming server for realtime
            Speech-to-Text with Go, a design choice we made to improve the
            performance of our services. Lastly, I created our CI/CD system on
            Gitlab CI/CD to automate testing and quickly roll out updates to
            users.
          </p>
          <p className='md-body-large mt-4'>
            My contributions on the AWS infrastructure and Kubernetes cluster
            are innumerable, but I will list a few notable ones. I setup the
            Kubernetes cluster on AWS to host all of our services, including but
            not limited to: the Backend API, Audio Streaming Server, and Audio
            Processor Workers. Additionally, this includes our staging
            environment for QA testing before releases. Using AWS CloudFront and
            AWS Load Balancers, I created a layered solution to distribute our
            Web App globally with minimal latency and failovers for our backend
            services. Finally, I setup Elasticsearch to offer a search service
            to our users and collect logs from our backend servers.
          </p>

          <h3 className='md-title-small md-on-surface-variant mt-6'>
            Tools and Technologies
          </h3>
          <div className='flex flex-wrap mt-2'>
            <span className='md-label-large !text-white md-bg-primary px-3 py-1.5 rounded-lg mr-4 mt-2'>
              Javascript
            </span>
            <span className='md-label-large !text-white md-bg-primary px-3 py-1.5 rounded-lg mr-4 mt-2'>
              Typescript
            </span>
            <span className='md-label-large !text-white md-bg-primary px-3 py-1.5 rounded-lg mr-4 mt-2'>
              HTML
            </span>
            <span className='md-label-large !text-white md-bg-primary px-3 py-1.5 rounded-lg mr-4 mt-2'>
              CSS
            </span>
            <span className='md-label-large !text-white md-bg-primary px-3 py-1.5 rounded-lg mr-4 mt-2'>
              React
            </span>
            <span className='md-label-large !text-white md-bg-primary px-3 py-1.5 rounded-lg mr-4 mt-2'>
              Websockets
            </span>
            <span className='md-label-large !text-white md-bg-primary px-3 py-1.5 rounded-lg mr-4 mt-2'>
              Gatsby
            </span>
            <span className='md-label-large !text-white md-bg-primary px-3 py-1.5 rounded-lg mr-4 mt-2'>
              Node.js
            </span>
            <span className='md-label-large !text-white md-bg-primary px-3 py-1.5 rounded-lg mr-4 mt-2'>
              Go
            </span>
            <span className='md-label-large !text-white md-bg-primary px-3 py-1.5 rounded-lg mr-4 mt-2'>
              Docker
            </span>
            <span className='md-label-large !text-white md-bg-primary px-3 py-1.5 rounded-lg mr-4 mt-2'>
              Kubernetes
            </span>
            <span className='md-label-large !text-white md-bg-primary px-3 py-1.5 rounded-lg mr-4 mt-2'>
              Elasticsearch
            </span>
            <span className='md-label-large !text-white md-bg-primary px-3 py-1.5 rounded-lg mr-4 mt-2'>
              MongoDB
            </span>
            <span className='md-label-large !text-white md-bg-primary px-3 py-1.5 rounded-lg mr-4 mt-2'>
              AWS EC2
            </span>
            <span className='md-label-large !text-white md-bg-primary px-3 py-1.5 rounded-lg mr-4 mt-2'>
              AWS EKS
            </span>
            <span className='md-label-large !text-white md-bg-primary px-3 py-1.5 rounded-lg mr-4 mt-2'>
              AWS CloudFront
            </span>
            <span className='md-label-large !text-white md-bg-primary px-3 py-1.5 rounded-lg mr-4 mt-2'>
              AWS S3
            </span>
            <span className='md-label-large !text-white md-bg-primary px-3 py-1.5 rounded-lg mr-4 mt-2'>
              AWS SQS
            </span>
            <span className='md-label-large !text-white md-bg-primary px-3 py-1.5 rounded-lg mr-4 mt-2'>
              AWS OpenSearch
            </span>
            <span className='md-label-large !text-white md-bg-primary px-3 py-1.5 rounded-lg mr-4 mt-2'>
              AWS X-Ray
            </span>
            <span className='md-label-large !text-white md-bg-primary px-3 py-1.5 rounded-lg mr-4 mt-2'>
              AWS Cloudwatch
            </span>
            <span className='md-label-large !text-white md-bg-primary px-3 py-1.5 rounded-lg mr-4 mt-2'>
              Google Speech-to-Text
            </span>
            <span className='md-label-large !text-white md-bg-primary px-3 py-1.5 rounded-lg mr-4 mt-2'>
              Git
            </span>
            <span className='md-label-large !text-white md-bg-primary px-3 py-1.5 rounded-lg mr-4 mt-2'>
              Gitlab CI/CD
            </span>
          </div>
        </div>

        <div className='md-surface-2 rounded-[32px] p-6 md:p-12 max-w-screen-lg mx-auto mt-32'>
          <h2 className='md-display-small'>Bank of Montreal (BMO)</h2>

          <h3 className='md-title-small md-on-surface-variant mt-6'>Role</h3>
          <p className='md-body-large mt-2'>Software Developer Intern</p>

          <h3 className='md-title-small md-on-surface-variant mt-6'>Time</h3>
          <p className='md-body-large mt-2'>May 2019 - Aug 2019</p>

          <h3 className='md-title-small md-on-surface-variant mt-6'>About</h3>
          <p className='md-body-large mt-2'>
            During my summer internship at{' '}
            <a
              href='https://www.bmo.com/'
              className='md-link underline hover:md-on-primary-container'
            >
              BMO
            </a>
            , I was tasked with designing and building the web frontend for a
            new Business Intelligence(BI) tool at the Bank. The tool was
            targeted at non-technical employees to help them draw up reports and
            better understand their data. Using the{' '}
            <a
              href='https://www.carbondesignsystem.com/'
              className='md-link underline hover:md-on-primary-container'
            >
              Carbon Design System
            </a>
            , I built the UI prototypes and pitched the design to management.
            Additionally, I built the web frontend with HTML, CSS, and jQuery on
            Microsoft’s C# MVC.
          </p>
          <p className='md-body-large mt-4'>
            When I wasn’t working on the BI tool, I helped the Business
            Associates automate tedious tasks with Python scripts. My most
            impactful effort was a{' '}
            <a
              href='https://en.wikipedia.org/wiki/Regression_testing'
              className='md-link underline hover:md-on-primary-container'
            >
              regression analysis
            </a>{' '}
            tool to verify that new code changes to a legacy system were
            backwards compatible.
          </p>

          <h3 className='md-title-small md-on-surface-variant mt-6'>
            Tools and Technologies
          </h3>
          <div className='flex flex-wrap mt-2'>
            <span className='md-label-large !text-white md-bg-primary px-3 py-1.5 rounded-lg mr-4 mt-2'>
              Javascript
            </span>
            <span className='md-label-large !text-white md-bg-primary px-3 py-1.5 rounded-lg mr-4 mt-2'>
              jQuery
            </span>
            <span className='md-label-large !text-white md-bg-primary px-3 py-1.5 rounded-lg mr-4 mt-2'>
              HTML
            </span>
            <span className='md-label-large !text-white md-bg-primary px-3 py-1.5 rounded-lg mr-4 mt-2'>
              CSS
            </span>
            <span className='md-label-large !text-white md-bg-primary px-3 py-1.5 rounded-lg mr-4 mt-2'>
              C#
            </span>
            <span className='md-label-large !text-white md-bg-primary px-3 py-1.5 rounded-lg mr-4 mt-2'>
              MVC
            </span>
            <span className='md-label-large !text-white md-bg-primary px-3 py-1.5 rounded-lg mr-4 mt-2'>
              Python
            </span>
            <span className='md-label-large !text-white md-bg-primary px-3 py-1.5 rounded-lg mr-4 mt-2'>
              Elasticsearch
            </span>
            <span className='md-label-large !text-white md-bg-primary px-3 py-1.5 rounded-lg mr-4 mt-2'>
              Kibana
            </span>
          </div>
        </div>

        <div className='md-surface-2 rounded-[32px] p-6 md:p-12 max-w-screen-lg mx-auto mt-32'>
          <h2 className='md-display-small'>BDM Trucks</h2>

          <h3 className='md-title-small md-on-surface-variant mt-6'>Role</h3>
          <p className='md-body-large mt-2'>Web Developer</p>

          <h3 className='md-title-small md-on-surface-variant mt-6'>Time</h3>
          <p className='md-body-large mt-2'>Sep 2017 - Nov 2017</p>

          <h3 className='md-title-small md-on-surface-variant mt-6'>About</h3>
          <p className='md-body-large mt-2'>
            <a
              href='http://www.bdmtrucks.com/'
              className='md-link underline hover:md-on-primary-container'
            >
              BDM Trucks
            </a>{' '}
            is a commercial truck repair service in Manassas, VA that needed a
            new website. I built them a new website using HTML, CSS, and{' '}
            <a
              href='https://getbootstrap.com/'
              className='md-link underline hover:md-on-primary-container'
            >
              Bootstrap 4
            </a>
            . Additionally, I optimized the on-page SEO of their new website to
            draw more traffic from their local area.
          </p>

          <h3 className='md-title-small md-on-surface-variant mt-6'>
            Tools and Technologies
          </h3>
          <div className='flex flex-wrap mt-2'>
            <span className='md-label-large !text-white md-bg-primary px-3 py-1.5 rounded-lg mr-4 mt-2'>
              HTML
            </span>
            <span className='md-label-large !text-white md-bg-primary px-3 py-1.5 rounded-lg mr-4 mt-2'>
              CSS
            </span>
            <span className='md-label-large !text-white md-bg-primary px-3 py-1.5 rounded-lg mr-4 mt-2'>
              Bootstrap 4
            </span>
            <span className='md-label-large !text-white md-bg-primary px-3 py-1.5 rounded-lg mr-4 mt-2'>
              Github Pages
            </span>
          </div>
        </div>

        <div className='md-surface-2 rounded-[32px] p-6 md:p-12 max-w-screen-lg mx-auto mt-32'>
          <h2 className='md-display-small'>SBIRT</h2>

          <h3 className='md-title-small md-on-surface-variant mt-6'>Role</h3>
          <p className='md-body-large mt-2'>Software Developer</p>

          <h3 className='md-title-small md-on-surface-variant mt-6'>Time</h3>
          <p className='md-body-large mt-2'>Oct 2015 - Dec 2016</p>

          <h3 className='md-title-small md-on-surface-variant mt-6'>About</h3>
          <p className='md-body-large mt-2'>
            <a
              href='https://www.su.edu/pharmacy/'
              className='md-link underline hover:md-on-primary-container'
            >
              Shenandoah University’s School of Pharmacy
            </a>{' '}
            needed a tool to collect data on drug abuse from local clinics in
            the Northern Virginia area. I built an iOS and Android app to assist
            their team in collecting reports from doctors and students in
            training. Later, the data collected went into research on drug abuse
            and intervention in the local area, potentially saving lives.
          </p>

          <h3 className='md-title-small md-on-surface-variant mt-6'>
            Tools and Technologies
          </h3>
          <div className='flex flex-wrap mt-2'>
            <span className='md-label-large !text-white md-bg-primary px-3 py-1.5 rounded-lg mr-4 mt-2'>
              Java
            </span>
            <span className='md-label-large !text-white md-bg-primary px-3 py-1.5 rounded-lg mr-4 mt-2'>
              Android
            </span>
            <span className='md-label-large !text-white md-bg-primary px-3 py-1.5 rounded-lg mr-4 mt-2'>
              Swift
            </span>
            <span className='md-label-large !text-white md-bg-primary px-3 py-1.5 rounded-lg mr-4 mt-2'>
              iOS
            </span>
            <span className='md-label-large !text-white md-bg-primary px-3 py-1.5 rounded-lg mr-4 mt-2'>
              GCP App Engine
            </span>
            <span className='md-label-large !text-white md-bg-primary px-3 py-1.5 rounded-lg mr-4 mt-2'>
              SQL
            </span>
            <span className='md-label-large !text-white md-bg-primary px-3 py-1.5 rounded-lg mr-4 mt-2'>
              MySQL
            </span>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}

export default ExperiencePage

export const Head = () => {
  const result: PageQuery = useStaticQuery(graphql`
    {
      image: file(relativePath: { eq: "adam-comer-portrait.jpg" }) {
        childImageSharp {
          gatsbyImageData(width: 720)
        }
      }
    }
  `)

  return (
    <>
      <link rel='canonical' href='https://adambcomer.com/experience/' />

      <title>Experience | Adam Comer | Software Developer</title>
      <meta
        name='description'
        content='My work experience as a fullstack developer. Learn about the roles I’ve had and the skills I’ve gained along the way.'
      />

      <meta
        property='og:title'
        content='Experience | Adam Comer | Software Developer'
      />
      <meta
        property='og:description'
        content='My work experience as a fullstack developer. Learn about the roles I’ve had and the skills I’ve gained along the way.'
      />
      <meta property='og:type' content='website' />
      <meta property='og:url' content='https://adambcomer.com/experience/' />
      <meta
        property='og:image'
        content={`https://adambcomer.com${getSrc(result.image) ?? ''}`}
      />
      <meta property='og:image:width' content='720' />
      <meta property='og:image:height' content='720' />

      <script type='application/ld+json'>
        {`
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
        "https://knowtworthy.com/blog/author/adambcomer/",
        "https://www.chess.ca/en/ratings/p/?id=176776",
        "https://www.chess.com/member/adambcomer",
        "https://lichess.org/@/adambcomer"
    ]
  }
`}
      </script>
    </>
  )
}
