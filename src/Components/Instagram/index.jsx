import React from 'react'
import { data } from './imagen';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

export const Instagram = () => {

  const slideLeft = () => {
    var slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    var slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <>
            <div className='relative flex items-center overflow-x-hidden'>
        <MdChevronLeft className='opacity-50 cursor-pointer hover:opacity-100' onClick={slideLeft} size={40} />
        <div
          id='slider'
          className='w-full h-full overflow-x-scroll bg-cyan-400 scroll whitespace-nowrap scroll-smooth scrollbar-hide'
        >
          {data.map((item) => (
            <img
              className='w-[220px] inline-block p-2 cursor-pointer hover:scale-110 ease-in-out  duration-300'
              src={item.img}
              alt='/'
            />
          ))}
        </div>
        <MdChevronRight className='opacity-50 cursor-pointer hover:opacity-100' onClick={slideRight} size={40} />
      </div>
    </>
  );
}