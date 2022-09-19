import React from 'react'

const Personal = (props) => {

    const {handleOnChange,data} = props;

   
    console.log(data)
  return (
    <div className='flex flex-col gap-5'>
        <label htmlFor="name">Name:</label>
        <input onChange={handleOnChange} type="text" name='name' placeholder='Your Full Name' id='name' />
        <label htmlFor="email">Email:</label>
        <input onChange={handleOnChange} type="email" name='email' placeholder='Your Email ID' id='email' />
        <label htmlFor="phone">Phone No:</label>
        <input onChange={handleOnChange} type="number" name='phone' placeholder='Your Phone No' id='phone' />
    </div>
  )
}

export default Personal