import React from 'react'

export default function Projects() {
  return (
    <div className=''>
      <h1>This is Projects</h1>
      <div className="grid md:grid-cols-2 sm:grid-cols-1">
        <div className="">

        </div>
        <div className="relative w-[600px] h-[400px]  bg-[url('/laptop1.jpeg')] bg-no-repeat bg-cover bg-center bg-white overflow-hidden">
          <div className="absolute  ">
            <iframe className='w-full h-full' src='https://hotel-project-gilt.vercel.app/' ></iframe>
          </div>
        </div>
      </div>
    </div>
  )
}
