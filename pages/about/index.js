import React, { useState } from "react";

// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
  FaPython,
  FaBootstrap,
  FaGithub,
  FaQuran,
  FaLaptop,
  FaCamera,
  
} from "react-icons/fa";

import { SiNextdotjs, SiFramer } from "react-icons/si";

//   aboutdata
const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Web Development",
        icons: [
          <FaHtml5  key={"FaHtml5"}/>,
          <FaCss3  key={"FaCss3"}/>,
          <FaJs key={"FaJs"} />,
          <FaReact key={"FaReact"}/>,
          <SiNextdotjs key={"SiNextdotjs"}/>,
          <SiFramer key={"SiFramer"} />,
          <FaNodeJs  key={"FaNodeJs"}/>,
          <FaPython  key={"FaPython"}/>,
          <FaBootstrap  key={"FaBootstrap"}/>,
          <FaGithub  key={"FaGithub"}/>,
        ],
        
      },
      {
        title: "Hafiz-e-Quran",
        icons:[
          <FaQuran key={"FaQuran"}/>
        ]
      },{
        title: "Typing speed 30 wpm",
        icons:[
          <FaQuran key={"FaQuran"}/>
        ]
      },{
        title: "Ability to use Inpage.",
        icons:[
          <FaLaptop key={"FaLaptop"}/>
        ]
      },{
        title: "Art desinings",
        icons:[
          <FaCamera key={"FaCamera"}/>
        ]
      },{
        title: "Ability to communicate/deal with people.",
      },

    ],
  },
  {
    title: "awards",
    info: [
      {
        title: "Webby Awards - Honoree",
        stage: "2011 - 2012",
      },
      {
        title: "Adobe Design Achievement Awards - Finalist",
        stage: "2009 - 2010",
      },
    ],
  },
  {
    title: "experience",
    info: [
      {
        title: "UX/UI Designer - XYZ Company",
        stage: "2012 - 2023",
      },
      {
        title: "Web Developer - ABC Agency",
        stage: "2010 - 2012",
      },
      {
        title: "Intern - DEF Corporation",
        stage: "2008 - 2010",
      },
    ],
  },
  {
    title: "credentials",
    info: [
      {
        title: "Web Development - ABC University, LA, CA",
        stage: "2011",
      },
      {
        title: "Computer Science Diploma - AV Technical Institute",
        stage: "2009",
      },
      {
        title: "Certified Graphic Designer - ABC Institute, Los Angeles, CA",
        stage: "2006",
      },
    ],
  },
];

//components
import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";

//framer motion
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const About = () => {
  const [index, setIndex] = useState(0);
  console.log(index);
  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <Circles />
      {/* {avatar img } */}
      <motion.div
        variants={fadeIn("right ,0.2")}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[450px]"
      >
        <Avatar />
      </motion.div>

      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6 ">
        {/* texxt */}
        <div className=" flex-1 flex flex-col justify-center mt-48 lg:mt-2">
          <motion.h2
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2"
          >
            Academic <span className="text-accent ">Information</span>
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-[500px] mx-auto md:mb-0 xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
            modi, voluptatem voluptas iusto nam quaerat quasi perfe orem ipsum
            dolor sit amet consectetur adipisicing elit. Laborum modi,
            voluptatem voluptas iusto nam quaerat quasi perfe
          </motion.p>
        </div>
        {/* info */}
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
         className="flex flex-col w-full xl:max-w-[48%] h-[480px]">
          <div
            className="flex mt-10 md:mt-10 lg:mt-36 gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4"
          >
            {aboutData.map((item, itemIndex) => {
              return (
                <motion.div
                variants={fadeIn("left", 0.4)}
                initial="hidden"
                animate="show"
                exit="hidden"
                  key={itemIndex}
                  className={`${
                    index === itemIndex &&
                    "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                  } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                  onClick={() => setIndex(itemIndex)}
                >
                  {item.title}
                </motion.div>
              );
            })}
          </div>
          <div className=" py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <motion.div
                  variants={fadeIn("left", 0.4)}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  key={itemIndex}
                  className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/50"
                >
                  {/* {title } */}
                  <motion.div
                   variants={fadeIn("left", 0.4)}
                   initial="hidden"
                   animate="show"
                   exit="hidden"
                  className="font-light mb-2 md:mb-0">{item.title}</motion.div>
                  <div className="hidden md:flex ">--</div>
                  <div>{item.stage}</div>
                  <div className="flex gap-x-4">
                    {/* icons */}
                    {item.icons?.map((icons, itemIndex) => {
                      return <div key={itemIndex} className="text-2xl text-white">{icons}</div>
                    })}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
