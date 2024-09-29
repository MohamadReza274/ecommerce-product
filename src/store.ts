import { create } from "zustand";

export interface Product {
    id:number;
    name:string;
    description:string;
    price:number;
    company:string;
}

interface ProductStore {
    products:Product[];
    setProduct:(product:Product) => void;
    deleteProduct:(productId:number) => void;
}

const useProducts = create<ProductStore>()((set) => ({
    products:[] as Product[],
    setProduct: (product:Product) =>  set((store) => ({products:[...store.products,product]})),
    deleteProduct: (productId:number) => set((store) => ({products: store.products.filter(p => p.id !== productId)}))
}));


export default useProducts;