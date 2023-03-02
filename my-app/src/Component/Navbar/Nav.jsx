import React from 'react'
import Logo from '../../images/logo.png'
import Location from '../../images/location.png'
const Nav = () => {
  return (
    <div className='w-full h-16 flex justify-evenly items-center'>
    <div className='w-40 ml-14'><img src={Logo}/></div>
    <ul className='flex justify-evenly w-[45%] items-center text-white text-center'>
    <li>Home</li>
    <li>Menu</li>
    <li>Enviroment</li>
    <li>Reserve</li>
    <li>Contact</li>
    </ul>
    <div className='flex mr-40 justify-center text-white' >
        <img src={Location} className="w-7"/>
        <span>London , Paris</span>
    </div>
    </div>
  )
}

export default Nav