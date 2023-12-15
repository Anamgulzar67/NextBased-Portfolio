import Image from "next/image";

const Avatar = () => {
  return <div className="hidden xl:flex xl:max-w-none ">
    <Image 
    src={'/pp.webp'} 
    width={535} 
    height={300}
    alt=' '
    className="translate-z-0 w-full h-full lg:mt-28 lg:ml-20"/>
  </div>;
};

export default Avatar;
