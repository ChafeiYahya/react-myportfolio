import React from 'react'
import bg2 from '../assets/bg2.jpg';
import {
  FaEnvelope,
  FaPhone,
  
} from 'react-icons/fa';
const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4' style={{ 
      backgroundImage: `url(${bg2})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      
      }}>
       
            <div className='pb-8  flex-col max-w-[600px] w-full ' >
                <p className='text-5xl font-bold inline border-b-4 border-blue-600 text-gray-100 '>Contact</p> 
                <p className='text-gray-100 py-4   '>Email <br></br>chafei.yahya@gmail.com</p>
                <p className='text-gray-100 py-4     '>Phone <br></br>+212 640 74 65 21</p>
            </div>
        
       
    </div>
  )
}

export default Contact