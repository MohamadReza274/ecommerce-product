import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { ShoppingCart, TrashIcon } from "lucide-react";
import useProducts, { Product } from "@/store";
import Img from "@/assets/images/image-product-1-thumbnail.jpg";
import { Badge } from "./ui/badge";
import { Fragment } from "react/jsx-runtime";

const Products = ({ products }: { products: Product[] }) => {
  const deleteProduct = useProducts((s) => s.deleteProduct);

  // Create a set to track unique product IDs
  const uniqueProducts = Array.from(
    new Map(products.map((product) => [product.id, product])).values()
  );

  return (
    <Fragment>
      {uniqueProducts.map((product) => {
        return (
          <div key={product.id} className="w-[350px] text-gray-600 p-3">
            <div className="flex items-center gap-x-3">
              <img
                src={Img}
                className="w-8 h-8 rounded-md"
                alt={product.name}
              />
              <div>
                <h3>{product.name}</h3>
                <p>
                  ${product.price} * {uniqueProducts.length} $
                  {product.price * uniqueProducts.length}
                </p>
              </div>
              <TrashIcon
                onClick={() => deleteProduct(product.id)}
                className="w-4 h-4 hover:cursor-pointer"
              />
            </div>
          </div>
        );
      })}
    </Fragment>
  );
};

const Cart = () => {
  const products = useProducts((s) => s.products);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="outline-none border-0">
        <Button variant="ghost" size="icon" className="relative">
          <ShoppingCart className="h-5 w-5" />
          {products.length > 0 && (
            <Badge className="flex items-center justify-center bg-yellow hover:bg-lightYellow absolute -top-1 right-0 rounded-full px-1.5 py-0.5">
              {products.length}
            </Badge>
          )}
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-80">
        <DropdownMenuLabel className="border-b">Cart</DropdownMenuLabel>
        {products.length <= 0 ? (
          <div className="p-4">
            <p className="p-8">Your cart is empty!</p>
          </div>
        ) : (
          <div className="flex flex-col justify-center gapy-2">
            <Products products={products} />
            <Button className="bg-yellow hover:bg-lightYellow mx-2 my-1">
              Checkout
            </Button>
          </div>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Cart;
