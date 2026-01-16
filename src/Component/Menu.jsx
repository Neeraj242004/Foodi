import React, { useState } from 'react'
import { foodMenu } from '../assets/assets'
import ItemModel from './ItemModel';


const Menu = () => {
       const [selectedItem, setSelectedIems] = useState(null);
       const [openModel, setOpenModel] = useState(false);

       const isopenModel = (item)=> {
          setSelectedIems(item);
          setOpenModel(true);
       }

       const iscloseModel =() =>{
         setSelectedIems(null);
         setOpenModel(false);
       }

  return (
    <div id='menu' className='py-20 bg-orange-100'>
       <div className='container mx-auto px-6'>
        <div className='text-center'>
           <h1 className='text-3xl sm:text-4xl mb-4 font-bold text-black'> Our Menu </h1>
           <div className='w-20 h-1 bg-red-700 mx-auto'></div>
           <p className='text-gray-700 mb-6'>Crafted with passion and the finest ingredients</p>
       </div>

       <div className='max-w-4xl mx-auto'>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-12'>
             {
                foodMenu.map((food,index)=>(
                  <div onClick={()=>isopenModel(food)} key={index} className='rounded-2xl shadow-2xl overflow-hidden hover:scale-105 transition duration-300 cursor-pointer'>
                    <img className='w-full h-96 object-cover' src={food.image} alt="" />
                    <div className='p-4'>
                        <div className='flex items-center justify-between mb-6'>
                       <h1 className='text-xl text-black font-semibold'>{food.title}</h1>
                       <span className='text-xl text-red-600 font-semibold'>{food.price}</span>
                        </div>
                        <p className='text-sm text-gray-700'>{food.ingredients}</p>
                    </div>
                  </div>  
                ))
             }
          </div>
            <ItemModel isOpen={openModel} onClose={iscloseModel} item={selectedItem} />
            <div className='text-center'>
                <button className='bg-red-800 px-8 py-3 rounded-full mt-12 text-white cursor-pointer'> View Full Menu</button>
            </div>
       </div>
       </div>
    </div>
  )
}

export default Menu