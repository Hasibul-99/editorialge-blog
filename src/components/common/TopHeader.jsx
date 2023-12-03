import React from 'react'
import { WiMoonWaxing6 } from "react-icons/wi";



export default function TopHeader() {
  return (
    <div className='w-full mx-auto '>
      <div className='mx-0 py-1 block mb-0 min-h-0'>
        <div className='min-h-1 float-left px-6 relative align-baseline w-full'>
          <div className='w-auto h-auto'>
          <WiMoonWaxing6 />
          </div>
        </div>
      </div>
    </div>
  )
}
