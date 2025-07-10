
import { Socials } from '@/constants';
import Image from 'next/image'
import React from 'react'

export const Navbar = () => {
  return (
    <div className = 'w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61 bg-[#03001417] backdrop-blur-md z-50 px-10]'>
        <div className='w-full h-full flex flex-row items-center justify-between m-auto px-[10px]'>
            <a href = "#about-me" className='h-auto w-auto flex flex-row items-center mr-25'>
            <Image 
            src = "/code.png"
            alt = "logo"
            width ={35}
            height = {35}
            className = "cursor-pointer hover:animate-slowspin text-white"
            />

                <span className = "font-bold ml-[10px] hidden md:block text-gray-300">
                Dev<span className='text-[#008000]'>.</span>
                </span>
            </a>

                <div className='w-[500px] h-full flex flex-row items-center justify-between md:mr-20'>
                    <div className='flex items-center justify-between w-full h-auto bordor border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200'>
                    <a href='#about-me' className='cursor-pointer'>About me</a>
                    <a href='#skills' className='cursor-pointer'>skills</a>
                    <a href='#projects' className='cursor-pointer'>Projects</a>
                    </div>
                </div>
                <div className='flex flex-row gap-5 mr-5 z-50 relative'>
                    <>
                    {Socials.map((social) => (
                        <a key={social.name} href={social.href} target="_blank" rel="noopener noreferrer">
                        <Image
                            src = {social.src}
                            alt = {social.name}
                            key = {social.name}
                            width={24}
                            height={24}
                        />
                        </a>
                    ))}
                    </>
                </div>
            </div>
        </div>
  )
};

export default Navbar;
