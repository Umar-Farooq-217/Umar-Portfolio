'use client'
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";
import './globals.css'
import { useState } from "react";
export default function Home() {
  const [open,setOpen] = useState(true)
  return (
    <div className=" main text-white min-h-screen bg-fixed">
      <section className="max-w-[1500px] m-auto ">
      <div className="flex items-center justify-between p-6" >
        <div className="">
          <Image src='/letter-u.png' className="text-white" height={40} width={40} alt="logo" />
        </div>
        <div className="">
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-7 mr-1" viewBox="0 0 512 512"><path d="M64 112c-8.8 0-16 7.2-16 16l0 22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1l0-22.1c0-8.8-7.2-16-16-16L64 112zM48 212.2L48 384c0 8.8 7.2 16 16 16l384 0c8.8 0 16-7.2 16-16l0-171.8L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64l384 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64L0 128z"/></svg>
        </div>
      </div></section>
      <section className="max-w-[1500px] m-auto">

      <div className="flex flex-wrap justify-between px-6 pt-28 items-center ">
        <div className="basis-[500px]  py-5">
          <h1 className='text-5xl  font-bold font-serif'>Umar Farooq</h1>
          <p className="text-xl  font-bold font-sans mt-2">
            Mern Stack Developer
            </p>
        
<button className="btn4 flex items-center justify-center mt-3">About Me
  <span className="ml-1 mt-[2px]"><FaArrowRight /></span>
</button>

        </div>
        <div className="flex flex-col grow-1 gap-y-3 basis-[35px] ">
          

<svg className="w-7 hover:text-pink-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>


<svg className="w-7 hover:text-blue-700"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor"><path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"/></svg>


<svg className="w-7 hover:text-gray-800" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor"><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/></svg>


<svg className="w-7 hover:text-blue-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor"><path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z"/></svg>


<svg className="w-7 hover:text-blue-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" fill="currentColor"><path d="M248 8C111 8 0 119 0 256S111 504 248 504 496 393 496 256 385 8 248 8zM363 176.7c-3.7 39.2-19.9 134.4-28.1 178.3-3.5 18.6-10.3 24.8-16.9 25.4-14.4 1.3-25.3-9.5-39.3-18.7-21.8-14.3-34.2-23.2-55.3-37.2-24.5-16.1-8.6-25 5.3-39.5 3.7-3.8 67.1-61.5 68.3-66.7 .2-.7 .3-3.1-1.2-4.4s-3.6-.8-5.1-.5q-3.3 .7-104.6 69.1-14.8 10.2-26.9 9.9c-8.9-.2-25.9-5-38.6-9.1-15.5-5-27.9-7.7-26.8-16.3q.8-6.7 18.5-13.7 108.4-47.2 144.6-62.3c68.9-28.6 83.2-33.6 92.5-33.8 2.1 0 6.6 .5 9.6 2.9a10.5 10.5 0 0 1 3.5 6.7A43.8 43.8 0 0 1 363 176.7z"/></svg>

        </div>
      </div></section>
      <section className=" flex justify-center md:mt-32 sm:mt-20">
        <button className="btn4 flex items-center justify-center"> Latest Projects<span className="ml-1 mt-[2px]"><FaArrowRight /></span></button>
      </section>

      {
        open &&
         <div className="">
<p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum distinctio voluptatem incidunt inventore error nostrum labore, maxime neque, minus provident officia repellat libero aperiam quod officiis dolore iure deserunt culpa dignissimos? Doloribus quibusdam voluptatum quae recusandae in excepturi facere cumque quia dignissimos non quisquam suscipit voluptatem autem minima, veniam asperiores? Mollitia ratione debitis soluta deleniti molestias. Repellendus tempora aliquam, et dolore animi illo? Magnam earum alias exercitationem obcaecati adipisci recusandae, deserunt consequatur, dicta at voluptatem corrupti sequi fugiat ipsam hic vel debitis atque laborum commodi accusamus dolorem repellat ex quisquam laudantium. Deserunt quasi odio qui fugit assumenda praesentium nobis porro, sit consequuntur ducimus soluta blanditiis ratione officiis dolores accusamus fugiat nisi nesciunt molestias, veritatis repellendus. Minus dolorem esse tenetur cumque quo illum laborum similique, molestiae distinctio fugit est deserunt nobis soluta harum praesentium aut deleniti. Perspiciatis soluta saepe excepturi accusantium aliquam nostrum. Magni illo voluptatem iure perferendis aliquam similique porro sequi? Natus, nesciunt ipsum! Ipsam ipsum, rem nesciunt voluptates soluta fugiat blanditiis velit necessitatibus dolorem aut est! Quibusdam iste ad vel quia tempore, minus at dicta animi inventore earum sint aut odio error a impedit fugiat ipsum quae qui cupiditate. Enim aperiam, deserunt ullam, et aspernatur aliquid quam quaerat explicabo rerum temporibus saepe, earum dicta adipisci. Porro, neque voluptatum mollitia, dolorem sequi aut id recusandae velit laudantium ex nulla, quam atque eveniet. Officiis quos voluptates quibusdam dicta illo. Illum at, rem ad quisquam obcaecati perferendis facere perspiciatis nesciunt earum quo maiores dolorum aut mollitia quibusdam doloribus culpa cum sunt asperiores, neque dignissimos sed numquam. Eum perspiciatis id vitae totam, aliquid eius rem alias voluptas debitis quaerat quibusdam deserunt et possimus quasi voluptates dicta aliquam repellat ipsa a quo, nihil veritatis veniam natus dolores. Ipsam dolores officia dolor natus neque molestias voluptas distinctio, soluta eius consequuntur eligendi, tempore aut voluptatum, non incidunt cum provident maiores repellat. Officiis iste adipisci, ipsam atque numquam aliquid mollitia, dicta aspernatur architecto, tempore accusamus! Explicabo unde ea commodi sit perspiciatis necessitatibus nesciunt! Nihil ex nemo magni quae ab nesciunt? Dolores asperiores impedit cumque in dolor nobis? Aut commodi animi optio beatae eum. Aspernatur corporis enim quae suscipit quam praesentium nisi consequuntur, beatae, sunt minima quas iusto libero omnis consectetur, quidem sit commodi cupiditate numquam. Dolorum veniam inventore ab odit beatae. Magnam laboriosam quas quia consequuntur rem nesciunt mollitia repellendus autem neque sunt ducimus maiores, tempore magni fugit iste facere possimus enim officiis eius nobis odio sit provident ipsam unde! Ad libero, doloribus, unde fuga beatae incidunt, distinctio pariatur aut dicta aperiam quod a commodi esse id aliquid possimus dolor natus vel quia perspiciatis officiis error ipsa adipisci eos. Totam optio ullam rem sed ea inventore facilis sint. Excepturi molestiae ea numquam nemo. Iste dolores debitis perspiciatis qui tempore accusantium modi. Minus rem laborum soluta sit odio! A necessitatibus labore dignissimos ut saepe similique corporis alias explicabo sunt omnis, maxime, quos placeat ullam dicta eaque voluptas magnam nostrum minus porro iste odit temporibus reiciendis commodi illo. Esse earum distinctio facilis accusantium obcaecati assumenda molestias error necessitatibus molestiae quia veritatis, accusamus saepe suscipit iure sequi neque dolores debitis fugit. Quod amet fuga aliquam perspiciatis eos illum sint, odio, tempora hic laborum ipsam animi, fugiat sequi incidunt nihil ad laboriosam laudantium ipsum. Velit explicabo fugiat numquam! Nostrum, debitis! Officia maiores autem nam! In iure, molestias laborum officiis eius voluptatum ut quo praesentium fuga eligendi!
Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione deserunt aut nesciunt eveniet natus, voluptatibus amet numquam dolor est fuga, harum rerum porro quod placeat, veritatis odio eum ea ab neque. Quibusdam impedit ipsam, officia aperiam iusto officiis obcaecati sint vero eum, quod quaerat suscipit sed molestias provident ducimus maxime exercitationem inventore dolorem blanditiis?
</p>
        </div>
      }
     
    </div>
  );
}
