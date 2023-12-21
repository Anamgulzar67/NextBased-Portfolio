
// components 
// import ServiceSlider from '../../components/ServiceSlider'
import Bulb from '../../components/Bulb'
import Circles from "../../components/Circles"

// /framer motion
import {motion} from 'framer-motion'
import {fadeIn} from '../../variants'
import ServiceSlider from "../../components/ServiceSlider";
const Services = () => {
  return (

    <div className="h-full bg-primary/30 items-center">
    {/* <Circles/> */}
    <div className="container mx-auto">
      <div className="flex flex-col xl:flex-row gap-x-2">
        {/* tsxt */}
        <div className="text-center flex xl:w-[30vw]  flex-col lg:text-left mb-2 xl:mb-0">
          <motion.h2
          variants={fadeIn('up', 0.2)}
          initial='hidden'
          animate='show'
          exit='hidden' 
          className="h2 mt-28 md:mt-40 xl:mt-36">My Services 
          </motion.h2>
          <motion.p 
          variants={fadeIn('up', 0.4)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className="mb-2 max-w-[400px] mx-auto lg:mx-0">My main objective as software engineering is to develop methods and procedures for software development that can scale up for large systems and that can be used consistently to produce high-quality software at low cost and with a small cycle of time.</motion.p>
        </div>

        {/* slider */}
        <motion.div 
        variants={fadeIn('down', 0.6)}
        initial='hidden'
        animate='show'
        exit='hidden'
        className='w-full xl:max-w-[60%] '>

        <ServiceSlider/>
        </motion.div>
      </div>
    </div>
    <Bulb/>
  </div>
  )
  
};

export default Services;
