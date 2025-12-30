import { useContext, useEffect } from "react"
import { ProductContext, type Product } from "../context/Product"


const ProductList = () => {

    const context= useContext(ProductContext);

    if(!context){
        throw new Error("ProductList must be used inside Product Provider")
    }

    const {products, productAPI}= context;

    useEffect(()=>{
        productAPI();
    },[productAPI])

  return (
    <div className="product-container">
      {products.map((product:Product) => (
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

export default ProductList