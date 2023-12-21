import Image from "next/image";
//next image
import Link from "next/link";
// components 
import Socials from '../components/Socials'


const Header = () => {
  return( 
    <header className="absolute z-30 w-full h-20  flex items-center px-16 xl:px-0 xl:h-[90px] ">
      
      <div className="container mx-auto ">
        <div className="flex flex-col mt-4 lg:flex-row justify-between items-center gap-y-0 my-2 ">
          {/* {logo } */}
          <Link href={'/'}>
            <Image 
            
            className="mt-0 p-0"
            src={'/o2.png'} 
            width={100} 
            height={45} 
            alt='' 
            priority={true}
            />
            </Link>
            {/* {socials} */}
            <Socials/>
        </div>
      </div>
    </header>

  )
};

export default Header;
