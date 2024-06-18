import React from "react";
import { CustomImage } from "../components/CustomImage";
import {
  LikeBtn,
  LikeMobileIcon,
  OrderBasket,
  SearchIcon,
} from "@/assets/icon";
import axios from "axios";
import { URL } from "@/service/request";
import Link from "next/link";
import { IoMdHeartEmpty } from "react-icons/io";

interface PlantProductsType {
  item: any;
  setRefresh: (value: boolean) => void;
  refresh: boolean;
}

export const Product: React.FC<PlantProductsType> = ({
  item,
  setRefresh,
  refresh,
}) => {
  const handleLiked = (id: string) => {
    axios.post(`${URL}/like/${id}`, {}).then((response) => {
      setRefresh(!refresh);
    });
  };
  return (
    <div>
      <Link
        rel="preload"
        href={`/${item.product_id}`}
        className="inline-block w-[258px]"
      >
        <div className="product-box bg-[#FBFBFB] pt-[31px] pb-[18px] pl-[4px] pr-[4px] duration-150 hover:border-t-[1px] hover:border-[#46A358] relative overflow-hidden">
          <CustomImage
            src={item.image_url ? item.image_url[0] : ""}
            alt="Product Image"
            width={250}
            height={250}
          />
          <ul className="product-icons flex items-center justify-center space-x-[10px] absolute left-0 right-0 -bottom-[40px] mx-auto duration-300">
            <li
              className={`w-[35px] h-[35px] bg-[#ffffff] flex items-center justify-center rounded-[4px] duration-150 hover:text-[#46A358] ${
                item.liked ? "text-[#46A358]" : ""
              }`}
            >
              <OrderBasket />
            </li>
            <li
              onClick={() => handleLiked(item.product_id)}
              className={`w-[35px] h-[35px] bg-[#ffffff] flex items-center justify-center rounded-[4px] duration-150 ${
                item.liked ? "text-red-500" : "text-slate-600"
              }`}
            >
              <LikeBtn />
            </li>
            <li
              className={`w-[35px] h-[35px] bg-[#ffffff] flex items-center justify-center rounded-[4px] duration-150 hover:text-[#46A358]`}
            >
              <SearchIcon />
            </li>
          </ul>
          <span className="block md:hidden w-[28px] h-[28px] bg-white flex items-center justify-center rounded-[50%] absolute top-[12px] right-[11px]">
            <IoMdHeartEmpty className="text-[#46A358]" />
          </span>
        </div>
        <h2 className="text-[16px] leading-[16px] text-[#3d3d3d] mt-[12px] mb-[6px]">
          {item.product_name}
        </h2>
        <p className="text-[#46A358] text-[18px] leading-[16px] font-bold">
          {item.cost}
        </p>
      </Link>
    </div>
  );
};
