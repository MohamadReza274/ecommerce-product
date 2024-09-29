import Navbar from "./components/Navbar";
import CustomCarousel from "@/components/Caurosel";
import ProductList from "./components/ProductList";
import { useRef, useState } from "react";

function App() {
  const ImageRef = useRef<HTMLImageElement>(null);

  const [selectImageId, setSelectedImageId] = useState<number>(0);

  const changeProductImage = (imageId: number) => {
    ImageRef.current?.setAttribute(
      "src",
      `src/assets/images/image-product-${imageId}.jpg`
    );
    setSelectedImageId(imageId);
  };

  return (
    <div className="font-sans">
      <Navbar />
      <main className="grid grid-col-1 sm:grid-cols-4">
        <div className="sm:p-4 col-span-2 overflow-hidden">
          <img
            ref={ImageRef}
            className="h-72 hidden sm:block rounded w-screen sm:max-w-96 mx-auto sm:w-full object-cover"
            src="src/assets/images/image-product-1.jpg"
          />

          {/* Carousel Mobile view */}
          <div className=" sm:hidden">
            <CustomCarousel />
          </div>

          <div
            className={`hidden sm:flex items-center justify-between mt-4 max-w-96 w-full mx-auto`}
          >
            {Array.from({ length: 4 }).map((_, i) => (
              <a
                onClick={() => {
                  changeProductImage(i + 1);
                }}
              >
                {" "}
                <img
                  key={i}
                  className={`rounded w-16 hover:opacity-50 ${
                    selectImageId === i + 1 && "border-yellow-700 border-2"
                  }`}
                  src={`src/assets/images/image-product-${i + 1}-thumbnail.jpg`}
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
