import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import bg from '../assets/bg.jpg';
const Home = () => {
  return (
    
    <div   name='home'
            style={{ 
            backgroundImage: `url(${bg})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            
            }}  className='w-full h-screen'  >
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full' >
        <p className='text-[#ffffff] '>Hi, my name is </p>
        <h1 className='text-4xl sm:text-7x1 font-bold text-[#ffffff]'>
          Yahya Chafei
        </h1>
        
        <h2 className='text-4xl sm:text-7xl font-bold text-[#ffffff]'>
          I'm a Full Stack Developer.
        </h2>
       
        <div>
          <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-blue-600 hover:border-blue-600'>
            View Work
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3 ' />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
