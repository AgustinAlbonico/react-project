import React, {useState} from 'react';


export const Warning = () => {
    const [nav, setNav] = useState(false)
    const handleNav = () => {
        setNav(!nav)
    }

  return (
    <div className='w-full h-[80px] bg-darkblue'>
      <div className='max-w-[1000px] mx-auto content-center items-center h-full flex justify-center'>
        <div className=''>
          <h1 className='text-[#e7c03e] text-center align-middle'>Bienvenidos a BytePro!!! Hasta 70% en CyberMonday!!!</h1>
         </div>
      </div>
    </div>
  );
};

export default Warning;