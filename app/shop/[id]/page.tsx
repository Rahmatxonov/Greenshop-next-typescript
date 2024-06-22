"use client";

import {
  FacebookIcon,
  LikeIcon,
  LinkedinIcon,
  MessageIcon,
  TwitterIcon,
} from "@/assets/icon";
import { CustomImage } from "@/components/CustomImage";
import { URL } from "@/service/request";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Interested from "../page";
import { Rate } from "antd";

interface SingleType {
  basket: boolean;
  category_id: string;
  cost: number;
  count: number;
  discount: number;
  image_url: string[];
  liked: boolean;
  product_description: string;
  product_id: string;
  product_name: string;
  product_status: string;
  short_description: string;
  size: string[];
  tags: string[];
}

const Page = ({ params }: any) => {
  const id = params.id;
  const [singleData, setSingleData] = useState<SingleType | null>(null);
  const [activeImage, setActiveImage] = useState<string>("");
  const [count, setCount] = useState<number>(1);
  const capitalizeFirstLetter = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(0, 0);
  };

  useEffect(() => {
    axios
      .get(`${URL}/product/${id}`)
      .then((response) => {
        setSingleData(response.data);
        console.log(response.data);
        setActiveImage(response.data.image_url[0]);
      })
      .catch((error) => {
        console.error("Error fetching product data:", error);
      });
  }, [id]);

  if (!singleData) {
    return <div>Loading...</div>;
  }

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount((prevCount) => prevCount - 1);
    }
  };

  const totalCost = singleData.cost * count;

  return (
    <>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="mx-auto flex justify-center flex-wrap space-x-[75px] ">
            <div className="flex items-center space-x-[46px]">
              <div className="flex flex-col items-start">
                {singleData.image_url.map((url, index) => (
                  <CustomImage
                    width={100}
                    height={100}
                    priority={true}
                    onClick={() => setActiveImage(url)}
                    key={index}
                    alt={`Image ${index + 1}`}
                    className={`object-cover object-center rounded mb-2 duration-100 cursor-pointer hover:border-2 hover:border-green-500${
                      index === 0 ? "" : ""
                    }`}
                    src={url}
                  />
                ))}
              </div>
              <div className="relative">
                <img
                  src={"/search-icon.svg"}
                  alt="search"
                  className="text-[
                  #3D3D3D] w-[15px] h-[15px] absolute top-0 right-0"
                />
                <CustomImage
                  width={400}
                  priority={false}
                  height={400}
                  alt={singleData.product_name}
                  src={activeImage || "https:dummyimage.com/400x400"}
                />
              </div>
            </div>
            <div className="max-w-[520px] w-full">
              <h2 className="text-[28px] font-bold leading-[16px] text-[#3D3D3D]">
                {singleData.product_name}
              </h2>
              <div className="flex items-center justify-between mt-[21px]">
                <p className="font-semibold text-[22px] leading-[16px] text-[#46A358]">
                  ${totalCost.toFixed(2)}
                </p>
                <span className="flex items-center mb-[11px]">
                  <Rate allowHalf defaultValue={4} />
                  <span className="font-normal text-[15px] leading-[16px] text-[#3D3D3D] ml-[11px]">
                    19 Customer Reviews
                  </span>
                </span>
              </div>
              <div className="border-[0.2px] border-[#46a35931] mt-[13px] mb-[15px]"></div>
              <h3 className="font-medium text-[15px] leading-[16px] text-[#3D3D3D] pb-[10px]">
                Short Description:
              </h3>
              <p className="font-normal text-[14px] leading-[24px] text-[#727272] pb-[24px]">
                {singleData.short_description}
              </p>
              <div className="">
                <h4 className="font-medium text-[15px] leading-[16px] text-[#3D3D3D] pb-[11px]">
                  Size:
                </h4>
                {singleData.size.map((size, index) => (
                  <p
                    key={index}
                    className="font-bold text-[18px] leading-[16px] duration-300 cursor-pointer w-[35px] h-[35px] rounded-[50%] border-[2px] border-[#EAEAEA] flex items-center justify-center hover:text-[#46A358] hover:border-[#46A358]"
                  >
                    {capitalizeFirstLetter(size)}
                  </p>
                ))}
              </div>
              <div className="flex items-center space-x-[26px] mt-[30px]">
                <div className="flex items-center space-x-[12px]">
                  <span
                    className="flex items-center justify-center w-[33px] h-[38px] bg-[#46A358] text-white rounded-[29px] hover:opacity-90 cursor-pointer"
                    onClick={handleDecrement}
                  >
                    <MinusOutlined />
                  </span>
                  <span>{count}</span>
                  <span
                    className="flex items-center justify-center w-[33px] h-[38px] bg-[#46A358] text-white rounded-[29px] hover:opacity-90 cursor-pointer"
                    onClick={handleIncrement}
                  >
                    <PlusOutlined />
                  </span>
                </div>
                <div className="flex items-center space-x-[10px]">
                  <Link
                    href={"/shop/order"}
                    className="border-[1px] border-[#46A358] hover:bg-[#46A358] hover:text-white duration-300 cursor-pointer w-[130px] h-[40px] flex items-center justify-center rounded-[6px] text-[#46A358] font-bold text-[14px] leading-[20px]"
                  >
                    BUY NOW
                  </Link>
                  <Link
                    href={"/shop/order"}
                    className="border-[1px] border-[#46A358] hover:bg-[#46A358] hover:text-white duration-300 cursor-pointer w-[130px] h-[40px] flex items-center justify-center rounded-[6px] text-[#46A358] font-bold text-[14px] leading-[20px]"
                  >
                    ADD TO CART
                  </Link>
                  <span className="flex items-center justify-center w-[40px] h-[40px] border-[1px] border-[#46A358] rounded-[6px] duration-300 hover:text-white hover:bg-[#46A358]">
                    <LikeIcon />
                  </span>
                </div>
              </div>
              <div className="mt-[26px]">
                <p className="font-normal text-[15px] leading-[16px] text-[#727272] pb-[10px]">
                  SKU: {singleData.product_id}
                </p>
                <h4 className="font-normal text-[15px] leading-[16px] text-[#727272]">
                  Categories: {singleData.product_status}
                </h4>
                <span className="flex items-center space-x-2 font-normal text-[15px] leading-[16px] text-[#727272] pt-[11px] pb-[18px]">
                  Tags:
                  {singleData.tags.map((tag, index) => (
                    <span key={index} className="text-sm text-[#3D3D3D]">
                      {tag}
                    </span>
                  ))}
                </span>
              </div>
              <div className="flex items-center space-x-[16px]">
                <h4 className="font-medium text-[15px] leading-[16px] text-[#3D3D3D]">
                  Share this products:{" "}
                </h4>
                <span className="flex items-center space-x-[16px]">
                  <Link
                    className="hover:text-[#46A358] duration-300 cursor-pointer"
                    href={"https://facebook.com"}
                    target="_blank"
                  >
                    <FacebookIcon />
                  </Link>
                  <Link
                    className="hover:text-[#46A358] duration-300 cursor-pointer"
                    href={"https://twitter.com"}
                    target="_blank"
                  >
                    <TwitterIcon />
                  </Link>
                  <Link
                    className="hover:text-[#46A358] duration-300 cursor-pointer"
                    href={"https://linkedin.com"}
                    target="_blank"
                  >
                    <LinkedinIcon />
                  </Link>
                  <Link
                    className="hover:text-[#46A358] duration-300 cursor-pointer"
                    href={"https://.com"}
                    target="_blank"
                  >
                    <MessageIcon />
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Interested />
    </>
  );
};

export default Page;
