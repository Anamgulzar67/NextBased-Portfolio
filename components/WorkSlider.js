// data
const workSlides = {
  slides: [
    {
      images: [
        {
          title: 'title',
          path: '/thumb1.jpg',
        },
        {
          title: 'title',
          path: '/thumb2.jpg',
        },
        {
          title: 'title',
          path: '/thumb3.jpg',
        },
        {
          title: 'title',
          path: '/thumb4.jpg',
        },
      ],
    },
    {
      images: [
        {
          title: 'title',
          path: '/thumb4.jpg',
        },
        {
          title: 'title',
          path: '/thumb1.jpg',
        },
        {
          title: 'title',
          path: '/thumb2.jpg',
        },
        {
          title: 'title',
          path: '/thumb3.jpg',
        },
      ],
    },
  ],
};

// import swipper react compponen 
import { Swiper , SwiperSlide } from 'swiper/react'
//import swiper styllws
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'

 //import requires modules

 import { Pagination} from 'swiper' 

 //icons 
 import { BsArrowRight } from 'react-icons/bs'
//  next image 

import Image from 'next/image';
 const WorkSlider = () => {
  return <Swiper 
  spaceBetween={10}
  pagination={{
    clickable:true,
  }}
  modules={[
    Pagination
  ]}
  className='h-[240px] sm:h-[340px] lg:mt-40'
  >
    {workSlides.slides.map((slide,index)=>{
        return(
        <SwiperSlide key={index}>
          <div className='grid grid-col-2 grid-row-2 gap-4 '>
            {slide.images.map((image,index)=>{
              return (
              <div className='relative rounded-lg overflow-hidden flex items-center justify-center group ' key={index }>
                <div className='flex items-center justify-center relative overflow-hidden group'>
                  {/* imaeg */}
                   <Image src={image.path} width={100} height={50} alt=""/>
                   {/* overly gradient */}
                   <div className='absolute inset-0 bg-gradient-to-l from-transparent via-[#eB3Bcc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700' ></div>
                   {/* title */}
                   <div className='absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 translate-all duration-300'>
                    <div className='flex items-center gap-x-2 text-[13px] tracking-[0.2em]'>
                      {/* title1 */}
                    <div className='delay-100'>LIVE</div>
                    {/* title2 */}
                    {/*     add in below classname */} 
                    <div className='translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150'>PROJECT</div>    
                    <div className='text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200  '><BsArrowRight/></div>

                    </div>

                   </div>
                </div>
              </div>
              )
            })}
          </div>
        </SwiperSlide>
        )
      })
    }
    </Swiper>;
};

export default WorkSlider;
