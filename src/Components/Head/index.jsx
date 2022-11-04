import React, {useState} from 'react'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai';
export const Head = () => {
  const [nav, setNav] = useState(false)
  const handleNav = () => {
      setNav(!nav)
  }

return (
  <div className='w-full h-[85px] bg-black'>
    <div className='max-w-[1240px] mx-auto px-4 flex justify-between items-center h-full'>
      <div >
        <h1 className='text-[#00d8ff]' >BytePro</h1>
      </div>
      <div className='hidden md:flex'>

      <ul className='flex text-white items-center'>
          <li>Micros</li>
          <li>Productos</li>
          <li>Soporte</li>  
          <li>Monitores</li>           
          <li>Notebooks</li>
          <li>Comunidad</li>
          <li>Nosotros</li>
        </ul>
        <button className='ml-4'>Carrito</button>
      </div>

      {/* Hamburger menu */}
      <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size={30} className='text-white' /> : <AiOutlineMenu size={30} className='text-white' />}
        
        
      </div>

      {/* Mobile Menu */}
      <div className={nav ? 'w-full bg-black text-white absolute top-[90px] left-0 flex justify-center text-center' : 
  'absolute left-[-100%]'}>
        <ul>
          <li className='text-2xl'>Micros</li>
          <li className='text-2xl'>Monitores</li>
          <li className='text-2xl'>Notebooks</li>
          <li className='text-2xl'>Nostros</li>
          <li className='text-2xl'>Productos</li>
          <li className='text-2xl'>Soporte</li>
        
          <button className='m-8'>Carrito </button>
        </ul>
      </div>
    </div>
  </div>
);
}
