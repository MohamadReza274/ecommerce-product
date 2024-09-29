import Navbar from "./components/Navbar";
import CustomCarousel from "@/components/Caurosel";
import ProductList from "./components/ProductList";
import { useRef, useState } from "react";
import Img1 from "@/assets/images/image-product-1.jpg";
import Img2 from "@/assets/images/image-product-2.jpg";
import Img3 from "@/assets/images/image-product-3.jpg";
import Img4 from "@/assets/images/image-product-4.jpg";

const productImages = [
  { id: 1, url: Img1 },
  { id: 2, url: Img2 },
  { id: 3, url: Img3 },
  { id: 4, url: Img4 },
];

function App() {
  const ImageRef = useRef<HTMLImageElement>(null);

  const [selectImage, setSelectedImage] = useState(productImages[0]);

  const changeProductImage = (imageId: number) => {
    const img = productImages.filter((img) => img.id === imageId)[0];
    setSelectedImage(img);
  };

  return (
    <div className="font-sans">
      <Navbar />
      <main className="grid grid-col-1 sm:grid-cols-4">
        <div className="sm:p-4 col-span-2 overflow-hidden">
          <img
            ref={ImageRef}
            className="h-72 hidden sm:block rounded w-screen sm:max-w-96 mx-auto sm:w-full object-cover"
            src={selectImage.url}
          />

          {/* Carousel Mobile view */}
          <div className=" sm:hidden">
            <CustomCarousel />
          </div>

          <div
            className={`hidden sm:flex items-center justify-between mt-4 max-w-96 w-full mx-auto`}
          >
            {productImages.map((img) => (
              <a
                onClick={() => {
                  changeProductImage(img.id);
                }}
              >
                {" "}
                <img
                  key={img.id}
                  className={`rounded w-16 hover:opacity-50 ${
                    selectImage.id === img.id && "border-yellow border-2"
                  }`}
                  src={img.url}
                />
              </a>
            ))}
          </div>
        </div>

        <ProductList />
      </main>
    </div>
  );
}

export default App;
