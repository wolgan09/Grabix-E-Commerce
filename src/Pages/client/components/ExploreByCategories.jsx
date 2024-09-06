import React from "react";
import { BsChevronRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import {
  ebgrocery,
  ebcfruitsandvege,
  ebcpackagedfood,
  ebcfrozenfood,
  ebcmasala,
  ebcsweet
  // ebcpaan,
  // ebcbath,
  // ebcbiscuits,
  // ebcbreakfast,
  // ebccleaning,
  // ebccolddrink,
  // ebcdairy,
  // ebcelectricals,
  // ebchealth,
  // ebchomegrown,
  // ebchomeneeds,
  // ebchygiene,
  // ebcmakeup,
  // ebcmeat,
  // ebcmuni,
  // ebctea,
} from "../assets";

const ExploreByCategories = () => {
  const categories = [
    {
      src: ebcfruitsandvege,
      alt: "img"
    },
    {
      src: ebgrocery,
      alt: "img"
    },
    {
      src: ebcmasala,
      alt: "img"
    },
    {
      src: ebcsweet,
      alt: "img"
    },
    {
      src: ebcfrozenfood,
      alt: "img"
    },
    {
      src: ebcpackagedfood,
      alt: "img"
    }
  ];
  return (
    <div>
      <div className="mt-12 w-[100%] mb-8">
        <div className="flex flex-row justify-between ml-0 px-10 pb-6 sm:ml-0">
          <h2 className="text-md sm:text-xl font-semibold">Categories</h2>
          <Link
            to="/allproducts/Fruits"
            className="flex flex-row justify-center items-center gap-2 font-semibold text-[#FF3269]"
          >
            See All
            <BsChevronRight />
          </Link>
        </div>
        <div className="flex-wrap md:flex flex-row gap-x-4 box-border justify-center items-center px-10">
          <div className="flex flex-row gap-x-4">
            {categories.map((category) => (
              <a href="/allproducts/Fruits">
                <img
                  src={category.src}
                  alt="img"
                  className="h-[140px] md:h-[200px]"
                />
              </a>
            ))}
            {/* <a href="/allproducts/Fruits">
              <img
                src={ebgrocery}
                alt="img"
                className="h-[140px] md:h-[200px]"
              />
            </a> */}
          </div>
          {/* <div className="flex flex-wrap gap-x-4 gap-y-4 pt-4 xl:pt-0">
            <a href="/allproducts/Fruits">
              <img
                src={ebcmasala}
                alt="img"
                className="h-[122px] md:h-[185px]"
              />
            </a>
            <a href="/allproducts/Fruits">
              <img
                src={ebcsweet}
                alt="img"
                className="h-[122px] md:h-[185px]"
              />
            </a>
            <a href="/allproducts/Fruits">
              <img
                src={ebcfrozenfood}
                alt="img"
                className="h-[122px] md:h-[185px]"
              />
            </a>
            <a href="/allproducts/Fruits">
              <img
                src={ebcpackagedfood}
                alt="img"
                className="h-[122px] md:h-[185px]"
              />
            </a>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default ExploreByCategories;
