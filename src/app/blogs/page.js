
import Link from "next/link";
import React from "react";


export const revalidate = 60
export const dynamicParams = true

const Blogs =async  () => {
  let news = await fetch(`http://localhost:3000/api/blogs`);
  news = await news.json();


  return ( 
  <>
    <div className='flex items-center justify-center'>Blogs</div>
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8  gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    {news.map((data) => (
        <Link
          href={`/blogs/${data.id}`}
          key={data.id}
          className="border m-2 rounded p-4 flex"
        >
               <div className="ml-2">
            <h1 className="font-bold">{data?.title}</h1>
            <h1 className="my-2">{data?.description}</h1>
            <h1 className="my-2">{data?.desc}</h1>
          </div>
        </Link>
      ))}

  
   </div>
   </>
  )

    }
export default Blogs