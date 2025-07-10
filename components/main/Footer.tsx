import React from 'react'
import {
    RxGithubLogo,
} from 'react-icons/rx'

import { FaFigma } from "react-icons/fa";
import { FaCodepen } from "react-icons/fa";
import { FaStackOverflow } from "react-icons/fa";
import { TiSocialLinkedin } from "react-icons/ti";
import { SiLeetcode } from "react-icons/si";

const Footer = () => {
    return (
        <footer>
        <div className='w-full h-full bg-transparent text-gray-200 shadow-lg p-[30px]'>
                <div className='w-full flex flex-col items-center justify-center m-auto'>
                    <div className='w-full h-full flex flex-row items-center justify-around flex-wrap'>

                        <div className='min-w-[200px] h-auto flex flex-col items-center justify-start'>
                            <div className='font-bold text-[16px] text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500'>Community</div>
                            <a href= 'https://www.figma.com/@shashwatkaundal' target="_blank" rel="noopener noreferrer" className='flex flex-row items-center my-[15px] cursor-pointer z-50 relative'>
                                <FaFigma />
                                <span className='flex-[15px] ml-[6px]'>Figma</span>
                            </a>
                            <a href= 'https://leetcode.com/u/Shashwat1801/' target="_blank" rel="noopener noreferrer" className='flex flex-row items-center my-[15px] cursor-pointer z-50 relative'>
                                <SiLeetcode />
                                <span className='flex-[15px] ml-[6px]'>Leetcode</span>
                            </a>
                            <a href= 'https://stackoverflow.com/users/26318026/shashwat' target="_blank" rel="noopener noreferrer" className='flex flex-row items-center my-[15px] cursor-pointer z-50 relative'>
                                <FaStackOverflow />
                                <span className='flex-[15px] ml-[6px]'>Stackoverflow</span>
                            </a>

                        </div>


                             <div className='min-w-[200px] h-auto flex flex-col items-center justify-start'>
                            <div className='font-bold text-[16px] text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500'>Social</div>
                            <a href= 'https://github.com/shashwat1801' target="_blank" rel="noopener noreferrer" className='flex flex-row items-center my-[15px] cursor-pointer z-50 relative'>
                                 <RxGithubLogo />
                              <span className="ml-[6px]">GitHub</span>
                            </a>
                                <a href= 'https://codepen.io/shashwat1801' target="_blank" rel="noopener noreferrer" className='flex flex-row items-center my-[15px] cursor-pointer z-50 relative'>
                                <FaCodepen />
                                <span className='flex-[15px] ml-[6px]'>Codepen</span>
                            </a>
                            <a href= 'https://www.linkedin.com/in/shashwat-kaundal-32583130b/' target="_blank" rel="noopener noreferrer" className='flex flex-row items-center my-[15px] cursor-pointer z-50 relative'>
                               <TiSocialLinkedin />
                                <span className='flex-[15px] ml-[6px]'>Linkedin</span>
                            </a>

                        </div>

                             <div className='min-w-[200px] h-auto flex flex-col items-center justify-start'>
                            <div className='font-bold text-[16px] text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500'>About me</div>
                            <a href= 'https://github.com/shashwat1801' target="_blank" rel="noopener noreferrer" className='flex flex-row items-center my-[15px] cursor-pointer'>
                            
                                <span className='flex-[15px] ml-[6px]'>Help</span>
                            </a>
                            <a href= 'https://github.com/shashwat1801' target="_blank" rel="noopener noreferrer" className='flex flex-row items-center my-[15px] cursor-pointer'>
                            
                                <span className='flex-[15px] ml-[6px]'>Contact</span>
                            </a>
                            <a href= 'https://github.com/shashwat1801' target="_blank" rel="noopener noreferrer" className='flex flex-row items-center my-[15px] cursor-pointer z-50 relative'>
                            
                                <span className='flex-[15px] ml-[6px]'>Learn more about my work</span>
                            </a>

                        </div>


                    </div>
                    <div className='mb-[20px] text-[15px] text-center'>
                        &copy; Developer since 2018 inc. All rights reserved.

                    </div>


                </div>

        </div>
        </footer>
    )
}
export default Footer;