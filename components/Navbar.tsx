import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='w-full flex-center fixed top-0 z-50 border-b-2 border-black-200 bg-black-100 py-7 text-white'>
      <div className='max-w-screen-2xl w-full flex-between mx-auto px-6 xs:px-8 sm:px-16'>
          <Link href={"/"}>
            <Image src="/logo-optimal.svg" alt='logo' width={55} height={40}/>
            <Image className='block md:hidden' src="/hamburger-menu.svg" alt='menu' width={30} height={30}/>
          </Link>
          <ul className='flex-center gap-x-3 max-md:hidden md:gap-x-10'>
                <li className='body-text text-gradient_blue-purple !font-bold '>
                  <Link href="http://ec2-54-171-198-8.eu-west-1.compute.amazonaws.com/">Hotel Miranda App</Link>
                </li>
                <li className='body-text !font-normal '>
                  <Link href="https://www.uavatars.io/">Utopia Avatars</Link>
                </li>
          </ul>
      </div>
    </nav>
  )
}

export default Navbar
