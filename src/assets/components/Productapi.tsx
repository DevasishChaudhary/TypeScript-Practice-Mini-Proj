import { useEffect, useState } from "react"
import axios from "axios";

type Product={
    id:number,
    title:string,
    price:number,
    rating:number,
    thumbnail:string,
}
type ProductResponse={
    products: Product[];
};


const Productapi = () => {
    const [products, setProducts]= useState<Product[]>([]);

   async function productFetch(){
        try {
            const res= await axios.get<ProductResponse>('https://dummyjson.com/products');
            setProducts(res.data.products)
            console.log(res.data)
            
        } catch (error) {
            console.log("error",error);  
        }
    }

    useEffect(()=>{
        productFetch();

    },[])

  return (
    <div className="product-container">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="product-img"
          />
          <h3 className="product-title">{product.title}</h3>
          <p className="product-price">${product.price}</p>
          <p className="product-rating">⭐ {product.rating}</p>
        </div>
      ))}
    </div>
  )
}

export default Productapi