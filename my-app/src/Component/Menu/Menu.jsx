import React from 'react'
import Coffee from '../../images/celine-ylmz-PG2-JpZmjBU-unsplash.jpg'
import MenuImage1 from '../../images/nathan-dumlao-r-KfktlyBL0-unsplash.jpg'
import MenuImage2 from '../../images/nathan-dumlao-VMlO-arqpOs-unsplash.jpg'
import MenuImage3 from '../../images/brigitte-tohm-yRH0JI2S2KA-unsplash.jpg'
import MenuImage4 from '../../images/eiliv-aceron-ZuHjaQcYhDY-unsplash.jpg'
const Menu = () => {
  return (
    <div className='w-full h-[700px] flex justify-center items-center '>
    <div className='w-[80%] h-[98%] grid grid-cols-5 '>
        <div className='col-span-1 text-white flex items-center'>
            <div>
                <h1 className='text-2xl font-bold'>Menu</h1>
                <ul className='mt-3'>
                    <li className='text-xl font-bold'>The basic</li>
                    <li>Espresso</li>
                    <li>Americano</li>
                    <li>Latte</li>
                    <li>Cortado</li>
                    <li>Flat white</li>
                    <li>Lungo</li>
                </ul>
                <ul className='mt-5'>
                <li className='text-xl font-bold'>Cream on tap</li>
                <li>Mocca</li>
                <li>Latte macciato</li>
                <li>Glaze</li>
                <li>Vienna coffe</li>
                <li>Irish coffee</li>
                </ul>
                <ul className='mt-5'>
                <li className='text-xl font-bold'>Tea</li>
                <li>Green tea</li>
                <li>Matcha tea</li>
                <li>Oolong tea</li>
                </ul>
            </div>
            </div>


            <div className='col-span-4 flex items-center'>
                <div className='w-full h-[80%] grid grid-cols-3 gap-3 grid-rows-2'>
                    <div className='col-span-1 row-span-2 '>
                        <div className='w-full h-[90%] '><img src={Coffee} className="w-full h-full" /></div>
                        <div className='w-full  h-full'>
                            <p className='text-white'>Lorem ipsum</p>
                            <p className='float-right text-gray-500'>$ 32</p>
                            <p className='text-gray-500'>270 ml</p>
                        </div>
                    </div>
                    <div className='col-span-1 row-span-2 grid grid-rows-2'>
                        <div className='row-span-1 text-white'>
                            <div className='w-[85%] ml-5 h-56 bg-red-500'><img src={MenuImage1} className='w-full h-full'/></div>
                            <div className='w-[85%] ml-5 h-10 '>
                                <p>Lorem ipsum</p>
                                <p className='float-right text-gray-500'>$ 44</p>
                                <p className='text-gray-500'>270 ml</p>
                            </div>
                        </div>

                        <div className='row-span-1 text-white'>
                            <div className='w-[85%] ml-5 h-56 bg-red-500'><img src={MenuImage2} className='w-full h-full'/></div>
                            <div className='w-[85%] ml-5 h-10 '>
                                <p>Lorem ipsum</p>
                                <p className='float-right text-gray-500'>$ 20</p>
                                <p className='text-gray-500'>270 ml</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-span-1 row-span-2 grid grid-rows-2 '>
                        <div className='row-span-1 text-white'>
                            <div className='w-[85%] ml-5 h-56 bg-red-600'><img src={MenuImage3} className='w-full h-full' /></div>
                            <div className='w-[85%] ml-5 h-10  '>
                                <p>Lorem ipsum</p>
                                <p className='float-right text-gray-500'>$ 12</p>
                                <p className='text-gray-500' >250 ml</p>
                            </div>
                        </div>

                        <div className='row-span-1 text-white'>
                            <div className='w-[85%] ml-5 h-56 bg-red-600'><img src={MenuImage4} className='w-full h-full' /></div>
                            <div className='w-[85%] ml-5 h-10  '>
                                <p>Lorem ipsum</p>
                                <p className='float-right text-gray-500'>$ 12</p>
                                <p className='text-gray-500' >250 ml</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

    </div>
    </div>
  )
}

export default Menu