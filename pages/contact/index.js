//components
// import Circles from '/components/Circles'

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
 //icons
import {BsArrowRight} from 'react-icons/bs'
//framer
import {motion} from 'framer-motion'

//variants
import {fadeIn} from '../../variants'
// import { Resend } from 'resend'

  const Contact = () => {
  
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_fdrgmh9', 'template_w147r1i', form.current, 'nRFtYhj82eSX4xq3L')
      .then((result) => {
          console.log(result.text);
          console.log("messgae sent")
      }, (error) => {
          console.log(error.text);
      });
    
    

  }
  return (
  <div className='h-full bg-primary/30'>
  <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
    {/* text form */}
    <div className='flex flex-col w-full max-w-[700px] '>
      {/* text */}
      <motion.h2
      variants={fadeIn('right',0.2)}
      initial='hidden'
      animate='show'
      exit='hidden'
      className='h2 text-center mt-20 xl:mt-20 mb-2 lg:mb-10'>
        Reach <span className='text-accent'>Out</span> 
      </motion.h2>
      {/* form */}
      <motion.form
      ref={form}
       onSubmit={sendEmail}
      
      variants={fadeIn('left',0.4 )}
      initial='hidden'
      animate='show'
      exit='hidden'
      className='flex-1 flex flex-col gap-6 w-full mx-auto ' >
        {/* group */}
        <div className='flex gap-x-6 w-full'>
          <input type="text" placeholder='Name' className='input' name="to_name"/>
          <input type="text" placeholder='email' className='input' name="from_name" />
        </div>
          <input type="text" placeholder='subject' className='input' />
           <textarea  placeholder='message' name='message' className='textarea'></textarea>
           <button  className='btn rounded-full border border-white/50 max-w-[170px]
           px-8 transition-all duratopn-300 flex items-center justify-center overflow-hidden hover:border-accent group'>
            <span className='group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500'>talk</span>
            <BsArrowRight className='-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[25 px]'/>
           </button>
      </motion.form>
    </div>
  </div>
  </div>
  )
};

export default Contact;
