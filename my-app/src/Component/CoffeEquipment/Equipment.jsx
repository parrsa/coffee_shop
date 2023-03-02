import React from 'react'
import Logo from '../../images/tit.png'
import Image1 from '../../images/sebastian-schuppik-H7xTpvBjJS4-unsplash.jpg'
import Image2 from '../../images/jonathan-borba-21tOEaJPM_o-unsplash.jpg'
const Equipment = () => {
  return (
    <div className='w-full h-[700px]  flex justify-center'>
    <div className='w-96 h-20 absolute'>
        <p className='text-center text-5xl font-Allura text-white'>cafe Equipment</p>
        <img src={Logo} />
    </div>

    <div className='w-[80%] h-[98%] grid grid-cols-2'>
    <div className='col-span-1 grid grid-rows-2 grid-cols-1'>
        <div className='row-span-1 col-span-1 flex items-center'>
            <p className='w-[95%] text-justify text-white leading-8'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus, nisi fugiat voluptatem eveniet necessitatibus doloribus in maiores libero. Repellat, iure. Magni veritatis dolor officia nemo eveniet saepe, distinctio quo temporibus enim consequatur et cupiditate maiores voluptatibus. Recusandae maxime minus sequi, corporis fugit, sed tempore quasi neque consectetur, illo velit deserunt corrupti laudantium eum qui est?</p>
        </div>
        <div className='row-span-1 col-span-1'><img src={Image1} className='w-[95%] h-[80%]'/></div>
    </div>

    <div className='col-span-1 flex items-center justify-end'>
        <div className='w-[80%] h-[75%] mt-10'>
            <img src={Image2} className='w-full h-full' />
        </div>
    </div>

    </div>
    </div>
  )
}

export default Equipment