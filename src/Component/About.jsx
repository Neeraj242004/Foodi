import React from 'react'
import assets from '../assets/assets'
import { FaUtensils, FaWineGlassEmpty } from 'react-icons/fa6'

const About = () => {
  return (
    <div id='about' className='py-20 bg-white'>
        <div className='container mx-auto px-6'>
           <div className='text-center mb-12'>
              <h1 className='text-3xl sm:text-4xl mb-4 font-bold text-black'>Our story</h1>
              <div className='w-20 h-1 bg-red-600 mx-auto'></div>
           </div>
              <div className='flex flex-col md:flex-row items-center gap-12'>
                  {/* image */}
                  <div className='md:w-1/2'>
                  <img src={assets.aboutImg} alt="About" />
                  </div>
                 
                  {/* content */}
                  <div className='md:w-1/2'>
                  <h3 className='text-3xl font-semibold text-black mb-8'>A Gastronomic journey</h3>
                  <p className='text-gray-700 mb-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo assumenda laboriosam, iusto nulla id quisquam explicabo enim illum voluptas ipsa, corrupti reiciendis eaque facere perspiciatis, molestiae beatae iste voluptatem soluta aliquid! Culpa possimus nulla tempore quisquam voluptatibus deleniti laborum impedit, fugiat, vel provident, itaque non eius harum dolorum architecto cupiditate? Exercitationem consequuntur optio aliquid sunt reiciendis reprehenderit ad, dolor nam?</p>
                  <p className='text-gray-700 mb-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores illum nisi inventore nobis error fuga nesciunt quis! Repellendus voluptates dolor obcaecati sequi! Beatae velit inventore, placeat cum quaerat voluptate eos aliquid necessitatibus, animi voluptatibus repellendus et porro earum omnis dolorem..</p>
                  {/* button */}
                  <div className='flex items-center space-x-4'>
                         <div className='flex items-center gap-2'> 
                          <div className='w-12 h-12 bg-red-800 rounded-full flex items-center
                          justify-center'>
                                < FaUtensils className='text-white text-xl'/>
                            </div>
                            <span className='text-black font-semibold'>Fine Dining</span>
                         </div>

                          <div className='flex items-center gap-2'> 
                          <div className='w-12 h-12 bg-red-800 rounded-full flex items-center
                          justify-center'>
                                < FaWineGlassEmpty className='text-white text-xl'/>
                            </div>
                            <span className='text-black font-semibold'>Wine Pairing</span>
                         </div>
                         
                  </div>
                  </div>
              </div>
        </div>
    </div>
  )
}

export default About