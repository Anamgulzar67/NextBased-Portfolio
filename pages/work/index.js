
// components 

import Bulb from '../../components/Bulb'
import Circles from "../../components/Circles"

// /framer motion
import {motion} from 'framer-motion'
import {fadeIn} from '../../variants'
import WorkSlider from "../../components/WorkSlider";
const Work = () => {
  return (

    <div className="h-full bg-primary/30 py-8 items-center">
    <Circles/>
    <div className="container mx-auto">
      <div className="flex flex-col xl:flex-row gap-x-8">
        {/* tsxt */}
        <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0">
          <motion.h2
          variants={fadeIn('up', 0.2)}
          initial='hidden'
          animate='show'
          exit='hidden' 
          className="h2 mt-32 md:mt-20 xl:mt-36">My Work 
          </motion.h2>
          <motion.p 
          variants={fadeIn('up', 0.4)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className="mb-4 max-w-[400px] mx-auto lg:mx-0">Loack at some small projects as showcase for my skills . I am excited to continue contributing my skills and expertise in large projects and am proud to showcase my journey in this portfolio</motion.p>
        </div>

        {/* slider */}
        <motion.div 
        variants={fadeIn('down', 0.6)}
        initial='hidden'
        animate='show'
        exit='hidden'
        className='w-full  xl:max-w-[56%] '>
        <WorkSlider/>

        </motion.div>
      </div>
    </div>
    <Bulb/>
  </div>
  )
  
};

export default Work;
