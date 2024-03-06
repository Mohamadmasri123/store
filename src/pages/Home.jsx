import React,{useContext} from 'react'

import { ProductContext } from '../contexts/ProductContext';
import Product from "./../components/Product"
// import Sidebar from '../components/Sidebar';


const Home = () => {
  const {products}=useContext(ProductContext)
  const filterProducts = products.filter(items =>{
    return (items.category==="men's clothing" || items.category==="women's clothing")

  })
  console.log(filterProducts)
  
  
  return (
    <div className='select-none'>
      <section  className=' m-16'>
        <div className="container  mx-auto">
        <div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  xl:grid-cols-5  gap-3 '>
        {
          filterProducts.map(product => {
         return(  
            <Product product={product} key={product.id}/>
           
         )})}
        </div>
        </div>   
        </section>  
        </div>
  )
}

export default Home