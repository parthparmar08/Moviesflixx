import Image from 'next/image'
import React from 'react'

const Herosection = ({title, imageUrl}) => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 ' >
        <div className='font-extrabold text-2xl px-12 sm:flex sm:items-center py-5'>
            <h1 className='font-extrabold font-serif capitalize text-3xl'>{title}</h1>
        </div>
        <div className='p-4 sm:row-span-2 sm:flex sm:items-center'>
            <div>
              <Image src={imageUrl} width={200} height={300} className='w-screen' alt='no image' /> 
            </div>
        </div>
        <div className='px-12 py-5'>
            <p className='font-semibold text-xl pb-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia officiis dicta sequi temporibus nostrum quis soluta facere incidunt ea. Tempore officiis magnam voluptatem nihil non minima odit dolores quae tenetur.</p>
            <button className='bg-gray-900 text-white rounded-xl font-semibold hover:bg-gray-800 px-4 py-2'>Explore movies</button>
        </div>
    </div>
  )
}

export default Herosection
