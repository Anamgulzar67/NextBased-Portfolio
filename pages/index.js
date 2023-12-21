//next images

//ocmponents
import ParticlesContainer from "../components/ParticlesContainer";
import ProjectsBtn from "../components/ProjectsBtn";
import Avatar from "../components/Avatar";

//framer motion
import { motion } from "framer-motion";

// varients
import { fadeIn } from "../variants";

const Home = () => {
  return (
    <div className="bg-primary/6 h-full ">
      {/* {text} */}
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
        <div className="text-center flex flex-col justify-center pt-20 xl:pt-40 xl:text-left h-full  container mx-auto ">
          {/* {title } */}
          <motion.h1 
           variants={fadeIn('down',0.2) }
           initial='hidden'
           animate='show'
           exit='hidden'
          className="text-xl xl:h2 ">
            Anam Gulzar <br />
            I am a <span className="text-accent ">Web Developer</span>
          </motion.h1>
          {/* {subtitle } */}
          <motion.p 
           variants={fadeIn('down',0.3) }
           initial='hidden'
           animate='show'
           exit='hidden'
            className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-2 xl:mb-10 ">
           Welcome to my web development portfolio, where innovation meets functionality, and creativity converges with code. With a passion for crafting digital experiences, I specialize in turning ideas into responsive and dynamic websites. I am dedicated to creating visually stunning and user-friendly websites that leave a lasting impression.
          </motion.p>
          {/* {btn } */}
          <div className='flex justify-center xl:hidden relative'>
            <ProjectsBtn />
          </div>
          <motion.div
           variants={fadeIn('down',0.4) }
           initial='hidden'
           animate='show'
           exit='hidden'
           className="hidden xl:flex">
            <ProjectsBtn/>
          </motion.div>
        </div>
      </div>
      {/* image  */}
      <div className="w-[1200px] h-full absolute right-0 bottom-0">
       {/* {bg img } */}
       <div className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat  w-full h-[100%] absolute mix-blend-color-dodge translate-z-0 opacity-30"> </div>

       {/* {particles } */}
        <ParticlesContainer/>
       {/* {avater img } */}
       <motion.div
       variants={fadeIn('up',0.9) }
       initial='hidden'
       animate='show'
       exit='hidden'
       transition={{duration: 4,ease: 'easeInOut'}}
       className="w-full h-full max-w-[737px] max-h-[730px] absolute -bottom-32 lg:bottom-0 lg:right-[8%] ">
       <Avatar/>
       </motion.div>
      </div>
    </div>
  );
};

export default Home;
