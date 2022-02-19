import React, { FC } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { OutboundLink } from 'gatsby-plugin-google-gtag'
import { Helmet } from 'react-helmet'
import { graphql, Link, useStaticQuery } from 'gatsby'
import { getSrc, StaticImage } from 'gatsby-plugin-image'
import { PageQuery } from '../types/page'

const ProjectsPage: FC = () => {
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
        <link rel='canonical' href='https://adambcomer.com/projects/' />

        <title>Projects | Adam Comer | Software Developer</title>
        <meta name='description' content='Things I built for fun to learn something new.' />

        <meta property='og:title' content='Projects | Adam Comer | Software Developer' />
        <meta property='og:description' content='Things I built for fun to learn something new.' />
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://adambcomer.com/projects/' />
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
      <main className='px-6 md:px-12 max-w-screen-2xl mx-auto mb-32'>
        <div className='mx-6 my-64 text-center'>
          <h1 className='md-display-large'>Projects</h1>
          <p className='md-headline-medium md-color-secondary mt-6'>My coding projects I've built for fun</p>
        </div>

        <div className='md-surface-2 rounded-[32px] p-6 md:p-12 max-w-screen-lg mx-auto'>
          <h2 className='md-display-small'>Linguistics Tree Solver</h2>

          <h3 className='md-title-small md-on-surface-variant mt-6'>Time</h3>
          <p className='md-body-large mt-2'>Dec 2020 - Present</p>

          <h3 className='md-title-small md-on-surface-variant mt-6'>About</h3>
          <p className='md-body-large mt-2'>This <OutboundLink href='https://adambcomer.com/lin-tree-solver/' className='md-link underline hover:md-on-primary-container'>Linguistics Tree Solver</OutboundLink> automatically builds linguistics syntax trees. After taking a syntax course at the University of Toronto, I wanted to make a tool that applied the theory we learned in class. Unlike the tree builders we used in class, this tool is able to parse an annotated sentence and display every tree that satisfies the syntax rules.</p>

          <h3 className='md-title-small md-on-surface-variant mt-6'>Tools and Technologies</h3>
          <div className='flex flex-wrap mt-2'>
            <span className='md-label-large !text-white md-bg-primary px-3 py-1.5 rounded-lg mr-4 mt-2'>Javascript</span>
            <span className='md-label-large !text-white md-bg-primary px-3 py-1.5 rounded-lg mr-4 mt-2'>React</span>
            <span className='md-label-large !text-white md-bg-primary px-3 py-1.5 rounded-lg mr-4 mt-2'>HTML</span>
            <span className='md-label-large !text-white md-bg-primary px-3 py-1.5 rounded-lg mr-4 mt-2'>CSS</span>
            <span className='md-label-large !text-white md-bg-primary px-3 py-1.5 rounded-lg mr-4 mt-2'>Canvas</span>
            <span className='md-label-large !text-white md-bg-primary px-3 py-1.5 rounded-lg mr-4 mt-2'>React</span>
            <span className='md-label-large !text-white md-bg-primary px-3 py-1.5 rounded-lg mr-4 mt-2'>Material UI</span>
          </div>
        </div>

        <div className='md-surface-2 rounded-[32px] p-6 md:p-12 max-w-screen-lg mx-auto mt-32'>
          <h2 className='md-display-small'>Sentiment</h2>

          <h3 className='md-title-small md-on-surface-variant mt-6'>Time</h3>
          <p className='md-body-large mt-2'>Aug 2018</p>

          <h3 className='md-title-small md-on-surface-variant mt-6'>About</h3>
          <p className='md-body-large mt-2'><OutboundLink href='https://www.devpost.com/software/knowtworthy-sentiment' className='md-link underline hover:md-on-primary-container'>Sentiment</OutboundLink> was a Hackathon project made at <OutboundLink href='https://hackthe6ix.com/' className='link-0-color hover:underline'>Hack The 6ix</OutboundLink>. The project’s goal was to tracks a meeting conversation and find its sentiment. Using the transcripts of the meeting and an open source linguistic analysis tool, we were able to successfully build the project in React and Node.js. After 36 hours of coding, we gave our presentation to the judges and won first place.</p>

          <h3 className='md-title-small md-on-surface-variant mt-6'>Tools and Technologies</h3>
          <div className='flex flex-wrap mt-2'>
            <span className='md-label-large !text-white md-bg-primary px-3 py-1.5 rounded-lg mr-4 mt-2'>Javascript</span>
            <span className='md-label-large !text-white md-bg-primary px-3 py-1.5 rounded-lg mr-4 mt-2'>React</span>
            <span className='md-label-large !text-white md-bg-primary px-3 py-1.5 rounded-lg mr-4 mt-2'>HTML</span>
            <span className='md-label-large !text-white md-bg-primary px-3 py-1.5 rounded-lg mr-4 mt-2'>CSS</span>
            <span className='md-label-large !text-white md-bg-primary px-3 py-1.5 rounded-lg mr-4 mt-2'>Node.js</span>
            <span className='md-label-large !text-white md-bg-primary px-3 py-1.5 rounded-lg mr-4 mt-2'>Python</span>
            <span className='md-label-large !text-white md-bg-primary px-3 py-1.5 rounded-lg mr-4 mt-2'>Google Speech-to-Text</span>
          </div>
        </div>

        <div className='md-surface-2 rounded-[32px] p-6 md:p-12 max-w-screen-lg mx-auto mt-32'>
          <h2 className='md-display-small'>AI Chatbot</h2>

          <h3 className='md-title-small md-on-surface-variant mt-6'>Time</h3>
          <p className='md-body-large mt-2'>Aug 2016 - Dec 2016</p>

          <h3 className='md-title-small md-on-surface-variant mt-6'>About</h3>
          <p className='md-body-large mt-2'>AI Chatbots have been around for a while but have been traditionally based on keywords. <OutboundLink href='https://github.com/adambcomer/Tensorflow-Seq2Seq-Dialogs' className='md-link underline hover:md-on-primary-container'>This project</OutboundLink> aimed to have the chatbot understand the sematic contents of the messages by processing the messages with a neural network. The neural network was a <OutboundLink href='https://google.github.io/seq2seq/' className='link-0-color hover:underline'>Seq2Seq model</OutboundLink>, the state of the art at the time, and was moderately successful at processing chat messages.</p>

          <h3 className='md-title-small md-on-surface-variant mt-6'>Tools and Technologies</h3>
          <div className='flex flex-wrap mt-2'>
            <span className='md-label-large !text-white md-bg-primary px-3 py-1.5 rounded-lg mr-4 mt-2'>Python</span>
            <span className='md-label-large !text-white md-bg-primary px-3 py-1.5 rounded-lg mr-4 mt-2'>Tensorflow</span>
            <span className='md-label-large !text-white md-bg-primary px-3 py-1.5 rounded-lg mr-4 mt-2'>Numpy</span>
          </div>
        </div>

        <div className='mt-64'>
          <h2 className='text-center md-display-large'>Blog</h2>
          <p className='m-2 text-center md-headline-small md-color-secondary'>Other projects, writings, and code</p>

          <div className='grid gap-6 grid-cols-1 lg:grid-cols-12 mt-8'>
            <Link to='/blog/install-gitlab-runner-kubernetes/' className='col-span-4'>
              <div className='md-surface-2 p-8 rounded-[32px] overflow-hidden h-full hover:md-surface-5'>
                <StaticImage className='-mt-8 -mx-8 aspect-video' src='../images/blog/post-1-cover.jpeg' alt='Adam Comer' />

                <p className='md-body-medium md-color-secondary mt-8'>Article</p>
                <h3 className='md-headline-medium font-medium line-clamp-2'>How to Install a GitLab Runner on Kubernetes</h3>
                <p className='md-body-large mt-4 line-clamp-3'>Learn how to install Gitlab CI/CD Runner on Kubernetes and grant access to the Docker Daemon to build containers.</p>
              </div>
            </Link>
            <Link to='/blog/simple-database/' className='col-span-4'>
              <div className='md-surface-2 p-8 rounded-[32px] overflow-hidden h-full hover:md-surface-5'>
                <StaticImage className='-mt-8 -mx-8 aspect-video' src='../images/blog/simple-database-motivation-design-cover.jpg' alt='Adam Comer' />

                <p className='md-body-medium md-color-secondary mt-8'>Article</p>
                <h3 className='md-headline-medium font-medium line-clamp-2'>Build a Simple Database</h3>
                <p className='md-body-large mt-4 line-clamp-3'>Introductory tutorial to designing and building a LSM-Tree based Key-Value Store like RocksDB.</p>
              </div>
            </Link>
            <Link to='/blog/chess-analysis/' className='col-span-4'>
              <div className='md-surface-2 p-8 rounded-[32px] overflow-hidden h-full hover:md-surface-5'>
                <StaticImage className='-mt-8 -mx-8 aspect-video' src='../images/blog/post-2-cover.jpg' alt='Adam Comer' />

                <p className='md-body-medium md-color-secondary mt-8'>Article</p>
                <h3 className='md-headline-medium font-medium line-clamp-2'>Relationship Between Chess Opening Knowledge and Player Rating</h3>
                <p className='md-body-large mt-4 line-clamp-3'>How does knowledge of Chess Openings relate to player rating? In this analysis, I investigate the use Book Openings and Master Games with a sample of 20,000 public Lichess Games.</p>
              </div>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}

export default ProjectsPage
