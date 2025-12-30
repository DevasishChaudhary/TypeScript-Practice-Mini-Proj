import {  createContext, useState, type ReactNode } from "react"
import axios from "axios";

export const ProductContext= createContext<ProductsResponse|null>(null);

export type Product={
  id:number;
  thumbnail:string;
  title:string;
  price:number;
  rating:number;
}

type ProductsResponse={
  products:Product[];
  productAPI:()=>Promise<void>
}

type ProductProviderProbs={
  children:ReactNode;
}

const ProductProvider = ({children}:ProductProviderProbs) => {
  const [products, setProducts]= useState<Product[]>([])

  const  productAPI= async(): Promise<void>=>{
    try {
      const res= await axios.get<{products:Product[]}>("https://dummyjson.com/products");
    setProducts(res.data.products);
      
    } catch (error) {
      console.log("error",error);
    }
  }
 
  return (
    <ProductContext.Provider value={{products, productAPI}}>
      {children}
    </ProductContext.Provider>
    
  )
}

export default ProductProvider