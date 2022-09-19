import React, { useState } from 'react'
import Addresses from './Addresses'
import PaymentDet from './PaymentDet'
import Personal from './Personal'

const FormComponent = () => {

    const [page, setPage] = useState(0);
    const headingsData = ['Personal Details', 'Addresses', 'Payment Details'];

    // submit function
    const handleSubmit = (e)=>{
        e.preventDefault()
        // console.log("Submitted succesfully")
        // alert(`name: ${data.name} email :${data.email} phone: ${data.phone} add1: ${data.add1} add2: ${data.add2}`)

        alert('Submitted ' + JSON.stringify(data))
        console.log(JSON.stringify(data))
    }


    const [data, setData] = useState({name:'', email:'', phone:'', add1:'', add2:'', pin:'', bankname:'', mode:'', card:''});


    // onchange function 
    const handleOnChange = (e)=>{
        setData({...data,[e.target.name] : e.target.value})
    }


  return (
    <div className='h-[100vh] flex flex-col items-center my-12 border-black border-5  shadow-inner shadow-gray-800  rounded-lg w-[80%] mx-auto bg-gray-200 p-12'>

        {/* progress  */}

        <div className='flex gap-3 mt-4'>
            <div className={'font-bold h-fit w-fit  p-4 rounded-[50%] ' + (page==0?'text-gray-300 bg-[#1f1f1f]':'bg-gray-300 text-[#1f1f1f]')}>1</div>
            <div className={'font-bold h-fit w-fit p-4 rounded-[50%] ' + (page==1?'text-gray-300 bg-[#1f1f1f]':'bg-gray-300 text-[#1f1f1f]')}>2</div>
            <div className={'font-bold h-fit w-fit  p-4 rounded-[50%] ' + (page==2?'text-gray-300 bg-[#1f1f1f]':'bg-gray-300 text-[#1f1f1f]')}>3</div>
        </div>

        {/* text-gray-300 bg-[#1f1f1f] */}

        {/* form  */}
    <form onSubmit={handleSubmit} className='w-full relative text-[16px] sm:text-[20px] h-full'>
        {/* form heading  */}
        <h1 className='text-[2rem] font-bold text-center my-12 bg-gray-300 rounded-2xl'>
            {headingsData[page]}
        </h1>
        <div>
        {/* Personal details */}
        <div className={'ease-linear duration-300 ' + (page===0?'block':'hidden')}>
            <Personal data = {data} setData = {setData} handleOnChange={handleOnChange} />
        </div>
        {/* Addresses */}
        <div className={'ease-linear duration-300 ' + (page===1?'block':'hidden')}>
            <Addresses data = {data} setData = {setData} handleOnChange={handleOnChange} />
        </div>
        {/* Payment details */}
        <div className={'ease-linear duration-300 ' + (page===2?'block':'hidden')}>
            <PaymentDet data = {data} setData = {setData} handleOnChange={handleOnChange} />
        </div>
        </div>  
        <div className='flex justify-around absolute w-full bottom-[50px]'>
            <button type='button' onClick={()=>{setPage(page-1)}} className={'bg-[#1f1f1f] text-gray-300 px-8 py-2 rounded-lg ' + (page==0?'hidden':'block') }>Prev</button>
            <button type='button'  onClick={(e)=>{setPage(page+1)}} className={'bg-[#1f1f1f] text-gray-300 px-8 py-2 rounded-lg '+ (page==2?'hidden':'block')}>Next</button>
            <button  type='submit' className={'bg-[#1f1f1f] text-gray-300 px-8 py-2 rounded-lg '+ (page===2?'block':'hidden')}>Submit</button>
        </div>
    </form>
    </div>
  )
}

export default FormComponent