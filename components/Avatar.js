import Image from "next/image";

const Avatar = () => {
  return <div className="hidden xl:flex xl:max-w-none ">
    <Image 
    src={'/pp.webp'} 
    width={735} 
    height={600}
    alt=' '
    className="translate-z-0 w-full h-full "/>
  </div>;
};

export default Avatar;
