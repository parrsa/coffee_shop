import React from 'react'
import Logo from '../../images/tit.png'
const Contact = () => {
  return (
    <div className='w-full h-[500px] flex justify-center'>

        <div className='w-[50%] ml-20 mt-10 h-32'>
            <p className='text-center text-5xl font-Allura  text-white'>Reservation</p>
            <img src={Logo} className="w-[80%] ml-20" />
            <p className='text-center text-white'>Fill in the requested to make a areservation</p>
        </div>

                <div className='w-[70%] h-96 absolute mt-48'>
                <div className='flex flex-wrap ml-20 w-full h-full'>
                    <div className='w-full md:w-1/2 px-3 md:mb-0'><input className='appearance-none block w-96 bg-transparent border-b-2 outline-none border-gray-500 px-4 py-3' type="text" placeholder='FirstName' /></div>
                    <div className='w-full md:w-1/2 px-3 md:mb-0'><input className='appearance-none block w-96 bg-transparent border-b-2 outline-none border-gray-500 px-4 py-3' type="text" placeholder='LastName' /></div>
                    <div className='w-full md:w-1/2 px-3 md:mb-0'><input className='appearance-none block w-96 bg-transparent border-b-2 outline-none border-gray-500 px-4 py-3' type="number" placeholder='Phone' /></div>
                    <div className='w-full md:w-1/2 px-3 md:mb-0'><input className='appearance-none block w-96 bg-transparent border-b-2 outline-none border-gray-500 px-4 py-3' type="text" placeholder='UserName' /></div>
                </div>
                </div>
    </div>
  )
}

export default Contact