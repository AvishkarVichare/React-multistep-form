import React from 'react'

const Addresses = (props) => {

    const {handleOnChange} = props;

  return (
    <div className='flex flex-col gap-5'>
        <label htmlFor="add1">Address line 1:</label>
        <input onChange={handleOnChange} type="text" placeholder='Enter Your Address' name='add1' id='add1' />

        <label htmlFor="add2">Address line 2:</label>
        <input onChange={handleOnChange} type="text" placeholder='Enter Your Address' name='add2' id='add2' />

        <label htmlFor="pin">Pincode:</label>
        <input onChange={handleOnChange} type="number" placeholder='Enter Pincode' name='pin' id='pin' />


    </div>
  )
}

export default Addresses