import React from 'react'
import { FaCheck } from 'react-icons/fa6';

const Booking = ({isOpen, isClose}) => {
    if(!isOpen) return null;
  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'>
        {/* box modal */}
      <div className=' relative bg-white rounded-lg p-8 max-w-md w-full mx-4 shadow-lg'>
        {/* close button */}
            <button onClick={isClose} className="absolute top-3 right-3 text-xl w-8 h-8 rounded-full 
                     bg-red-800 text-white flex items-center justify-center hover:bg-red-700">
                &times;
            </button>
        <div className='text-center'>
          <div className='w-16 h-16 bg-green-200 rounded-full flex items-center justify-center mx-auto mb-4'>
            <FaCheck/>
          </div> 
          <h3 className='text-2xl font-bold text-gray-800 mb-2'>Booking Confirmed!</h3>
          <p className='text-gray-500 mb-6'>Your table has been successfully reserved.We look forward to serving you.</p>
          <button className='bg-red-800 hover:bg-red-700 text-white font-bold py-2 px-6 rounded-lg'>Continue</button>
        </div>
      </div>
    </div>
  )
}

export default Booking