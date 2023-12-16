import Link from "next/link";
//icons
import {RiInstagramLine,RiFacebookBoxLine,RiGithubLine,RiLinkedinLine,} from 'react-icons/ri'
const Socials = () => {
  return (
    <div className="flex items-center mt-4 gap-x-5 lg:text-lg">
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
