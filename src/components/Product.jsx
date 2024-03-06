import { useContext } from "react"
import React  from 'react'
import { Link } from "react-router-dom"
import { FaPlusSquare } from "react-icons/fa";
import { GrFormView } from "react-icons/gr";


const Product = ({product}) => {
  console.log(product)
  const {id ,image ,category,title,price}=product


  return (
    <div>
      <div className='flex flex-col  max-w-[500px] h-[auto]  ' key={id}>

          <div className=" border border-black   max-w-[400px] p-10 h-[350px] group   relative"> 
            <div className="  max-w-[200px]   mx-[auto] flex justify-center items-center  h-[250px]">
               <img src={image} alt=""  className=' h-full group-hover:scale-110 '/>
             </div>
             <div className=" absolute  flex flex-col m-2  top-0 right-0 opacity-0 group-hover:opacity-100  transition-all ">
              <button>
                 <div className="">
              <FaPlusSquare size={35} className=" text-red-500" />
                </div>
              </button>
              
                <Link to={`/ProductDetail/${id} `}>
               <GrFormView size={35} className=" my-2 bg-white shadow-md" /> </Link>
             </div>
           </div> 

          <div className=' flex flex-col py-6 px-6 h-[150px]'>
                <h1 className=' text-gray-500'>{category}</h1>
               <h1 className=' font-bold '>{title}</h1>
                <p className=' font-bold ' >$ {price}</p>
         </div>
     </div> 
   </div>
  )
}

export default Product