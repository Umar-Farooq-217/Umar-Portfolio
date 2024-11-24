import React from 'react'
import './../../globals.css'
export default function About({ onClose }) {
  return (
    <div className='absolute top-10 left-1/2   border border-white-700  -translate-x-1/2   z-30   text-white bg-[#111] rounded-lg p-7'>
      <svg onClick={onClose} xmlns="http://www.w3.org/2000/svg" className='w-6 hover:scale-110' viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" fill='currentColor' /></svg>
      <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-5">
        <div className="pt-8">
          <h1 className="text-3xl  font-bold  "> Umar Farooq </h1>
          <p className='text-xl pt-2 text-justify'>I help bussiness owners and busy web developers to design and develop creative websites that fits their vision and attracts the visitors to stay forever. Technologies and tools that I use for create such awesome websites   </p>
        



          <div className="">
       
           

          </div>


        </div>
        <div className=""></div></div>



    </div>
  )
}
