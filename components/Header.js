import Image from "next/image";
//next image
import Link from "next/link";
// components 
import Socials from '../components/Socials'
const Header = () => {
  return( 
    <header className="absolute w-full h-30 lg:h-24  flex items-center xl:px-0  ">
      
      <div className="container mx-auto ">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-y-0 my-2 ">
          {/* {logo } */}
          <Link href={'/'}>
            <Image 
            
            className="m-0 p-0"
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
