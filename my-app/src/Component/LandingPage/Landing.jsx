import React from 'react'
import LandingImage from "../../images/daan-evers-tKN1WXrzQ3s-unsplash.jpg"
import Facebook from '../../images/Facebook.png'
import Instagram from '../../images/Instagram.png'
import Twitter from '../../images/Twitter.png'
const Landing = () => {
  return (
    <div className='w-full h-screen flex justify-center items-center '>
        <div className='w-[80%] h-[98%]'>
            <div className='w-full  h-full'>

                <div className='w-full h-20 text-white font-Aclonica text-center'>
                    <p className='text-2xl'>Choose the best place</p>
                    <p className='text-2xl'>Choose the best place with a chocolate coffe shop</p>
                </div>

                <div className='w-full h-[80%]'>
                    <img src={LandingImage} className="w-full h-full" />
                </div>

                    <div className='w-full h-14 flex justify-between items-center'>
                        <button className='px-6 py-3 bg-white rounded-lg'>More info</button>
                        <div className='w-44 h-12 flex justify-between items-center'>
                        <div className='w-8 h-8 bg-white rounded-full flex justify-center items-center'><img src={Facebook} /></div>
                        <div className='w-8 h-8 bg-white rounded-full flex justify-center items-center'><img src={Instagram} /></div>
                        <div className='w-8 h-8 bg-white rounded-full flex justify-center items-center'><img src={Twitter} /></div>

                        </div>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default Landing