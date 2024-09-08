import React, { useEffect, useState } from 'react'
import { carousalone, carousaltwo, carousalthree, carousalfour, carousalfive, carousalsix, carousalseven } from '../assets';
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../admin/firebase';

const Carousal = () => {
  const [collections, setCollections] = useState([]);
  const [loading, setLoading] = useState(true);

  const sliderLeft = () =>{
    const slider = document.getElementById("slider1");
    slider.scrollLeft = slider.scrollLeft - 500;
  }

  const sliderRight = () =>{
    const slider = document.getElementById("slider1");
    slider.scrollLeft = slider.scrollLeft + 500;
  }

  useEffect(() => {
    const fetchCollections = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'banners'));
        const fetchedCollections = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }));
        setCollections(fetchedCollections);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching collections: ", error);
        setLoading(false);
      }
    };

    fetchCollections();
  }, []);

  return (
    <div className="w-[1850px] flex flex-row ">
      <MdChevronLeft
        onClick={sliderLeft}
        className="text-[40px] text-black ml-10 cursor-pointer opacity-50 hover:opacity-100 mt-6 md:mt-36"
      />
      <div
        id={"slider1"}
        className=" mt-8 flex-row gap-6 cursor-pointer relative flex items-center w-[1350px] h-full whitespace-nowrap scroll-smooth overflow-x-hidden"
      >
        {collections.map((banner, index) => (
          <img src={banner.image} alt="carousalone" className="h-[250px] " />
        ))}
      </div>
      <MdChevronRight
        onClick={sliderRight}
        className="text-[40px] text-black ml-2 cursor-pointer opacity-50 hover:opacity-100 mt-6 md:mt-36"
      />
    </div>
  );
}

export default Carousal