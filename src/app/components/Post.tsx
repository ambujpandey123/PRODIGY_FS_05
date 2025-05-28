"use client"
import { Heart, HeartIcon, HeartOffIcon, MessageCircleCode, Share } from 'lucide-react'
import Image from 'next/image'
import React, { useState } from 'react'
const sponcerImage = require("../../../public/rolex.png")
interface ItemType {
    username: string;
    description: string;
    tags: string[];
    images: string[];
  }
const MyPost:React.FC< {posts:ItemType[]}> = ({posts})=>{
  const username=posts[0].username
  const description=posts[0].description
  const image=[posts[0].images[0]??posts[0].images[1],posts[0].images[1]?? posts[0].images[0]]
  const tags=posts[0].tags
  let alltags="";
  tags.forEach(i=>alltags=alltags+" #"+i)
  // console.log(image[0]);
  console.log(image[1]??"sponcerImage");
  
  
  const [isliked,setLiked]=useState(false);
  return (
    <div>
      <div className='flex flex-col shadow-md  border border-gray-200 p-6 border-l items-center bg-gray-100 rounded-2xl mt-10'>
        <div className='w-full p-2'>
          <div id='photoButton' className='overflow-hidden flex gap-2 w-full   justify-between items-center px-8'>
            <div className='flex gap-3 items-center'>
              <img
                className=' object-cover h-15 w-15 rounded-full border-2 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 inline-block'
                src={image[0]}
                 width={100}
                 height={100}
                alt={'AP'}
              /> <h3 className='font-bold text-2xl'>{username} </h3>
            </div>
            <div>
              <span className='font-medium text-xl px-3 py-1 bg-blue-300 hover:bg-blue-400 rounded-xl cursor-pointer'>Follow+</span>
            </div>
          </div>
          <div id="message " className='px-10 py-1 text-xl font-sans'>
           {description}  <span className='text-blue-500 cursor-pointer'>{alltags}</span>
          </div>
        </div>
        <div className='rounded-xl overflow-hidden w-full p-10 '>
          
          <img
            className='object-cover w-full h-auto rounded-2xl'
            src={image[1]}
            alt={'Ads Section'}
            width={300}
            height={300}
          />
        </div>
        <div className='flex items-center  gap-20 w-full p-2 px-20'>
           <div className=' flex flex-col items-center cursor-pointer hover:text-gray-500 ' onClick={()=>setLiked(!isliked)}>
           {!isliked? <Heart size={40}/>:
           <svg width="40px" height="40px" viewBox="0 0 16.00 16.00" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#000000" strokeWidth="0.048"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M1.24264 8.24264L8 15L14.7574 8.24264C15.553 7.44699 16 6.36786 16 5.24264V5.05234C16 2.8143 14.1857 1 11.9477 1C10.7166 1 9.55233 1.55959 8.78331 2.52086L8 3.5L7.21669 2.52086C6.44767 1.55959 5.28338 1 4.05234 1C1.8143 1 0 2.8143 0 5.05234V5.24264C0 6.36786 0.44699 7.44699 1.24264 8.24264Z" fill="#f00505"></path> </g></svg>
           }
           <p>1k</p>
           </div>
           <div className=' flex flex-col items-center cursor-pointer hover:text-gray-500 '><MessageCircleCode size={40}/>
            <p>1k</p>
           </div>
           <div className=' flex flex-col items-center cursor-pointer hover:text-gray-500 '><Share size={40}/>
            <p>1k</p>
           </div>
        </div>
       </div>
    </div>
  )
}

export default MyPost;
