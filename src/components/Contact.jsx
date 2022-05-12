import React from 'react'
import {
  FaEnvelope,
  FaPhone,
  
} from 'react-icons/fa';
const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
       
            <div className='pb-10'>
                <p className='text-5xl font-bold inline border-b-4 border-blue-600 text-gray-300'>Contact</p> 
                <p className='text-gray-100 text-4xl max-w-[300px] '> <br></br><FaEnvelope size={30} /> <br></br> Email :<br></br> yahya.chafei99@gmail.com</p>
                <p className='text-gray-100 text-4xl max-w-[300px]'> <br></br><FaPhone size={30} /> <br></br>Phone :<br></br> +212 640 74 65 21</p>
            </div>
        
       
    </div>
  )
}

export default Contact