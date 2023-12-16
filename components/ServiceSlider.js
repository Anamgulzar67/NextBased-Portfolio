// import swipper react compponen 
import { Swiper , SwiperSlide } from 'swiper/react'
//import swiper styllws
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'

//icons
import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowTopRight,

 } from "react-icons/rx";

 //import requires modules

 import { FreeMode, Pagination} from 'swiper' 

 //service data
const serviceData = [
  
  {
    icon: <RxDesktop />,
    title: 'Web Development',
    description: 'With latest technologies of web developemnt like react and next.js'
  },
  {
    icon: <RxPencil2 />,
    title: 'Designing',
    description: 'With graphics technologies like photoshop and canva',
  },
  {
    icon: <RxReader />,
    title: 'Team Lead',
    description: 'Management,time utilization,performance etc',
  },{
    icon: <RxReader />,
    title: 'Instructor',
    description: 'Teaching Assistant ',
  }
];
 const ServiceSlider = () => {
  return <Swiper breakpoints={{
    320:{
      slidesPerView:1,
      spaceBetween:15
    },
    640:{
      slidesPerView:3,
      spaceBetween:15
    },
  }}
  freeMode={true}
  pagination={{
    clickable:true
  }}
  modules={[
    FreeMode,Pagination
  ]}
  className='h-[240px] sm:h-[340px] lg:mt-40'
  >
    {
      serviceData.map((item,index)=>{
        return(

        <SwiperSlide key={index}>
          <div className='bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-2 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15] transition-all duration-300'>
           {/* icon */}
           <div className='text-4xl text-accent mb-4'>{item.icon}</div>
           {/* title */}
           <div className='mb-8'>
            <div className='mb-2 text-lg'>{item.title}</div>
            <p className='max-w-[300px] leading-normal '>{item.description}</p>
           </div>
           {/* arrow */}
           <div className='text-3xl'>
            <RxArrowTopRight className='group-hover:rotate-45 group-hover:text-accent transition-all duration-300'/>
           </div>
          </div>
        </SwiperSlide>
        )
      })
    }
    </Swiper>;
};

export default ServiceSlider;
