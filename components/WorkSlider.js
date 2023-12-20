

// data

const workSlider = {
  slides: [
    {
      images: [
        {
          title: "Portfolio",
          path: "/thumb1.jpg",
          link:'https://next-based-portfolio.vercel.app/'
        
        },
        {
          title: "Next.js-todo",
          path: "/thumb1.jpg",
          link:'https://tuu-duu-app.netlify.app'
        
        },
        {
          title: "Expense tracker",
          path: "/thumb2.jpg",
          link:'https://axpenstracker.netlify.app/'
        },
        {
          title: "Dice Game",
          path: "/thumb3.jpg",
          link:'https://dize-gamee.netlify.app/'
        },
        
      ],
    },
    {
      images: [
        {
          title: "Next Routings",
          path: "/thumb4.jpg",
          link:'https://next-session-8-oct-one.vercel.app/'
        },
        {
          title: "GitHub API",
          path: "/thumb4.jpg",
          link:'https://githubb-api.netlify.app/'
        },
        {
          title: "title",
          path: "/thumb1.jpg",
        },
        {
          title: "title",
          path: "/thumb2.jpg",
        },
        
      ],
    },
  ],
};

// import swipper react compponen
import { Swiper, SwiperSlide } from "swiper/react";
//import swiper styllws
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

//import requires modules

import { Pagination } from "swiper";

//icons
import { BsArrowRight } from "react-icons/bs";
//  next image

import Image from "next/image";
const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="h-[280px] sm:h-[480px] mt-0 lg:mt-20 "
    >
      {workSlider.slides.map((slides, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-2 grid-row-2 h-40 lg:h-80  mt-0 lg:mt-14 gap-4 ">
              {slides.images.map((image, index) => {
                return (
                  <div
                    className="relative rounded-lg overflow-hidden flex items-center justify-center group "
                    key={index}
                  >
                    <div className="flex items-center justify-center relative overflow-hidden group">

                      {/* imaeg */}
                      <Image
                        src={image.path}
                        width={500}
                        height={300}
                        alt=" "
                      />
                      

                      
                      {/* overly gradient */}
                      <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#eB3Bcc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"></div>
                      {/* title */}
                      <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 translate-all duration-300">
                        <div className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]">
                          {/* title1 */}
                          <div className="delay-100 ">{image.title}</div>
                          {/* title2 */}

                          <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                            PROJECT
                          </div>

                          
                            <div className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200">
                              <a href={image.link}> 
                              
                              <BsArrowRight />
                              </a>
                            </div>
                          

                          

                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkSlider;
