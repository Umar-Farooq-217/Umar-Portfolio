import React from 'react'
import './../../globals.css'
export default function About({onClose}) {
  return (
    <div className='absolute top-10 left-0 md:px-[10%] lg:px-[20%] bg-[url(/animate.jpeg)] w-full bg-cover bg-no-repeat bg-center z-30   text-white bg-[#000]  '>
      <button className='btn4 mt-3 ' onClick={onClose}>Close</button>
      <h1 className="text-5xl text-center font-bold "> Umar Farooq</h1>
    

    </div>
  )
}
