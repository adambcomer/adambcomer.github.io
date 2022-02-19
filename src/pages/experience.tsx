import React, { FC } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { OutboundLink } from 'gatsby-plugin-google-gtag'
import { Helmet } from 'react-helmet'
import { graphql, useStaticQuery } from 'gatsby'
import { getSrc } from 'gatsby-plugin-image'
import { PageQuery } from '../types/page'

const ExperiencePage: FC = () => {
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
        <link rel='canonical' href='https://adambcomer.com/experience/' />

        <title>Experience | Adam Comer | Software Developer</title>
        <meta name='description' content='My work experience and resume. The tools and technologies I’ve used throughout my career.' />

        <meta property='og:title' content='Experience | Adam Comer | Software Developer' />
        <meta property='og:description' content='My work experience and resume. The tools and technologies I’ve used throughout my career.' />
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://adambcomer.com/experience/' />
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
      <main className='px-6 md:px-12 mb-32'>
        <div className='mx-6 my-64 text-center'>
          <h1 className='md-display-large'>Experience</h1>
          <p className='md-headline-medium md-color-secondary mt-6'>My work experience and resume</p>
        </div>

        <div className='md-surface-2 rounded-[32px] p-6 md:p-12 max-w-screen-lg mx-auto'>
          <h2 className='md-display-small'>Knowtworthy</h2>

          <h3 className='md-title-small md-on-surface-variant mt-6'>Role</h3>
          <p className='md-body-large mt-2'>Software Developer and Co-Founder</p>

          <h3 className='md-title-small md-on-surface-variant mt-6'>Time</h3>
          <p className='md-body-large mt-2'>Nov 2017 - Present</p>

          <h3 className='md-title-small md-on-surface-variant mt-6'>About</h3>
          <p className='md-body-large mt-2'><OutboundLink href='https://knowtworthy.com/' className='md-link underline hover:md-on-primary-container'>Knowtworthy</OutboundLink> is a meetings communication tool to help organize meetings for teams of all sizes. At Knowtworthy, I designed, built, and currently maintain the entire software stack. On top of that, I built our backend API, web app, and server infrastructure on AWS. I founded the company with my co-founders <OutboundLink href='http://alexgordienko.com/' className='md-link underline hover:md-on-primary-container'>Alex</OutboundLink> and <OutboundLink href='https://sidguptacode.github.io/' className='md-link underline hover:md-on-primary-container'>Sid</OutboundLink>. During the summer after our first year in university, Knowtworthy was part <OutboundLink href='https://hatchery.engineering.utoronto.ca/nest-info-page/' className='md-link underline hover:md-on-primary-container'>UofT’s Hatchery’s NEST Program</OutboundLink> and won second place at the <OutboundLink href='https://news.engineering.utoronto.ca/startups-to-watch-from-hatchery-demo-day-2018/' className='md-link underline hover:md-on-primary-container'>Hatchery’s Demo Day</OutboundLink>, fetching in $10,000 for the company.</p>

          <h3 className='md-title-small md-on-surface-variant mt-6'>Tools and Technologies</h3>
          <div className='flex flex-wrap mt-2'>
            <span className='md-label-large !text-white md-bg-primary px-3 py-1.5 rounded-lg mr-4 mt-2'>Javascript</span>
            <span className='md-label-large !text-white md-bg-primary px-3 py-1.5 rounded-lg mr-4 mt-2'>React</span>
            <span className='md-label-large !text-white md-bg-primary px-3 py-1.5 rounded-lg mr-4 mt-2'>HTML</span>
            <span className='md-label-large !text-white md-bg-primary px-3 py-1.5 rounded-lg mr-4 mt-2'>CSS</span>
            <span className='md-label-large !text-white md-bg-primary px-3 py-1.5 rounded-lg mr-4 mt-2'>Node.js</span>
            <span className='md-label-large !text-white md-bg-primary px-3 py-1.5 rounded-lg mr-4 mt-2'>Python</span>
            <span className='md-label-large !text-white md-bg-primary px-3 py-1.5 rounded-lg mr-4 mt-2'>Kubernetes</span>
            <span className='md-label-large !text-white md-bg-primary px-3 py-1.5 rounded-lg mr-4 mt-2'>Google Speech-to-Text</span>
          </div>
        </div>

        <div className='md-surface-2 rounded-[32px] p-6 md:p-12 max-w-screen-lg mx-auto mt-32'>
          <h2 className='md-display-small'>Bank of Montreal (BMO)</h2>

          <h3 className='md-title-small md-on-surface-variant mt-6'>Role</h3>
          <p className='md-body-large mt-2'>Software Developer Intern</p>

          <h3 className='md-title-small md-on-surface-variant mt-6'>Time</h3>
          <p className='md-body-large mt-2'>May 2019 - Aug 2019</p>

          <h3 className='md-title-small md-on-surface-variant mt-6'>About</h3>
          <p className='md-body-large mt-2'>During my summer internship at <OutboundLink href='https://www.bmo.com/' className='md-link underline hover:md-on-primary-container'>BMO</OutboundLink>, I was tasked with designing and building the web frontend for a new Business Intelligence(BI) tool at the Bank. The tool was targeted at non-technical employees to help them draw up reports and better understand their data. Using the <OutboundLink href='https://www.carbondesignsystem.com/' className='md-link underline hover:md-on-primary-container'>Carbon Design System</OutboundLink>, I built the UI prototypes and pitched the design to management. Additionally, I built the web frontend with HTML, CSS, and jQuery on Microsoft’s C# MVC.</p>
          <p className='md-body-large mt-2'>When I wasn’t working on the BI tool, I helped the Business Associates automate tedious tasks with Python scripts. My most impactful effort was a <OutboundLink href='https://en.wikipedia.org/wiki/Regression_testing' className='md-link underline hover:md-on-primary-container'>regression analysis</OutboundLink> tool to verify that new code changes to a legacy system were backwards compatible.</p>

          <h3 className='md-title-small md-on-surface-variant mt-6'>Tools and Technologies</h3>
          <div className='flex flex-wrap mt-2'>
            <span className='md-label-large !text-white md-bg-primary px-3 py-1.5 rounded-lg mr-4 mt-2'>Javascript</span>
            <span className='md-label-large !text-white md-bg-primary px-3 py-1.5 rounded-lg mr-4 mt-2'>jQuery</span>
            <span className='md-label-large !text-white md-bg-primary px-3 py-1.5 rounded-lg mr-4 mt-2'>HTML</span>
            <span className='md-label-large !text-white md-bg-primary px-3 py-1.5 rounded-lg mr-4 mt-2'>CSS</span>
            <span className='md-label-large !text-white md-bg-primary px-3 py-1.5 rounded-lg mr-4 mt-2'>C#</span>
            <span className='md-label-large !text-white md-bg-primary px-3 py-1.5 rounded-lg mr-4 mt-2'>MVC</span>
            <span className='md-label-large !text-white md-bg-primary px-3 py-1.5 rounded-lg mr-4 mt-2'>Python</span>
            <span className='md-label-large !text-white md-bg-primary px-3 py-1.5 rounded-lg mr-4 mt-2'>Elasticsearch</span>
            <span className='md-label-large !text-white md-bg-primary px-3 py-1.5 rounded-lg mr-4 mt-2'>Kibana</span>
          </div>
        </div>

        <div className='md-surface-2 rounded-[32px] p-6 md:p-12 max-w-screen-lg mx-auto mt-32'>
          <h2 className='md-display-small'>BDM Trucks</h2>

          <h3 className='md-title-small md-on-surface-variant mt-6'>Role</h3>
          <p className='md-body-large mt-2'>Web Developer</p>

          <h3 className='md-title-small md-on-surface-variant mt-6'>Time</h3>
          <p className='md-body-large mt-2'>Sep 2017 - Nov 2017</p>

          <h3 className='md-title-small md-on-surface-variant mt-6'>About</h3>
          <p className='md-body-large mt-2'><OutboundLink href='http://www.bdmtrucks.com/' className='md-link underline hover:md-on-primary-container'>BDM Trucks</OutboundLink> is a commercial truck repair service in Manassas, VA that needed a new website. I built them a new website using HTML, CSS, and <OutboundLink href='https://getbootstrap.com/' className='md-link underline hover:md-on-primary-container'>Bootstrap 4</OutboundLink>. Additionally, I optimized the on-page SEO of their new website to draw more traffic from their local area.</p>

          <h3 className='md-title-small md-on-surface-variant mt-6'>Tools and Technologies</h3>
          <div className='flex flex-wrap mt-2'>
            <span className='md-label-large !text-white md-bg-primary px-3 py-1.5 rounded-lg mr-4 mt-2'>HTML</span>
            <span className='md-label-large !text-white md-bg-primary px-3 py-1.5 rounded-lg mr-4 mt-2'>CSS</span>
            <span className='md-label-large !text-white md-bg-primary px-3 py-1.5 rounded-lg mr-4 mt-2'>Bootstrap 4</span>
            <span className='md-label-large !text-white md-bg-primary px-3 py-1.5 rounded-lg mr-4 mt-2'>Github Pages</span>
          </div>
        </div>

        <div className='md-surface-2 rounded-[32px] p-6 md:p-12 max-w-screen-lg mx-auto mt-32'>
          <h2 className='md-display-small'>SBIRT</h2>

          <h3 className='md-title-small md-on-surface-variant mt-6'>Role</h3>
          <p className='md-body-large mt-2'>Software Developer</p>

          <h3 className='md-title-small md-on-surface-variant mt-6'>Time</h3>
          <p className='md-body-large mt-2'>Oct 2015 - Dec 2016</p>

          <h3 className='md-title-small md-on-surface-variant mt-6'>About</h3>
          <p className='md-body-large mt-2'><OutboundLink href='https://www.su.edu/pharmacy/' className='md-link underline hover:md-on-primary-container'>Shenandoah University’s School of Pharmacy</OutboundLink> needed a tool to collect data on drug abuse from local clinics in the Northern Virginia area. I built an iOS and Android app to assist their team in collecting reports from doctors and students in training. Later, the data collected went into research on drug abuse and intervention in the local area, potentially saving lives.</p>

          <h3 className='md-title-small md-on-surface-variant mt-6'>Tools and Technologies</h3>
          <div className='flex flex-wrap mt-2'>
            <span className='md-label-large !text-white md-bg-primary px-3 py-1.5 rounded-lg mr-4 mt-2'>Java</span>
            <span className='md-label-large !text-white md-bg-primary px-3 py-1.5 rounded-lg mr-4 mt-2'>Android</span>
            <span className='md-label-large !text-white md-bg-primary px-3 py-1.5 rounded-lg mr-4 mt-2'>Swift</span>
            <span className='md-label-large !text-white md-bg-primary px-3 py-1.5 rounded-lg mr-4 mt-2'>iOS</span>
            <span className='md-label-large !text-white md-bg-primary px-3 py-1.5 rounded-lg mr-4 mt-2'>App Engine</span>
            <span className='md-label-large !text-white md-bg-primary px-3 py-1.5 rounded-lg mr-4 mt-2'>GCP</span>
            <span className='md-label-large !text-white md-bg-primary px-3 py-1.5 rounded-lg mr-4 mt-2'>MySQL</span>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}

export default ExperiencePage
