
import React from 'react';
import Spline from '@splinetool/react-spline';
import { ReactTyped } from 'react-typed';
import Experience from './asset/EXPERIENCE-WITH-STAND.png';
import Marguee from 'react-fast-marquee'

function About() {
  return (
    <div className="  px-4  max-w-screen-xl mx-auto" id="home">

      <main className='flex' >


        <div className=" relative z-20 flex items-center overflow-hidden  h-[100vh]  bg-white dark:bg-gray-800">
          <div className="container relative flex  mx-auto">
            <div className="relative z-20 flex flex-col sm:w-2/3 lg:w-2/5">

              <div className="flex  flex-col font-bold leading-none text-gray-800 uppercase font-bebas-neue sm:text-5xl dark:text-white">
                Hi, I'm Sathish Kumar Ravi
                <div className="animated-typing text-3xl  font-bold my-8">

                  <div className='text-left' > I'm a <ReactTyped
                    strings={[
                      "Product Designer",
                      "Graphic Designer",
                      "Video Editor",
                    ]}
                    typeSpeed={150}
                    backSpeed={200}
                    loop
                  /> </div>

                </div>

              </div>
              <p className="text-sm text-gray-700 sm:text-base dark:text-white">
                Dimension of reality that makes change possible and understandable. An indefinite and homogeneous environment in which natural events and human existence take place.
              </p>
              <div className="flex mt-8">
                {/* <a href="#" className="px-4 py-2 mr-4 text-white uppercase bg-pink-500 border-2 border-transparent rounded-lg text-md hover:bg-pink-400">
                    Get started
                </a>
                <a href="#" className="px-4 py-2 text-pink-500 uppercase bg-transparent border-2 border-pink-500 rounded-lg dark:text-white hover:bg-pink-500 hover:text-white text-md">
                    Read more
                </a> */}
              </div>
            </div>
            <div className="relative hidden sm:block sm:w-1/3 lg:w-3/5">

              <Spline className='relative'
                scene="https://prod.spline.design/xgyish8I4YzlWyWy/scene.splinecode"
              />
              <div className='absolute bottom-0 right-0 w-[200px] h-[80px] bg-white ' >  </div>
            </div>
          </div>
        </div>
      </main>



      <div>



      </div>

      <div className=" text-center font-bold leading-none text-gray-800 uppercase font-bebas-neue sm:text-1xl dark:text-white">
        EXPERIENCE WITH

        <img className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white" src={Experience} alt="Experience Stand" />


        <Marguee gradient speed={100} className=' sm:text-2xl ' >


          <div className='px-8' >
            WHITEBOARD
          </div>

          <div className='px-8'>
            REPORTS
          </div>

          <div className='px-8'>
            DESIGN SYSTEM
          </div>

          <div className='px-8'>
            UX RESEARCH
          </div>

          <div className='px-8'>
            COMPETITIVE ANALYSIS
          </div>

          <div className='px-8'>
            USER PERSONA
          </div>

          <div className='px-8'>
            PRODUCT DESIGN
          </div>


          <div className='px-8'>
            RESPONSIVE DESIGN
          </div>


          <div className='px-8' >
            BRANDING
          </div>

          <div className='px-8'>
            Design System
          </div>

          <div className='px-8'>
            TESTING
          </div>

          <div className='px-8'>
            USABILITY
          </div>



        </Marguee>

      </div>


    </div>


  );
}

export default About;