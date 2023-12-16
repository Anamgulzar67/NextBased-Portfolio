import Image from "next/image";

const Avatar = () => {
  return <div className="absolute hidden xl:flex xl:max-w-none ">
    <Image 
    src={'/pp.webp'} 
    width={535} 
    height={300}
    alt=' '
    className="translate-z-0 w-full h-full lg:mt-32 lg:ml-20"/>
  </div>;
};

export default Avatar;
