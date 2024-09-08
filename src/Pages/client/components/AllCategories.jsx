import React from "react";
import { Link } from "react-router-dom";

function AllCategories() {
  return (
    <div className="flex flex-col w-[30%] bg-white ml-16">
      <ul className="w-[100%]">
        <Link to="/allproducts/mobile">
          <li className="pl-3 pr-12 py-2 hover:bg-[#F7E4FF] border-l-4 border-[#Fff] hover:border-l-4 hover:border-[#450072] flex flex-row justify-start items-center gap-3 w-[200px]">
            <img src="https://m.media-amazon.com/images/I/81+GIkwqLIL._AC_UY218_.jpg" alt="imgicon" className="h-[50px]"/>Mobile</li>
        </Link>
        <Link to="/allproducts/television">
          <li className="pl-3 pr-12 py-2 hover:bg-[#F7E4FF] border-l-4 border-[#Fff] hover:border-l-4 hover:border-[#450072] flex flex-row justify-start items-center gap-3 w-[200px]">
            <img src="https://firebasestorage.googleapis.com/v0/b/grabix-demo.appspot.com/o/images%2Fcategories%2Ftelevision.webp?alt=media&token=1785f205-4822-4577-ab1e-b610cb0da395" alt="imgicon" className="h-[50px]"/>Televisions</li>
        </Link>
      </ul>
    </div>
  );
}

export default AllCategories;
