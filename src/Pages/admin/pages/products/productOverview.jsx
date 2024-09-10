import React from "react";
import { useParams } from "react-router-dom";
import { formatter, getDocument } from "../../../../Helpers/firebaseHelper";

const ProductOverView = () => {
  const { productId } = useParams();
  const [data, setData] = React.useState();

  //   const getDataFromDb = React.useCallback((productId) => {}, []);

  React.useEffect(() => {
    getDocument("products", productId).then((data) => setData(data));
  }, [productId]);

  return (
    <div className="p-5">
      <p className="text-[#7451f8] h-full font-bold text-xl mb-5">
        Product Overview
      </p>
      <div className="px-5 h-full flex">
        <div className="h-full border-r">
          <div className="h-[200px] mx-2 w-[200px] border-2 shadow-md flex items-center justify-center">
            <p className="text-[#7551f88e]">Product Image</p>
          </div>
        </div>
        <div className="w-full">
          <p className="text-[#7451f8] border-b px-2 text-xl pb-3 ">Detail</p>
          <p className="text-gray-400 my-4 px-2">
            Product Name:
            <span className="text-[#7451f8] mx-3">{data?.name}</span>
          </p>
          <p className="text-gray-400 my-4 px-2">
            Product Price:
            <span className="text-[#7451f8] mx-3">
              {formatter.format(data?.price || 0)}
            </span>
          </p>
          <p className="text-gray-400 my-4 px-2">
            Product Category:
            <span className="text-[#7451f8] mx-3">{data?.category}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductOverView;
