import Image from "next/image";
//next image
import Link from "next/link";
// components 
import Socials from '../components/Socials'
const Header = () => {
  return( 
    <header className="absolute mt-0 lg:mt-10  z-30 w-full flex items-center px-6 xl:px-0 xl:h-[90px]">
      
      <div className="container  mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-y-6 py-8">
          {/* {logo } */}
          <Link href={'/'}>
            <Image 
            
            className="p-0 "
            src={'/o2.png'} 
            width={220} 
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
