import { Product } from "@/store";
import ProductComponent from "./Product";

const products:Product[] = [
    {id:1,company:"Sneaker Company",name:"Fall Limited Edition Sneakers",description:"These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.",price:250.00}
  ]

const ProductList = () => {
  return (
    <div className="flex flex-col justify-center p-4 col-span-2 max-w-md">
        {products.map(product => (<ProductComponent key={product.id} product={product} />))}
    </div>
  )
}

export default ProductList