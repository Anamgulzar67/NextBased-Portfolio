import Image from "next/image";
//next image
import Link from "next/link";
// components
// import Socials from '../components/Socials'
import { RiGithubLine, RiLinkedinLine } from "react-icons/ri";

const Header = () => {
  return (
    <header className="w-full absolute z-10 px-16 xl:px-0">
      <div className="container mx-auto ">
        <div className="flex flex-col mt-4 lg:flex-row justify-between items-center gap-y-0 my-2 ">
          {/* {logo } */}
          <Link href={"/"}>
            <Image
              className="mt-0 p-0"
              src={"/o2.png"}
              width={100}
              height={45}
              alt=""
              priority={true}
            />
          </Link>
          {/* {socials} */}
          {/* <Socials/> */}
          <div className="flex items-center gap-4">
           
            <Link  href={"https://github.com/Anamgulzar67"}>
            <button className="flex items-center hover:text-accent transition-all duration-300 px-4 py-2 border-2 border-gray-300 hover:border-accent rounded-full"> Github<span className="ml-2 underline"> <RiGithubLine /></span></button>
            </Link>
            <Link  href={"https://www.linkedin.com/in/anam-gulzar-techie/"}>
            <button className="flex items-center hover:text-accent transition-all duration-300 px-4 py-2 border-2 border-gray-300 hover:border-accent rounded-full"> LinkedIn<span className="ml-2 underline"> <RiLinkedinLine /></span></button>
            </Link>

         
          
            
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
