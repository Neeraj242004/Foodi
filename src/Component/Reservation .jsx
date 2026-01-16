import React, { useState } from 'react'
import InputArea from '../Component/InputArea'
import SelectInput from '../Component/SelectInput';
import { partySizeOptions, tableRefOptions, timeOptions } from '../assets/assets';
import TextArea from '../Component/TextArea';
import Booking from '../Component/Booking';

const Reservation  = () => {
       const [isModalOpen, setIsmodalOpen] = useState(false);
       const [formdata, setformData] = useState({
        fullName:"",
        Phone:"",
        email:"",
        specialRequest:"",
        time:"",
        partySize:"",
        tableRef:"",
       });

       const handleChange = (e)=>{
        const {name, value} = e.target;
        setformData((prev)=>({
            ...prev, [name]: value,
        }));
       }

       const handleSumit = (e)=>{
        e.preventDefault();
        setIsmodalOpen(true);
        setformData({
         fullName:"",
        Phone:"",
        email:"",
        specialRequest:"",
        time:"",
        partySize:"",
        tableRef:"",
        })
       }

       const closeModal = () =>{
        setIsmodalOpen(false)

       }
  return (
    <div id='reservation' className='w-full bg-orange-100 py-10'>
        <div className='container mx-auto px-6'>
          <div className='text-center mb-12'>
            <h1 className='text-3xl sm:text-4xl mb-4 font-bold text-black'> Make a Reservation </h1>
           <div className='w-20 h-1 bg-red-700 mx-auto'></div>
           <p className='text-gray-700 mb-6'>Book your table in advace to ensure the best dining experience</p>
          </div>
          {/* form */}
          <div className='max-w-2xl mx-auto bg-gray-50 p-8 rounded shadow'>
            {/* Booking */}
              <form onSubmit={handleSumit}>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                     <InputArea
                     label="Date"
                     name="date"
                     type="date"
                     value={formdata.Date}
                     onChange={handleChange}
                     />
                     {/* time */}
                     <SelectInput
                     label={"Time"}
                     name={"time"}
                     value={formdata.time}
                     onChange={handleChange}
                     options={timeOptions}                     
                     />
                     {/* partySize */}
                     <SelectInput
                     label={"Party Size"}
                     name={"partySize"}
                     value={formdata.partySize}
                     onChange={handleChange}
                     options={partySizeOptions}
                     />
                     {/* tableref */}
                      <SelectInput
                     label={"Table Reference"}
                     name={"tableRef"}
                     value={formdata.tableRef}
                     onChange={handleChange}
                     options={tableRefOptions}
                     />
                     {/* Name */}
                      <InputArea
                     label={"Full Name"}
                     name={"fullName"}
                     value={formdata.fullName}
                     onChange={handleChange}
                     placeholder={"Enter Your Name"}
                     />
                     {/* phoneNo */}
                     <InputArea
                     label={"Phone No"}
                     name={"Phone"}
                     type='tel'
                     value={formdata.Phone}
                     onChange={handleChange}
                     placeholder={"Enter Phone Number"}
                     />
                     {/* email */}
                       <InputArea
                     label={"Email Address"}
                     name={"email"}
                     type='email'
                     value={formdata.email}
                     onChange={handleChange}
                     placeholder={"Enter Your Email"}
                     />

                     <TextArea
                     label={"Special Request"}
                     name={"specialRequest"}
                     value={formdata.specialRequest}
                     onChange={handleChange}
                     placeholder={"Any Special Request"}  
                     />
                </div>
                <button type='submit' className='mt-4 w-full bg-red-800 text-white py-2 px-4 rounded hover:bg-red-700 cursor-pointer'>
                    Confirm Reservation
                </button>
              </form>
                {/* booking */}
             <Booking  isOpen={isModalOpen} isClose={closeModal}/>
                
          </div>
        </div>
    </div>
  )
}

export default Reservation 