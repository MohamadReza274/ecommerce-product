import useProducts, { type Product } from "@/store";
import { ShoppingCartIcon } from "lucide-react";
import { Fragment } from "react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

interface Props {
  product: Product;
}

const Product = ({ product }: Props) => {
  const setProduct = useProducts((s) => s.setProduct);
  return (
    <Fragment>
      <h3 className="uppercase text-gray-600 text-lg tracking-wide">
        {product.company}
      </h3>
      <h1 className="text-3xl font-bold py-4">{product.name}</h1>
      <p className="text-gray-700">{product.description}</p>
      <div className="py-3">
        <h2 className="font-bold inline mr-2">
          ${Math.floor(product.price / 2)}
        </h2>{" "}
        <Badge className="bg-black">50%</Badge>
        <p className="line-through text-gray-600 text-lg">${product.price}</p>
      </div>

      <div className="flex items-center gap-x-2">
        <div className="flex items-center bg-gray-100 px-4 rounded py-1.5 gap-x-2">
          <button className="px-2 font-bold text-lg">-</button>
          <span className="px-2">0</span>
          <button className="px-2 font-bold text-lg">+</button>
        </div>
        <Button
          onClick={() => setProduct(product)}
          className="bg-[#FF7D1B] hover:bg-[#FFAC6A] text-gray-900 font-semibold"
        >
          <ShoppingCartIcon className="w-4 h-4 mr-2" /> Add to cart
        </Button>
      </div>
    </Fragment>
  );
};

export default Product;
