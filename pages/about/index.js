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
  FaBiking
  
  
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
        title: " 3rd position Qirat ,Multan-regiuon-Multan",
        stage: "2013",
      },{
        title: "2nd position in debates -Multan-regiuon-Multan",
        stage: "2013",
      },{
        title: "First position in sketching -Media Society ,UO",
        stage: "2019",
      },{
        title: "Efficient working of writing columns in newspaper -Media Society ,UO",
        stage: "2019",
      },{
        title: "2nd Inter-school debates,FG School,Okara Cantt",
        stage: "2013",
      },{
        title: "Active member of Environmental Watch Society -EWS ,UO",
        stage: "2018...2019",
      },
    ],
  },
  {
    title: "experience",
    info: [
      {
        title: "I have Experience of one semester as a teacher assistant on C++ - University of Okara",
        stage: "2018",
      },
      {
        title: "FrontEnd Developer - The Knowledge school system,UMT",
        stage: "2021 - 2023",
      },
      {
        title: "Web Developement - DK recruitment",
        stage: "2023",
      },
    ],
  },
  {
    title: "credentials",
    info: [
      {
        title: "BSIT- University Of Okara",
        stage: "2017-2021",
      },
      {
        title: "ICS- F.G degree college,Okara Cantt",
        stage: "2015-2017",
      },
      {
        title: "Metric-F.G Public School ,Okara Cantt",
        stage: "2013",
      },
    ],
  },
  {
    title: "Inteterest",
    info: [
      {
        title: "Coding",
        icons:[
          <FaLaptop key={"FaLaoptop"}/>
        ]
       
      },
      {
        title: "Bike riding",
        icons:[
          <FaBiking key={"FaBiking"}/>
        ]
        
      },
      {
        title: "Photography",
        icons:[
          <FaCamera key={"FaCamera"}/>
        ]
      },{
        title: "Spread Positivity",
        
      },{
        title: "Cooking",
        
      },{
        title: "Public dealing",
        
      },
    ],
  },
];

//components
import Avatar from "../../components/Avatar";
// import Circles from "../../components/Circles";

//framer motion
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const About = () => {
  const [index, setIndex] = useState(0);
  return (
    <div className="h-full bg-primary/30 py-28 text-center xl:text-left">
      {/* <Circles /> */}
      {/* {avatar img } */}
      <motion.div
        variants={fadeIn("right ,0.2")}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[500px]"
      >
        <Avatar />
      </motion.div>

      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row  ">
        {/* texxt */}
        <div className=" flex-1 flex flex-col justify-center lg:mt-20">
          <motion.h2
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="text-3xl lg:h2 "
          >
            Intro<span className="text-accent ">duction</span>
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="lg:max-w-[500px] lg:mx-auto mt-4 md:mb-0 xl:mx-0  xl:mb-12 xl:px-0"
          >
           From front-end design to back-end development,my goal is to deliver seamless, intuitive,and performance-driven web solutions.Let see my introduction in detail
          </motion.p>
        </div>
        {/* info */}
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
         className="flex flex-col w-full xl:max-w-[60%] h-[480px]">
          <div
            className="flex mt-8 lg:mt-24 gap-x-4 xl:gap-x-4 mx-auto xl:mx-0 mb-4"
          >
            {aboutData.map((item, itemIndex) => {
              return (
                <div
                // variants={fadeIn("left", 0.4)}
                // initial="hidden"
                // animate="show"
                // exit="hidden"
                  key={itemIndex}
                  className={`${
                    index === itemIndex &&
                    "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                  } cursor-pointer capitalize xl:text-xl relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                  onClick={() => setIndex(itemIndex)}
                >
                  {item.title}
                </div>
              );
            })}
          </div>
          <div className=" py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div
                  // variants={fadeIn("left", 0.4)}
                  // initial="hidden"
                  // animate="show"
                  // exit="hidden"
                  key={itemIndex}
                  className=" flex md:flex-row max-w-max gap-x-2 items-center text-white/50"
                  >
                  {/* {title } */}
                  <div
                  //  variants={fadeIn("left", 0.4)}
                  //  initial="hidden"
                  //  animate="show"
                  //  exit="hidden"
                  className="font-light mb-2  md:mb-0">{item.title}</div>
                  <div className="hidden md:flex ">--</div>
                  <div>{item.stage}</div>
                  <div className="flex flex-row  gap-x-4">
                    {/* icons */}
                    {item.icons?.map((icon, itemIndex) => {
                      return (<div key={itemIndex} className="text-xl lg:text-2xl text-white">{icon}</div>)   
                    })}
                  </div>
                </div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
