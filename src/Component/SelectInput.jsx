import React from 'react'

const SelectInput = ({label, name, value, onChange, options}) => {
  return (
    <div className='mb-4'>
      <label htmlFor={name} className='block text-black mb-2 font-semibold'>{label}</label>
      <select 
        id={name}
        name={name}
        value={value ?? ""}
        onChange={onChange}
        className="w-full px-4 py-2 rounded border text-black bg-white"
      > 
        {options.map((opt)=>(
            <option key={opt.value} value={opt.value} >{opt.label}</option>
        ))}
      </select>
    </div>
  )
}

export default SelectInput