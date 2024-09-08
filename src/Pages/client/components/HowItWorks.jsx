import React from "react";
import { bestRatedProducts } from "../constant/data";
import Ratings from "./Ratings";

const HowItWorks = () => {
  return (
    <div className="mt-16 mb-4 w-full h-auto">
      <div className="flex flex-col justify-center items-center mt-8 mb-4">
        <div>
          <h2 className="text-2xl font-semibold pt-4 pb-6">
            Best Rated Products
          </h2>
        </div>
        <div className=" flex-wrap md:flex flex-row gap-x-4 box-border justify-center items-center ml-10 md:ml-0">
          {bestRatedProducts.map((item, id) => (
            <div
              key={id}
              className="w-[400px] px-8 py-12 flex flex-col justify-center items-center shadow-xl rounded-xl border-[1px] border-[#c9c8c83c]"
            >
              <img src={item.img} alt="" />
              <h2 className="text-xl font-semibold pt-4">{item.title}</h2>
              <p className="w-[240px] text-center text-sm pt-2">
                {item.description}
              </p>
              <Ratings stars={item.rating} />
            </div>
          ))}
        </div>
      </div>
      <div className="w-full h-full px-10 flex justify-center items-center">
        <div className="border-[1px] w-full flex justify-center items-center h-auto mt-20"></div>
      </div>
    </div>
  );
};

export default HowItWorks;
