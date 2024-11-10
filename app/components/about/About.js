import React from 'react'
import './../../globals.css'
export default function About({onClose}) {
  return (
    <div className='absolute top-10 left-0 md:px-[10%] lg:px-[20%] bg-[url(/animate.jpeg)] w-full bg-cover bg-no-repeat bg-center z-30   text-white bg-[#000]  '>
      <button className='btn4 mt-3 ' onClick={onClose}>Close</button>
      <h1 className="text-5xl text-center font-bold "> Umar Farooq</h1>
      <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-5">
      <div className="box   p-5">
        <h1 className="z-20 text-3xl font-bold text-center py-4">Matric</h1>
        <p className="z-20 text-xl font-bold text-balance"><span className='text-2xl'>Institute : </span>Govt High School 217 RB Uchkera Fsd</p>
        <p className="z-20 text-xl font-bold"><span className='text-2xl'>Year : </span> 2020</p>
        <p className="z-20 text-xl font-bold"><span className='text-2xl'>Marks : </span> 886</p>
      </div>
      <div className="box  p-5">
        <h1 className="z-20 text-3xl font-bold text-center py-4">F.Sc (Medical)</h1>
        <p className="z-20 text-xl font-bold text-balance"><span className='text-2xl'>Institute : </span>Govt M.C Kottwali   Higher Secondary School Allama Iqbal Road Fsd </p>
        <p className="z-20 text-xl font-bold"><span className='text-2xl'>Year : </span>2022</p>
        <p className="z-20 text-xl font-bold"><span className='text-2xl'>Marks : </span> 886</p>
      </div>

      <div className="box  p-5">
        <h1 className="z-20 text-3xl font-bold text-center py-4">Web & Mobile App Development</h1>
        <p className="z-20 text-xl font-bold">Duration : 1 Year 2022-2023</p>
        <p className="z-20 text-xl font-bold"><span className='text-2xl'> Institute : </span> SAYLANI MASS IT TRAINING PROGRAM</p>

      </div>
      <div className="box  p-5">
        <h1 className="z-20 text-3xl font-bold text-center py-4">FrameWork : React js + NextJs</h1>
        <p className="z-20 text-xl font-bold"><span className='text-2xl'>Database : </span> Mongodb + Firebase</p>
        <p className="z-20 text-xl font-bold"><span className='text-2xl'>CMS : </span> Contentful CMS + Sanity CMS</p>
        <p className="z-20 text-xl font-bold">Tailwind CSS</p>
      </div>
      </div>

    </div>
  )
}
