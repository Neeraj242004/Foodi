import React from 'react'

const  ItemModel = ({isOpen, onClose, item}) => {
    if(!isOpen || !item) return null;

  return (
    <div className='fixed inset-0 bg-black/50 bg-opacity-50 flex items-center justify-center z-50'>
       <div className='bg-white rounded-lg p-6 max-w-md w-full shadow-2xl relative'>
            <button onClick={onClose} className='absolute top-2 right-4 hover:text-white text-xl w-8 h-8 rounded-full bg-red-800 text-white cursor-pointer'>
                &times;
            </button>
            <img src={item.image} alt={item.title} className='rounded w-full h-48 object-cover mb-4'/>
            <h2 className='text-gray-900 font-extrabold mb-2'>{item.title}</h2>
            <p className='text-gray-600 mb-2'>{item.description}</p>
            <p className=' text-red-700 font-extrabold mb-2'>{item.price}</p>
       </div>
    </div>
  )
}

export default ItemModel