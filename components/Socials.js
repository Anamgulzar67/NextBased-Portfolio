import Link from "next/link";
//icons
import {RiInstagramLine,RiFacebookBoxLine,RiMailAddLine,RiGithubLine,RiLinkedinLine,RiWhatsappLine} from 'react-icons/ri'
const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      <Link 
      href={'https://github.com/Anamgulzar67'}
      className="hover:text-accent transition-all duration-300">
        <RiGithubLine/>
      </Link>
      <Link 
      href={'https://www.instagram.com/'}
      className="hover:text-accent transition-all duration-300">
        <RiInstagramLine/>
      </Link><Link 
      href={'https://www.linkedin.com/in/anam-gulzar-techie/'}
      className="hover:text-accent transition-all duration-300">
        <RiLinkedinLine/>
      </Link><Link 
      href={'mailto:anamgulzar67@gmail.com'}
      className="hover:text-accent transition-all duration-300">
        <RiMailAddLine/>
      </Link>
      <Link 
      href={'https://www.facebook.com/'}
      className="hover:text-accent transition-all duration-300">
        <RiFacebookBoxLine/>
      </Link>
    </div>

    )
    
};

export default Socials;
