
import React from 'react'

const Blogs =async  () => {
const getData = async()=>{
    let api =await fetch("https://dummyjson.com/users");
    api = await api.json()
   
    return api

}

  return ( 
  <>
    <div className='flex items-center justify-center'>Blogs</div>
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8  gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
   

   {/* {api?.data.map((data)=>(
    <h1>{data.users.firstName}</h1>
   ))}
     */}
   </div>
   </>
  )
}

export default Blogs