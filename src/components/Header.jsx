import React from 'react'
import { useContext } from 'react'
import { SidebarContext } from '../contexts/SidebarContext'
import { IoBagOutline } from "react-icons/io5";
import logo from "./../assets/logo.svg"
import hero from "./../assets/Screenshot_2024-02-28_191302-removebg-preview.png"



const Header = () => {
  const {isOpen,setIsopen}=useContext(SidebarContext)
  return (
    <header className=' bg-orange-200 '>
    <div className='flex justify-between select-none  '>
      <div className=' w-10 ml-14 mt-4 '>
        <img src={logo}alt=" logo " />
      </div>
      <div className=' ' onClick={()=>setIsopen(!isOpen)}>
        <IoBagOutline className=' cursor-pointer mr-14 mt-4 '  size={30}/>
      </div>
    </div>
    <div className='flex justify-between '>
      <div className=' flex flex-col justify-center '>
        <span>New trend</span>
      <h1>AUTUMN SALE STYLIHSH </h1>
      <a href=""> Discover more</a>
      </div>
    <div className=''>
        <img src={hero}alt="" />
      </div>

      </div>
    </header>
  )
}

export default Header