import React from 'react';
import { Link } from "react-router-dom";
import image1 from './1.png'; 
import image2 from './2.png'; 
import image3 from './3.png'; 

const HeadlineCards = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
      {/* Card */}
      <div className='rounded-xl relative hover:scale-105 duration-300'>
        {/* Overlay */}
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
          <p className='font-bold text-2xl px-2 pt-4'>Lost Items Gallery</p>
          <p className='px-2'>Explore our database of lost items</p>
          <button className='border border-blue-500 bg-blue-500 text-white mx-2 absolute bottom-4 rounded-full text-sm md:text-base px-2 py-1'>
  <Link to={'/search?searchTerm=&sort=desc&category=LOST'} style={{ textDecoration: 'none', color: 'inherit' }}>View Now</Link>
</button>

        </div>
        <img
          className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
          src={image1}
          alt='/'
        />
      </div>
      {/* Card */}
      <div className='rounded-xl relative hover:scale-105 duration-300'>
        {/* Overlay */}
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
          <p className='font-bold text-2xl px-2 pt-4'>Found Items Gallery</p>
          <p className='px-2'>Discover recently found items</p>
          <button className='border border-blue-500 bg-blue-500 text-white mx-2 absolute bottom-4 rounded-full text-sm md:text-base px-2 py-1'>
  <Link to={'/search?searchTerm=&sort=desc&category=FOUND'} style={{ textDecoration: 'none', color: 'inherit' }}>Explore Now</Link>
</button>


        </div>
        <img
          className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
          src={image2}
          alt='/'
        />
      </div>
      {/* Card */}
      <div className='rounded-xl relative hover:scale-105 duration-300'>
        {/* Overlay */}
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
          <p className='font-bold text-2xl px-2 pt-4'>Report an Item</p>
          <p className='px-2'>Help reunite items with their owners</p>
          <button className='border border-blue-500 bg-blue-500 text-white mx-2 absolute bottom-4 rounded-full text-sm md:text-base px-2 py-1'>
  <Link to="/create-post" style={{ textDecoration: 'none', color: 'inherit' }}>Report Now</Link>
</button>


        </div>
        <img
          className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
          src={image3}
          alt='/'
        />
      </div>
    </div>
  );
};

export default HeadlineCards;
