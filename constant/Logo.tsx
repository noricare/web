import Image from 'next/image';

interface ISize{
  width:number;
  height:number;
}


export const Logo = ({width, height}:ISize) => {
  return <Image src="/logo.png" alt="노리케어 Logo" width={width} height={height} />;
};
