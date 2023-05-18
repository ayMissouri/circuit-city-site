import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import RelatedProducts from "../components/RelatedProducts";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";

const ProductDetails = () => {
  const { addToCart } = useContext(CartContext);
  const { id } = useParams();
  const { data } = useFetch(`/products?populate=*&filters[id][$eq]=${id}`);

  if (!data) {
    return <div className="container mx-auto">loading...</div>;
  }

  const item = data[0].attributes;

  const categoryTitle = item.categories.data[0].attributes.title;

  return (
    <div className="mb-16 pt-44 lg:pt-[30px] xl:pt-0">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-[30px] mb-[30px]">
          <div className="flex-l lg:max-w-[40%] lg:h-[540px] grad rounded-lg flex justify-center items-center">
            <img
              src={`http://mc.amissouri.com:1337${item.image.data.attributes.url}`}
              alt=""
              className="w-full"
            />
          </div>
          <div className="flex-l bg-primary p-12 xl:p-20 rounded-lg flex flex-col justify-center">
            {/* <div className="uppercase text-accent text-lg font-medium mb-2">
              {item.categories.data[0].attributes.title}
            </div> */}
            <div className="h2 mb-4 text-accent">{item.title}</div>
            <p className="mb-12">{item.description}</p>
            <div className="flex items-center gap-x-8">
              <div className="text-3xl text-accent font-semibold">
                £{item.price}
              </div>
              <button
                onClick={() => addToCart(data, id)}
                className="btn btn-accent"
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
        <RelatedProducts categoryTitle={categoryTitle} />
      </div>
    </div>
  );
};

export default ProductDetails;
