//components
import Circles from '/components/Circles'
 //icons
import {BsArrowRight} from 'react-icons/bs'
//framer
import {motion} from 'framer-motion'

//variants
import {fadeIn} from '../../variants'
// emailjs
import emailjs from 'emailjs-com';

const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'YOUR_SERVICE_ID',
      'YOUR_TEMPLATE_ID',
      e.target,
      'YOUR_USER_ID'
    )
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });

    // Clear the form after sending the email
    e.target.reset();
  };
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
      className='h2 text-center mt-96 xl:mt-28 mb-12'>
        Reach <span className='text-accent'>Out</span> 
      </motion.h2>
      {/* form */}
      <motion.form
      onSubmit={sendEmail}
      variants={fadeIn('left',0.4 )}
      initial='hidden'
      animate='show'
      exit='hidden'
      className='flex-1 flex flex-col gap-6 w-full mx-auto ' >
        {/* group */}
        <div className='flex gap-x-6 w-full'>
          <input type="text" placeholder='Name' className='input' />
          <input type="text" placeholder='email' className='input' />
        </div>
          <input type="text" placeholder='subject' className='input' />
           <textarea placeholder='message' className='textarea'></textarea>
           <button className='btn rounded-full border border-white/50 max-w-[170px]
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
