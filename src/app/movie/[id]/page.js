import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const page = async ({params}) => {

  const id = params.id;
  const url= `https://netflix54.p.rapidapi.com/title/details/?ids=${id}&lang=en`
  
  const options = {
    method: 'GET',
    hostname: 'netflix54.p.rapidapi.com',
    headers: {
      'X-RapidAPI-Key': 'f39765d918mshb7ea0fa326fb0c4p14df92jsn8f2c13f74842',
      'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
    }
  };

  const res = await fetch(url, options);
  const data = await res.json();
  const maindata = data[0].details;
    
  return (
    <>
        <div className='p-4'>
          <div className='flex justify-center'>
          <Image src={maindata.backgroundImage.url} height={300} width={400}/>
          </div>
          <h1 className='text-xl text-center font-bold font-serif pt-2 pl-4'>{maindata.title}</h1>
          <p className='font-semibold font-serif ml-6 pb-2'>{maindata.synopsis}</p>
        </div>

    </>
  )
}

export default page
