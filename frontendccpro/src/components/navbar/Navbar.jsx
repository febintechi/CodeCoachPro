import React from 'react'

const navbar = () => {
  return (
    <div className='font-bold text-xl w-full h-20 flex justify-between md:px-14 items-center pt-3'>
      <div className='text-2xl text-[#ffffff]  hover:text-[#fcf300] cursor-pointer'><span className=' text-[#fcf300] text-4xl'>C</span>odeCoachPro</div>
      <ul className='md:flex hidden text-xl'>
        <li className='mx-[30px] text-[#ffffff] font-bold hover:text-[#a2a2a2] cursor-pointer' href="#">Home</li>
        <li className='mx-[30px] text-[#ffffff] font-bold hover:text-[#a2a2a2] cursor-pointer' href="#">Courses</li>
        <li className='mx-[30px] text-[#ffffff] font-bold hover:text-[#a2a2a2] cursor-pointer' href="#">Find Jobs</li>
        <li className='mx-[30px] text-[#ffffff] font-bold hover:text-[#a2a2a2] cursor-pointer' href="#">Testimonial</li>
        <li className='mx-[30px] text-[#ffffff] font-bold hover:text-[#a2a2a2] cursor-pointer' href="#">Mock Interviews</li>
      </ul>
      <div className='text-[#ffffff] font-bold hover:text-[#a2a2a2] cursor-pointer'>Login/Signup</div>
    </div>
  )
}

export default navbar
