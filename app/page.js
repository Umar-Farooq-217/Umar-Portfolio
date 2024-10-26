import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <div className="bg-[url('/bf.webp')] bg-center bg-no-repeat bg-cover w-full h-full" ></div>
      <div className=" ">
        <Image src='/uf.svg' height={500} className="text-black rounded-full bg-black mix-blend-color-burn" width={500} alt="logo"/>
      </div>
    </div>
  );
}
