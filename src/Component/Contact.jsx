import React from 'react'
import { FaLocationArrow, FaPhone } from 'react-icons/fa6'
import { MdEmail } from 'react-icons/md'
import { TbClockHour7 } from 'react-icons/tb'

const Contact = () => {
  return (
    <div id='contact' className='py-20 bg-white'>
       <div className='container mx-auto px-6'>
         <div className='text-center mb-12'>
            <h1 className='text-3xl text-black font-bold mb-4'>
               Let's Talk
            </h1>
            <div className='w-20 h-1 bg-red-700 mx-auto mb-4'></div>
            <p className='text-gray-700'> We'd love hear from you</p>
         </div>
         <div className='flex flex-col md:flex-row items-center justify-between'>
            {/* left */}
            <div className='md:w-1/2'>
              <div className='w-full overflow-hidden p-8 '>
                <h1 className='text-xl text-black font-semibold'>Get in Touch</h1>
                <div className='flex items-center gap-6 mb-6 '>
                    <div className='w-12 h-12 bg-red-700 text-white rounded-full flex items-center justify-center'>
                        <FaLocationArrow/>
                    </div>
                    <div className='mt-4'>
                     <p className='text-xl text-black font-semibold'>Address</p>
                     <p className='w-60'>104 chandani chowk, New Delhi, 121981</p>
                    </div>
                </div>
                 <div className='flex items-center gap-6 mb-6 '>
                    <div className='w-12 h-12 bg-red-700 text-white rounded-full flex items-center justify-center'>
                        <FaPhone/>
                    </div>
                    <div className='mt-4'>
                     <p className='text-xl text-black font-semibold'>Phone No</p>
                     <p className='w-60'>+91 9999547809</p>
                     <p className='w-60'>+91 7678414317</p>
                    </div>
                </div>
                 <div className='flex items-center gap-6 mb-6 '>
                    <div className='w-12 h-12 bg-red-700 text-white rounded-full flex items-center justify-center'>
                        <MdEmail/>
                    </div>
                    <div className='mt-4'>
                     <p className='text-xl text-black font-semibold'>Email Address</p>
                     <p className='w-60'>Foods54@gmail.com</p>
                      <p className='w-60'>BrotherFood009@gmail.com</p>
                    </div>
                </div>
                 <div className='flex items-center gap-6 mb-6 '>
                    <div className='w-12 h-12 bg-red-700 text-white rounded-full flex items-center justify-center'>
                        <TbClockHour7/>
                    </div>
                    <div className='mt-4'>
                     <p className='text-xl text-black font-semibold'>Hours</p>
                     <p className='w-60'>5:00PM Monday-Thursday</p>
                     <p className='w-60'>10:00PM Friday-Saturday</p>
                     <p className='w-60'>5:00PM-11:00PM Sunday</p>
                    </div>
                </div>
              </div>
            </div>
            {/* Right */}
         <div className='md:w-1/2'>
          <div className='w-full rounded-xl shadow-xl overflow-hidden p-8'>
             <h1 className='mb-6 text-2xl text-black font-bold'>Send a Message</h1>
              <form className='space-y-6'>
                       <div>
                        <label htmlFor="name" className='block text-gray-500 mb-2'>Your Name</label>
                        <input className='w-full bg-white border border-black rounded-lg px-4 py-3 outline-none'
                        type="text" />
                       </div>
                       <div>
                        <label htmlFor="email" className='block text-gray-500 mb-2'>Email Address</label>
                        <input className='w-full bg-white border border-black rounded-lg px-4 py-3 outline-none'
                        type="text" />
                       </div>
                       <div>
                        <label htmlFor="message" className='block text-gray-500 mb-2'>Your Message</label>
                        <textarea className='w-full h-40  bg-white border border-black rounded-lg px-4 py-3 outline-none'
                        type="text" />
                       </div>
                       <button type='sumbit' className='w-full  px-6 py-3 bg-red-700 rounded-lg font-medium hover:bg-red-600 transition duration-300 cursor-pointer'>
                               Send
                       </button>
                    </form>
          </div> 
         </div>
        </div>
       </div>
    </div>
  )
}

export default Contact