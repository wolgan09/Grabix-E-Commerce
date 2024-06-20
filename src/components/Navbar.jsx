import React from "react";
import { logo } from "../assets";
import { BsCart3, BsSearch } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";
import { BiUser } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import DeliveryLocation from "./DeliveryLocation";

const Navbar = () => {
  const userData = useSelector((store) => {
    return store.userAuthReducer.user;
  });

  const cartItem = useSelector((store) => {
    return store.cartReducer.cart;
  });

  let value = 0;
  let offerValue = 0;
  cartItem.map((el) => {
    offerValue += Number(el.price);
    return (value = value+Number(el.price2))
  })
  const finalAmount = offerValue;
  offerValue = value - offerValue;
  

  // console.log(cartItem,"dd");

  const id = userData?.uid;

  return (
    <>
      <div className="bg-[#450072] flex flex-row h-[80px] w-[100%] items-center justify-around md:justify-evenly">
        <div className="flex flex-row items-center justify-evenly">
          <Link to="/">
            <img
              src={logo}
              alt="logo"
              className="h-[24px] md:h-[36px] md:ml-7"
            />
          </Link>
          <div className="h-[30px] w-[3px] bg-[#c6c6c6b8] rounded-xl ml-4"></div>
          <h1><MdLocationOn className="text-white ml-2 mt-4" /> </h1>
          <p className="text-white text-[12px] md:text-[12px] lg:text-[20px] ml-4 underline">
           <DeliveryLocation />
          </p>
        </div>
        <div>
          <input
            type="text"
            className="hidden md:flex md:w-[400px] lg:w-[800px] h-[42px] rounded-lg px-2"
            placeholder="Search for over 5000+ products"
          />
        </div>
        <BsSearch className=" sm:flex text-white text-[20px]" />
        <Link to="/cart">
          {cartItem.length == 0 ? (
            <BsCart3 className="text-[24px] text-white mr-3" />
          ) : (
            <div>
              <button
                class="py-4 px-1 relative border-2 border-transparent text-gray-800 rounded-full hover:text-gray-400 focus:outline-none focus:text-gray-500 transition duration-150 ease-in-out"
                aria-label="Cart"
              >
              <BsCart3 className="text-[24px] mr-3 text-white " />
                <span class="absolute inset-0 object-right-top -mr-6">
                  <div class="inline-flex items-center px-1.5 py-0.5 border-2 border-white rounded-full text-xs font-semibold leading-4 bg-red-500 text-white">
                  {cartItem.length}
                  </div>
                </span>
              </button>
            </div>
          )}
        </Link>
        {!id ? (
          <Link to="/login" className="text-white font-semibold hidden sm:flex">
            Login
          </Link>
        ) : (
          <Link
            to="/account"
            className="text-white font-semibold hidden sm:flex"
          >
            My Account
          </Link>
        )}


        <BiUser className="flex sm:hidden text-white text-[20px] font-semibold cursor-pointer" />
      </div>
    </>
  );
};

export default Navbar;
