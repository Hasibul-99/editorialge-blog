import React from 'react'
import { WiMoonWaxing6 } from "react-icons/wi";
import { FaFacebookF } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { FaPinterestP } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

export default function TopHeader() {
  return (
    <div className='w-full mx-auto '>
      <div className='mx-0 py-1 block mb-0 min-h-0'>
        <div className='min-h-1 float-left px-6 relative align-baseline w-full'>
          <div className='px-6 block min-h-[1px] float-left relative align-baseline w-full'>
            <div className='w-auto h-auto'>
              <div className='text-left inline-block mb-0 clear-none mr-5 align-middle relative' >
                <div className='flex items-baseline'>
                  <span className='text-sm mr-1 relative top-0.5'>
                    <WiMoonWaxing6 />
                  </span>
                  <div className='mr-1.5 select-none'>
                    <span className='font-normal text-[11px] '>11</span>
                    <span className='font-normal text-[8px] relative top-[-6px] left-px'>C</span>
                  </div>
                  <span className='text-[11px] font-normal lg:font-medium leading-[26px] '>London</span>
                </div>
              </div>

              <div className='text-left inline-block mb-0 clear-none mr-7 align-middle relative'>
                <div className='flex items-baseline transform translate-z-0'>
                  <div className='text-[11px] font-normal lg:font-medium leading-[26px]'>
                    Sunday, December 17, 2023
                  </div>
                </div>
              </div>

              <div className='text-left mb-0 float-right clear-none relative inline-block'>
                <div className='inline-block align-left'>
                  <a href='#' title="Facebook" className='w-[25.2px] h-[25.2px] text-sm m-0 relative top-0.5 inline-block align-middle transition-all duration-200 text-center transform translate-z-0 hover:text-blue-500 no-underline bg-transparent'>
                    <FaFacebookF />
                  </a>
                </div>
                <div className='inline-block align-left'>
                  <a href='#' title="Twitter" className='w-[25.2px] h-[25.2px] text-sm m-0 relative top-0.5 inline-block align-middle transition-all duration-200 text-center transform translate-z-0 hover:text-blue-500 no-underline bg-transparent'>
                    <RiTwitterXLine />
                  </a>
                </div>
                <div className='inline-block align-left'>
                  <a href='#' title="Pinterest" className='w-[25.2px] h-[25.2px] text-sm m-0 relative top-0.5 inline-block align-middle transition-all duration-200 text-center transform translate-z-0 hover:text-blue-500 no-underline bg-transparent'>
                    <FaPinterestP />
                  </a>
                </div>
                <div className='inline-block align-left'>
                  <a href='#' title="Linkedin" className='w-[25.2px] h-[25.2px] text-sm m-0 relative top-0.5 inline-block align-middle transition-all duration-200 text-center transform translate-z-0 hover:text-blue-500 no-underline bg-transparent'>
                    <FaLinkedinIn />
                  </a>
                </div>
                <div className='inline-block align-left'>
                  <a href='#' title="Linkedin" className='w-[25.2px] h-[25.2px] text-sm m-0 relative top-0.5 inline-block align-middle transition-all duration-200 text-center transform translate-z-0 hover:text-blue-500 no-underline bg-transparent'>
                    <FaYoutube />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
