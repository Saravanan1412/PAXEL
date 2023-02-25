import React from 'react'

const ServiceComponent = (props) => {
  return (
    <div >
        <div className='bg-white w-[280px] h-[300px] text-black text-3xl border-b-8 border-[#ffb003] m-2'>
          <div className='pt-16'><img src={props.icon} alt="icon" className=' ml-10 w-[100px] h-[100px] '/></div>
          <p className='ml-10 mt-8'>{props.title}</p>
          <p className='ml-10 mt-4 text-xl underline'>MORE</p>
        </div>
    </div>
  )
}

export default ServiceComponent;
