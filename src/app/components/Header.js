import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Head from 'next/head';
import Script from 'next/script';

const Header = () => {
  return (
    <div className=' bg-gray-200 shadow-xl shadow-stone-300'>
      <div className='flex justify-between p-6'>
        <div>
        <Link href='/'>
            <Image src='/logo.jpg' alt='No logo' width={120} height={100}/>
        </Link>
        </div>
        <div>
          <div className='navbar-toggler sm:hidden focus:ring-2 focus:ring-inset focus:ring-white'>
            <Image src='/hamburger.png'  width={30} height={30} alt='no image'/>
          </div>
          <div>
               <ul className='hidden sm:flex items-center gap-x-4 text-xl pr-20'>
                 <li><Link className='hover:text-red-500' href='/'>Home</Link></li>
                 <li><Link className='hover:text-red-500' href='/movie'>Movies</Link></li>
                 <li><Link className='hover:text-red-500' href='/about'>About</Link></li>
                 <li><Link className='hover:text-red-500' href='/contact'>Contact Us</Link></li>
               </ul>     
          </div> 
        </div>
      </div>
      <div className='sm:hidden border-t-2 border-stone-700 bg-gray-2 hidden' id="mobile-menu">
              <ul className='text-xl pl-10 gap-y-6 p-3'>
                 <li><Link className='hover:text-red-500 pb-2' href='/'>Home</Link></li>
                 <li><Link className='hover:text-red-500 pb-2' href='/movie'>Movies</Link></li>
                 <li><Link className='hover:text-red-500 pb-2' href='/about'>About</Link></li>
                 <li><Link className='hover:text-red-500 pb-2' href='/contact'>Contact Us</Link></li>
               </ul>   
      </div>
        <Script id="my-script" dangerouslySetInnerHTML={{__html: `
        const navbarToggler = document.querySelector('.navbar-toggler');
        const mobileMenu = document.querySelector('#mobile-menu');

        navbarToggler.addEventListener('click',() => {
        console.log('click');
        navbarToggler.classList.toggle('active');
        mobileMenu.classList.toggle('hidden');
    });
      `}} />

    </div>
  )
};

export default Header
