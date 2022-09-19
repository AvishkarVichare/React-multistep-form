import React from 'react'

const PaymentDet = (props) => {

    const {handleOnChange} = props;

  return (
    <div className='flex flex-col gap-5'>
    <label htmlFor="bankname">Bank Name:</label>
    <input onChange={handleOnChange} type="text" name='bankname' placeholder='Bank Name' id='bankname' />
    <label htmlFor="mode">Payment Mode:</label>
    <select onChange={handleOnChange} name="mode" id="mode">
    <option value="neft">NEFT</option>
    <option value="gpay">Gpay</option>
    <option value="paypal">PayPal</option>
    </select>
    <label htmlFor="card">Card No:</label>
    <input onChange={handleOnChange} type="number" name='card' placeholder='Your Card No.' id='card' />
</div>
  )
}

export default PaymentDet