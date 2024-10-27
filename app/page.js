import Image from "next/image";
import './globals.css'
export default function Home() {
  return (
    <div className="bg-[#111] text-white">
      <div className="flex items-center justify-between p-6" >
        <div className="">
          <Image src='/letter-u.png' className="text-white" height={40} width={40} alt="logo" />
        </div>
        <div className="">
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 " viewBox="0 0 512 512"><path d="M64 112c-8.8 0-16 7.2-16 16l0 22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1l0-22.1c0-8.8-7.2-16-16-16L64 112zM48 212.2L48 384c0 8.8 7.2 16 16 16l384 0c8.8 0 16-7.2 16-16l0-171.8L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64l384 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64L0 128z"/></svg>
        </div>
      </div>

      <div className="">
        <div className="">
          <h1 className='text-5xl font-bold font-serif'>Umar Farooq</h1>
          <p className="text-xl font-bold font-sans">Mern Stack Developer</p>
        
<button className="btn">About Me</button>

        </div>
        <div className="">

        </div>
      </div>
     
    </div>
  );
}
