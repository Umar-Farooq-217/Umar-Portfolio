import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <div className="bg"></div>
      <div className="">
        <Image src='/Unititled.svg' height={50} width={50} alt="logo"/>
      </div>
    </div>
  );
}
