import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <nav className='w-full flex-center fixed top-0 z-50 border-b-2 border-black-200 bg-black py-7 text-white'>
      <div className='w-full flex-between mx-auto px-6 xs:px-8 sm:px-16'>
        <div className='flex-center gap-2'>
        
          <Image src='/logo-optimal.png' alt='logo' width={40} height={40} />
          <h1 className='body-text text-gradient_blue-purple !font-bold'>
            Optimal App
          </h1>
        </div>
        <ul className='flex-center gap-x-3 max-md:hidden md:gap-x-10'>
          <li className='body-text !font-normal '>
          Optimization practices using Next.js
          </li>
        </ul>
       
      </div>
    </nav>
  );
};

export default Navbar;
