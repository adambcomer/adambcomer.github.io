import React, { FC } from 'react'
import Navbar from '../components/Navbar'
import '../styles/projects.css'
import Footer from '../components/Footer'
import { OutboundLink } from 'gatsby-plugin-google-gtag'
import { Link } from 'gatsby'
import { Helmet } from 'react-helmet'

const ProjectsPage: FC = () => {
  return (
    <>
      <Helmet htmlAttributes={{ lang: 'en' }}>
        <link rel='canonical' href='https://adambcomer.com/projects/' />

        <title>Projects | Adam Comer | Software Developer</title>
        <meta name='description' content='Things I built for fun to learn something new.' />

        <meta property='og:title' content='Adam Comer | Software Developer' />
        <meta property='og:description' content='Things I built for fun to learn something new.' />
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://adambcomer.com/projects/' />
        <meta property='og:image' content='https://adambcomer.com/portrait.png' />
        <meta property='og:image:width' content='720' />
        <meta property='og:image:height' content='720' />

        <script type='application/ld+json'>{`
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
                "https://stackoverflow.com/users/17834001/adambcomer",
                "https://knowtworthy.com/blog/author/adambcomer/"
            ]
          }
        `}
        </script>
      </Helmet>
      <Navbar />
      <main className='w-100'>
        <div className='mx-6 my-64'>
          <h1 className='text-6xl font-light'>Projects</h1>
          <p className='mt-6 text-lg text-1-color'>Things I built for fun to learn something new</p>
        </div>

        <hr />

        <div className='grid grid-cols-1 lg:grid-cols-5 px-6 py-16 gap-x-12'>
          <div className='hidden lg:block'>
            <p className='text-xl font-semibold'>Project 1</p>
          </div>
          <div className='lg:col-span-3'>
            <h2 className='text-3xl'>Linguistics Tree Solver</h2>

            <h3 className='text-sm text-1-color mt-4'>Time</h3>
            <p>Dec 2020 - Jan 2021</p>

            <h3 className='text-sm text-1-color mt-4'>About</h3>
            <p>This <OutboundLink href='https://adambcomer.com/lin-tree-solver/' className='link-0-color hover:underline'>Linguistics Tree Solver</OutboundLink> automatically builds linguistics syntax trees. After taking a syntax course at the University of Toronto, I wanted to make a tool that applied the theory we learned in class. Unlike the tree builders we used in class, this tool is able to parse an annotated sentence and display every tree that satisfies the syntax rules.</p>

            <h3 className='text-sm text-1-color mt-4'>Tools and Frameworks</h3>
            <div className='flex flex-wrap'>
              <span className='rounded-full border border-current border-solid px-3 mr-4 mt-2'>Javascript</span>
              <span className='rounded-full border border-current border-solid px-3 mr-4 mt-2'>React</span>
              <span className='rounded-full border border-current border-solid px-3 mr-4 mt-2'>HTML</span>
              <span className='rounded-full border border-current border-solid px-3 mr-4 mt-2'>CSS</span>
              <span className='rounded-full border border-current border-solid px-3 mr-4 mt-2'>Canvas</span>
              <span className='rounded-full border border-current border-solid px-3 mr-4 mt-2'>React</span>
              <span className='rounded-full border border-current border-solid px-3 mr-4 mt-2'>Material-UI</span>
            </div>

            <div className='mt-16'>
              <OutboundLink className='text-xl hover:underline arrow-link ml-6' href='https://github.com/adambcomer/lin-tree-solver'>Repository</OutboundLink>
            </div>
            <div className='mt-4'>
              <OutboundLink className='text-xl hover:underline arrow-link ml-6' href='https://adambcomer.com/lin-tree-solver/'>Demo</OutboundLink>
            </div>
          </div>
        </div>

        <hr />

        <div className='grid grid-cols-1 lg:grid-cols-5 px-6 py-16 gap-x-12'>
          <div className='hidden lg:block'>
            <p className='text-xl font-semibold'>Project 2</p>
          </div>
          <div className='lg:col-span-3'>
            <h2 className='text-3xl'>Sentiment</h2>

            <h3 className='text-sm text-1-color mt-4'>Time</h3>
            <p>Aug 2018</p>

            <h3 className='text-sm text-1-color mt-4'>About</h3>
            <p><OutboundLink href='https://www.devpost.com/software/knowtworthy-sentiment' className='link-0-color hover:underline'>Sentiment</OutboundLink> was a Hackathon project made at <OutboundLink href='https://hackthe6ix.com/' className='link-0-color hover:underline'>Hack The 6ix</OutboundLink>. The project’s goal was to tracks a meeting conversation and find its sentiment. Using the transcripts of the meeting and an open source linguistic analysis tool, we were able to successfully build the project in React and Node.js. After 36 hours of coding, we gave our presentation to the judges and won first place.</p>

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
              <OutboundLink className='text-xl hover:underline arrow-link ml-6' href='https://devpost.com/software/knowtworthy-sentiment'>Devpost</OutboundLink>
            </div>
          </div>
        </div>

        <hr />

        <div className='grid grid-cols-1 lg:grid-cols-5 px-6 py-16 gap-x-12'>
          <div className='hidden lg:block'>
            <p className='text-xl font-semibold'>Project 3</p>
          </div>
          <div className='lg:col-span-3'>
            <h2 className='text-3xl'>AI Chatbot</h2>

            <h3 className='text-sm text-1-color mt-4'>Time</h3>
            <p>Aug 2016 - Dec 2016</p>

            <h3 className='text-sm text-1-color mt-4'>About</h3>
            <p>AI Chatbots have been around for a while but have been traditionally based on keywords. <OutboundLink href='https://github.com/adambcomer/Tensorflow-Seq2Seq-Dialogs' className='link-0-color hover:underline'>This project</OutboundLink> aimed to have the chatbot understand the sematic contents of the messages by processing the messages with a neural network. The neural network was a <OutboundLink href='https://google.github.io/seq2seq/' className='link-0-color hover:underline'>Seq2Seq model</OutboundLink>, the state of the art at the time, and was moderately successful at processing chat messages.</p>

            <h3 className='text-sm text-1-color mt-4'>Tools and Frameworks</h3>
            <div className='flex flex-wrap'>
              <span className='rounded-full border border-current border-solid px-3 mr-4 mt-2'>Python</span>
              <span className='rounded-full border border-current border-solid px-3 mr-4 mt-2'>Tensorflow</span>
              <span className='rounded-full border border-current border-solid px-3 mr-4 mt-2'>Numpy</span>
            </div>

            <div className='mt-16'>
              <OutboundLink className='text-xl hover:underline arrow-link ml-6' href='https://github.com/adambcomer/Tensorflow-Seq2Seq-Dialogs'>Repository</OutboundLink>
            </div>
          </div>
        </div>

        <hr />

        <div className='grid grid-cols-1 lg:grid-cols-5 block px-6 py-16 gap-x-12'>
          <div>
            <h3 className='text-xl font-semibold'>Blog</h3>
            <p className='mt-2 lg:mt-4 text-sm text-1-color'>Each article is a little project in its own right</p>
          </div>

          <div className='mt-8 lg:mt-0 lg:col-span-2 relative h-64 lg:h-full'>
            <Link to='/blog/simple-database/'>
              <div className='p-8 h-full hover:underline ui-1-color'>
                <h4 className='text-4xl font-thin'>Build a Simple Database</h4>
                <svg className='absolute bottom-8 right-8 svg-fill' xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'>
                  <polygon points='18 6 16.57 7.393 24.15 15 4 15 4 17 24.15 17 16.57 24.573 18 26 28 16 18 6' />
                </svg>
              </div>
            </Link>
          </div>
          <div className='mt-8 lg:mt-0 lg:col-span-2 relative h-64 lg:h-full'>
            <Link to='/blog/install-gitlab-runner-kubernetes/'>
              <div className='p-8 h-full hover:underline ui-1-color'>
                <h4 className='text-4xl font-thin'>How to Install a GitLab Runner on Kubernetes</h4>
                <svg className='absolute bottom-8 right-8 svg-fill' xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'>
                  <polygon points='18 6 16.57 7.393 24.15 15 4 15 4 17 24.15 17 16.57 24.573 18 26 28 16 18 6' />
                </svg>
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
