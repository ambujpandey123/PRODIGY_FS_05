"use client"
import Image from 'next/image'
import React from 'react'
const sponcerImage = require("../../../public/rolex.png")

export default function Sponcer() {
  return (
    <div>
        <div className='flex flex-col shadow-md  border border-gray-200 p-6 border-l items-center hover:bg-gray-100 rounded-2xl'>
          <div className='flex items-center justify-between gap-0.5 w-full p-2'>
            <p className='text-xl hover:text-blue-400'>Sponsored</p>
            <p className='w-[20px]'><svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 15 15"><path d="M7.5,1.5a6,6,0,1,0,0,12a6,6,0,1,0,0,-12m0,1a5,5,0,1,1,0,10a5,5,0,1,1,0,-10ZM6.625,11l1.75,0l0,-4.5l-1.75,0ZM7.5,3.75a1,1,0,1,0,0,2a1,1,0,1,0,0,-2Z"></path></svg>  </p>
          </div>
          <div className='rounded-xl overflow-hidden  cursor-pointer'>
            <Image src={sponcerImage} alt={'Ads Section'} width={300} height={300} />
          </div>
          <div className='flex items-center justify-between gap-0.5 w-full p-2'>
            <p className='text-xl font-medium'>Rolex Watch</p>
            <a href='https://rolex.com' target='_blank' className='text-xs underline cursor-pointer'>rolex.com</a>
          </div>
            <p className='text-gray-600'>This is a sponcer page where you can find various sponcers.</p>
        </div>
    </div>
  )
}
