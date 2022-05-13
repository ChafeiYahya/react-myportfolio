import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import bg from '../assets/bg.jpg';
import { Link } from 'react-scroll';
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
        <p className='text-[#15cff1] text-2xl '>Hi, my name is </p>
        <h1 className='text-4xl sm:text-7x1 font-bold text-[#ffffff]'>
          Yahya Chafei
        </h1>
        
        <h2 className='text-4xl sm:text-7xl font-bold text-[#ffffff]'>
          I'm a Full Stack Developer.
        </h2>
       
        <div>
        <Link to="work">
          <button  to="work" className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-purple-600 hover:border-purple-600'>
            View Work
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3 ' />
            </span>
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
