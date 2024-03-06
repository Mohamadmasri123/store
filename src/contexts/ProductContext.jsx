import React,{createContext,useState,useEffect} from 'react'
import ProductDetail from '../pages/ProductDetail';



export const ProductContext = createContext()


const ProductProvider = ({children}) => {
    const [products,setProducts]=useState([]);
    useEffect(()=>{
    async function fetchProduct(){
        let url=`https://fakestoreapi.com/products`;
        const response = await fetch(url);
        const data= await response.json();
        setProducts(data);
        
      
    }
    fetchProduct();


    },[])

  return (
    <div>
        <ProductContext.Provider value={{products}}>
            {children }
        </ProductContext.Provider>
    </div>
  )
}

export default ProductProvider