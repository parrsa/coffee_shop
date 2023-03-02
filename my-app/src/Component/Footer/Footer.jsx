import React from 'react'
import ImagePhone from '../../images/Phone.png'
import ImageMap from '../../images/Map Marker.png'
import ImageMail from '../../images/Envelope.png'
const Footer = () => {
    return (
        <div className='w-full h-24  border-t-2 flex justify-center'>
            <div className='w-[70%] h-full flex justify-evenly items-center'>
                <div className='w-64 h-full flex justify-center text-white items-center'><img src={ImagePhone} className="w-7" /> <span>+98 904-636-4944</span></div>
                <div className='w-64 h-full flex justify-center text-white items-center'><img src={ImageMap} className="w-7" /> <span>Paris , London</span></div>
                <div className='w-64 h-full flex justify-center text-white items-center'><img src={ImageMail} className="w-7" /><span>parsasoli.77@gmail.com</span></div>
            </div>
        </div>
    )
}

export default Footer