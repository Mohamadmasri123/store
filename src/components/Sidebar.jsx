import React from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react';
import { FaArrowRight } from "react-icons/fa6";
import { FaRegTrashAlt } from "react-icons/fa";
import Cartitem from './Cartitem';
import { SidebarContext } from '../contexts/SidebarContext';

const Sidebar = () => {
  const {isOpen,handleClose}=useContext(SidebarContext)
  return (
    <div className={` ${isOpen? `right-0`:`-right-full`}
       bg-white fixed h-full w-full   lg:w-[450px] xl:w-[350px] z-20 border-l border-black  `}>
      
      <div className=' flex justify-between m-4 border-b-2 select-'>
        <div className=' font-bold uppercase select-none'>
            SHOPPUNG BAG (0)
        </div>
        <div className=''>
          <FaArrowRight  onClick={handleClose} />
        </div>


      </div>
      </div>
  )
}

export default Sidebar