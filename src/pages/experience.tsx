import React from 'react'
import Navbar from '../components/Navbar'
import '../styles/projects.css'
import Footer from '../components/Footer'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import { Helmet } from 'react-helmet'

const ExperiencePage = () => {

  return (
    <>
      <Helmet htmlAttributes={{ lang: 'en' }}>
        <link rel="canonical" href="https://adambcomer.com/experience/" />

        <title>Experience | Adam Comer | Software Developer</title>
        <meta name="description" content="The places and people I've worked for." />

        <meta property="og:title" content="Adam Comer | Software Developer" />
        <meta property="og:description" content="The places and people I've worked for." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://adambcomer.com/experience/" />
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
      <main className='w-100'>
        <div className='mx-6 my-64'>
          <h1 className='text-6xl font-light'>Experience</h1>
          <p className='mt-6 text-lg text-1-color'>The places and people I've worked for</p>
        </div>

        <hr />

        <div className='grid grid-cols-1 lg:grid-cols-5 px-6 py-16 gap-x-12'>
          <div className='hidden lg:block'>
            <p className='text-xl font-semibold'>Work 1</p>
          </div>
          <div className='lg:col-span-3'>
            <h2 className='text-3xl'>Bank of Montreal (BMO)</h2>

            <h3 className='text-sm text-1-color mt-4'>Role</h3>
            <p>Software Developer Intern</p>

            <h3 className='text-sm text-1-color mt-4'>Time</h3>
            <p>May 2019 - Aug 2019</p>

            <h3 className='text-sm text-1-color mt-4'>About</h3>
            <p>During my summer internship at <OutboundLink href='https://www.bmo.com/' className='link-0-color hover:underline'>BMO</OutboundLink>, I was tasked with designing and building the web frontend for a new Business Intelligence(BI) tool at the Bank. The tool was targeted at non-technical employees to help them draw up reports and better understand their data. Using the <OutboundLink href='https://www.carbondesignsystem.com/' className='link-0-color hover:underline'>Carbon Design System</OutboundLink>, I built the UI prototypes and pitched the design to management. Additionally, I built the web frontend with HTML, CSS, and jQuery on Microsoft's C# MVC.</p>
            <p className='mt-4'>When I wasn't working on the BI tool, I helped the Business Associates automate tedious tasks with Python scripts. My most impactful effort was a <OutboundLink href='https://en.wikipedia.org/wiki/Regression_testing' className='link-0-color hover:underline'>regression analysis</OutboundLink> tool to verify that new code changes to a legacy system were backwards compatible.</p>

            <h3 className='text-sm text-1-color mt-4'>Tools and Frameworks</h3>
            <div className='flex flex-wrap'>
              <span className='rounded-full border border-current border-solid px-3 mr-4 mt-2'>Javascript</span>
              <span className='rounded-full border border-current border-solid px-3 mr-4 mt-2'>jQuery</span>
              <span className='rounded-full border border-current border-solid px-3 mr-4 mt-2'>HTML</span>
              <span className='rounded-full border border-current border-solid px-3 mr-4 mt-2'>CSS</span>
              <span className='rounded-full border border-current border-solid px-3 mr-4 mt-2'>C#</span>
              <span className='rounded-full border border-current border-solid px-3 mr-4 mt-2'>MVC</span>
              <span className='rounded-full border border-current border-solid px-3 mr-4 mt-2'>Python</span>
              <span className='rounded-full border border-current border-solid px-3 mr-4 mt-2'>Elasticsearch</span>
              <span className='rounded-full border border-current border-solid px-3 mr-4 mt-2'>Kibana</span>
            </div>
          </div>
        </div>


        <hr />

        <div className='grid grid-cols-1 lg:grid-cols-5 px-6 py-16 gap-x-12'>
          <div className='hidden lg:block'>
            <p className='text-xl font-semibold'>Work 2</p>
          </div>
          <div className='lg:col-span-3'>
            <h2 className='text-3xl'>Knowtworthy</h2>

            <h3 className='text-sm text-1-color mt-4'>Role</h3>
            <p>Software Developer and Co-Founder</p>

            <h3 className='text-sm text-1-color mt-4'>Time</h3>
            <p>Nov 2017 - Present</p>

            <h3 className='text-sm text-1-color mt-4'>About</h3>
            <p><OutboundLink href='https://knowtworthy.com/' className='link-0-color hover:underline'>Knowtworthy</OutboundLink> is a meetings communication tool to help organize meetings for teams of all sizes. At Knowtworthy, I designed, built, and currently maintain the entire software stack. On top of that, I built our backend API, web app, and server infrastructure on AWS. I founded the company with my co-founders <OutboundLink href='http://alexgordienko.com/' className='link-0-color hover:underline'>Alex</OutboundLink> and <OutboundLink href='https://sidguptacode.github.io/' className='link-0-color hover:underline'>Sid</OutboundLink>. During the summer after our first year in university, Knowtworthy was part <OutboundLink href='https://hatchery.engineering.utoronto.ca/nest-info-page/' className='link-0-color hover:underline'>UofT’s Hatchery's NEST Program</OutboundLink> and won second place at the <OutboundLink href='https://news.engineering.utoronto.ca/startups-to-watch-from-hatchery-demo-day-2018/' className='link-0-color hover:underline'>Hatchery's Demo Day</OutboundLink>, fetching in $10,000 for the company.</p>

            <h3 className='text-sm text-1-color mt-4'>Tools and Frameworks</h3>
            <div className='flex flex-wrap'>
              <span className='rounded-full border border-current border-solid px-3 mr-4 mt-2'>Javascript</span>
              <span className='rounded-full border border-current border-solid px-3 mr-4 mt-2'>React</span>
              <span className='rounded-full border border-current border-solid px-3 mr-4 mt-2'>HTML</span>
              <span className='rounded-full border border-current border-solid px-3 mr-4 mt-2'>CSS</span>
              <span className='rounded-full border border-current border-solid px-3 mr-4 mt-2'>Node.js</span>
              <span className='rounded-full border border-current border-solid px-3 mr-4 mt-2'>Python</span>
              <span className='rounded-full border border-current border-solid px-3 mr-4 mt-2'>Kubernetes</span>
              <span className='rounded-full border border-current border-solid px-3 mr-4 mt-2'>Google Speech-to-Text</span>
            </div>

            <div className='mt-16'>
              <OutboundLink className='text-xl hover:underline arrow-link ml-6' href='https://knowtworthy.com/'>Knowtworthy</OutboundLink>
            </div>
          </div>
        </div>

        <hr />

        <div className='grid grid-cols-1 lg:grid-cols-5 px-6 py-16 gap-x-12'>
          <div className='hidden lg:block'>
            <p className='text-xl font-semibold'>Work 3</p>
          </div>
          <div className='lg:col-span-3'>
            <h2 className='text-3xl'>BDM Trucks</h2>

            <h3 className='text-sm text-1-color mt-4'>Role</h3>
            <p>Web Developer</p>

            <h3 className='text-sm text-1-color mt-4'>Time</h3>
            <p>Sep 2017 - Nov 2017</p>

            <h3 className='text-sm text-1-color mt-4'>About</h3>
            <p><OutboundLink href='http://www.bdmtrucks.com/' className='link-0-color hover:underline'>BDM Trucks</OutboundLink> is a commercial truck repair service in Manassas, VA that needed a new website. I built them a new website using HTML, CSS, and <OutboundLink href='https://getbootstrap.com/' className='link-0-color hover:underline'>Bootstrap 4</OutboundLink>. Additionally, I optimized the on-page SEO of their new website to draw more traffic from their local area.</p>

            <h3 className='text-sm text-1-color mt-4'>Tools and Frameworks</h3>
            <div className='flex flex-wrap'>
              <span className='rounded-full border border-current border-solid px-3 mr-4 mt-2'>HTML</span>
              <span className='rounded-full border border-current border-solid px-3 mr-4 mt-2'>CSS</span>
              <span className='rounded-full border border-current border-solid px-3 mr-4 mt-2'>Bootstrap 4</span>
              <span className='rounded-full border border-current border-solid px-3 mr-4 mt-2'>Github Pages</span>
            </div>
          </div>
        </div>

        <hr />

        <div className='grid grid-cols-1 lg:grid-cols-5 px-6 py-16 gap-x-12'>
          <div className='hidden lg:block'>
            <p className='text-xl font-semibold'>Work 4</p>
          </div>
          <div className='lg:col-span-3'>
            <h2 className='text-3xl'>SBIRT</h2>

            <h3 className='text-sm text-1-color mt-4'>Role</h3>
            <p>Software Developer</p>

            <h3 className='text-sm text-1-color mt-4'>Time</h3>
            <p>Oct 2015 - Dec 2016</p>

            <h3 className='text-sm text-1-color mt-4'>About</h3>
            <p><OutboundLink href='https://www.su.edu/pharmacy/' className='link-0-color hover:underline'>Shenandoah University’s School of Pharmacy</OutboundLink> needed a tool to collect data on drug abuse from local clinics in the Northern Virginia area. I built an iOS and Android app to assist their team in collecting reports from doctors and students in training. Later, the data collected went into research on drug abuse and intervention in the local area, potentially saving lives.</p>

            <h3 className='text-sm text-1-color mt-4'>Tools and Frameworks</h3>
            <div className='flex flex-wrap'>
              <span className='rounded-full border border-current border-solid px-3 mr-4 mt-2'>Java</span>
              <span className='rounded-full border border-current border-solid px-3 mr-4 mt-2'>Android</span>
              <span className='rounded-full border border-current border-solid px-3 mr-4 mt-2'>Swift</span>
              <span className='rounded-full border border-current border-solid px-3 mr-4 mt-2'>iOS</span>
              <span className='rounded-full border border-current border-solid px-3 mr-4 mt-2'>App Engine</span>
              <span className='rounded-full border border-current border-solid px-3 mr-4 mt-2'>GCP</span>
              <span className='rounded-full border border-current border-solid px-3 mr-4 mt-2'>MySQL</span>
            </div>
          </div>
        </div>

        <hr />

        <div className='block flex items-center'>
          <div className='px-6'>
            <h3 className='text-3xl'>Looking for my Resume?</h3>
            <p className='mt-2 text-1-color'>Get it here.</p>
            <div className='mt-8'>
              <a className='' href='/resume.pdf'>
                <div className='px-6 py-4 button-color inline-flex flex-row items-center'>
                  <div className='mr-6'>Resume</div>
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

      </main >

      <Footer />
    </>
  )
}

export default ExperiencePage
