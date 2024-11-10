import React from 'react'
import './../../globals.css'
export default function About({onClose}) {
  return (
    <div className='absolute top-10 left-0  border-[4px] border-red-400 text-white bg-[#000]  '>
      <button className='btn4' onClick={onClose}>Close</button>
      <h1 className="text-5xl text-center font-bold ">About Umar Farooq</h1>
      <div className="flex">
      <div className="box  ">
        <h1 className="z-10">Matric</h1>
        <p className="z-10">2020</p>
        <p className="z-10">Marks : 886</p>
      </div>
      <div className="box">
        <h1 className="">F.Sc Medical</h1>
        <p className="">2022</p>
        <p className="">Marks : 886</p>
      </div>

      <div className="box">
        <h1 className="">Web & Mobile App Development</h1>
        <p className="">Duration 1 Year 2022-2023</p>
        <p className="">Institute : SAYLANI MASS IT PROGRAM</p>

      </div>
      <div className="box">
        <h1 className="">FrameWork : React jS</h1>
        <p className="">Database : Mongodb + Firebase</p>
        <p className="">CMS : Contentful cms + Sanity cms</p>
      </div>
      </div>

    </div>
  )
}