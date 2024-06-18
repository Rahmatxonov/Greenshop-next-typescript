// "use client";
// import HeroMobile from "@/components/HeroCarusel/HeroMobile";
// import HeroCarusel from "../components/HeroCarusel";
// import { RangeSlider } from "@/components/RangeSlider";
// import Link from "next/link";
// import { useEffect, useMemo, useState } from "react";
// import axios from "axios";
// import { URL } from "../service/request";
// import { Product } from "@/components/Product";
// import { Pagination } from "antd";
// import Image from "next/image";
// import SummerCom from "@/components/SummerCom";
// import BlogCom from "@/components/BlogCom";
// import NewsLettertCom from "@/components/NewsLettertCom";

// interface Categories {
//   category_id: string;
//   category_name: string;
// }

// interface PlantProductsType {
//   product_id: string;
//   product_name: string;
//   cost: string;
//   image: string;
// }

// interface SizeType {
//   size_id: number;
//   size_name: string;
// }

// interface TagNavbarType {
//   tag_id: number;
//   tag_name: string;
// }

// interface ProductType {
//   basket: boolean;
//   category_id: string;
//   cost: number;
//   count: number;
//   discount: number;
//   image_url: string;
//   liked: boolean;
//   product_description: string;
//   product_id: string;
//   product_name: string;
//   product_status: string;
//   short_description: string;
//   size: [];
//   tags: [];
// }
// function Home() {
//   const [isLoading, setIsLoading] = useState(false);
//   const [refresh, setRefresh] = useState<boolean>(false);
//   const [pages, setPaes] = useState<number>(1);
//   const [limited, setLimited] = useState<number>(10);
//   const [arrow, setArrow] = useState<string>("Show");
//   const [category, setCategory] = useState<Array<Categories>>([]);
//   const [categoriesId, setCategoriesId] = useState<string | null>(null);
//   const [tagNavbarId, setTagNavbarId] = useState<string>("");
//   const [sizeId, setSizeId] = useState<string | null>(null);
//   const [plantProducts, setPlantProduct] = useState<Array<any>>([]);
//   const mergedArrow = useMemo(() => {
//     if (arrow === "Hide") {
//       return false;
//     }
//     if (arrow === "Show") {
//       return true;
//     } else {
//       pointAtCenter: true;
//     }
//   }, [arrow]);

//   const size: SizeType[] = [
//     {
//       size_id: 1,
//       size_name: "Small",
//     },
//     {
//       size_id: 2,
//       size_name: "Medium",
//     },
//     {
//       size_id: 3,
//       size_name: "Large",
//     },
//   ];
//   const tagNavbar: TagNavbarType[] = [
//     {
//       tag_id: 1,
//       tag_name: "All Plants",
//     },
//     {
//       tag_id: 2,
//       tag_name: "New Arrivals",
//     },
//     {
//       tag_id: 3,
//       tag_name: "Sale",
//     },
//   ];

//   useEffect(() => {
//     axios.get(`${URL}/categories?page=1&limit=100`).then((res) => {
//       setCategory(res.data.categories);
//     });
//   }, []);

//   useEffect(() => {
//     axios
//       .get(`${URL}/products`, {
//         params: {
//           page: 1,
//           limit: 10,
//           name: null,
//           category: categoriesId,
//           size: sizeId,
//           min_price: null,
//           max_price: null,
//         },
//       })
//       .then((res) => {
//         setIsLoading(false);
//         setLimited(res.data.total_count);
//         setPlantProduct(res.data.products);
//       })
//       .catch((error) => {
//         setIsLoading(false);
//       });
//   }, [categoriesId, tagNavbarId]);

//   return (
//     <>
//       <section className="pt-[12px] pb-[46px]">
//         <div className="container px-5 md:px-0">
//           <HeroCarusel />
//           <HeroMobile />
//         </div>
//       </section>
//       <section>
//         <div className="container">
//           <div className="flex flex-col md:flex-row justify-between gap-x-[50px] gap-y-[30px]">
//             <div className="w-full md:w-[310px] bg-[#FBFBFB]">
//               <div className="p-[15px]">
//                 <h2 className="font-bold text-[18px] leading-[16px]">
//                   Categories
//                 </h2>
//                 <ul className="pl-[12px] space-y-[15px] mt-[20px] mb-[36px]">
//                   {category &&
//                     Array.isArray(category) &&
//                     category?.length > 0 &&
//                     category?.map((item: Categories) => (
//                       <li
//                         key={item.category_id}
//                         onClick={() => {
//                           setIsLoading(true);
//                           setTimeout(() => {
//                             setCategoriesId(item.category_name);
//                           }, 500);
//                         }}
//                         className={`flex items-center justify-between cursor-pointer ${
//                           categoriesId == item.category_name
//                             ? "text-[#46A358] font-bold"
//                             : ""
//                         }`}
//                       >
//                         <span>{item.category_name}</span>
//                       </li>
//                     ))}
//                 </ul>
//                 <h2 className="font-bold text-[18px] leading-[16px]">
//                   Price Range
//                 </h2>
//                 <RangeSlider />
//                 <h2 className="font-bold text-[18px] leading-[16px] mt-[46px]">
//                   Size
//                 </h2>
//                 <ul className="pl-[12px] space-y-[15px] mt-[20px] mb-[36px]">
//                   {size.map((item: SizeType) => (
//                     <li
//                       onClick={() => setSizeId(item.size_name)}
//                       className={`flex items-center justify-between cursor-pointer ${
//                         sizeId == item.size_name
//                           ? "text-[#46A358] font-bold"
//                           : ""
//                       }`}
//                       key={item.size_id}
//                     >
//                       <span>{item.size_name}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//               <Link href={"#"}>
//                 <Image
//                   src="/Super-Sale.png"
//                   alt="Plant"
//                   width={310}
//                   height={470}
//                   priority={true}
//                   className="mx-auto"
//                 />
//               </Link>
//             </div>
//             <div className="w-full md:w-[840px]">
//               <div className="flex flex-col md:flex-row items-center justify-between">
//                 <ul className="flex items-center space-x-[37px] mb-[20px] md:mb-0">
//                   {tagNavbar.map((item: TagNavbarType) => (
//                     <li
//                       className={` cursor-pointer ${
//                         tagNavbarId == item.tag_name
//                           ? "text-[#46A358] font-semibold border-b-[3.5px] pb-[7px] border-[#46A358]"
//                           : ""
//                       }`}
//                       onClick={() => setTagNavbarId(item.tag_name)}
//                       key={item.tag_id}
//                     >
//                       {item.tag_name}
//                     </li>
//                   ))}
//                 </ul>
//                 <div>
//                   <h2 className="text-sm md:text-base">
//                     Short by:Default sorting
//                   </h2>
//                 </div>
//               </div>
//               <ul className="mt-[31px] flex flex-wrap gap-[30px] text-center md:text-left justify-center md:justify-start">
//                 {isLoading
//                   ? "Loading..."
//                   : plantProducts.length
//                   ? plantProducts.map((item: any) => (
//                       <Product
//                         key={item.product_id}
//                         id={item.product_id}
//                         images={item.image}
//                         price={item.cost}
//                         title={item.product_name}
//                       />
//                     ))
//                   : "Empty Product..."}
//               </ul>
//               <div className="mt-[90px] flex justify-center md:justify-end">
//                 <Pagination defaultCurrent={pages} total={limited} />
//               </div>
//             </div>
//           </div>
//           <SummerCom />
//           <BlogCom />
//           <NewsLettertCom />
//         </div>
//       </section>
//     </>
//   );
// }
// export default Home;
// blogComponent

// import { ArrowRightOutlined } from "@ant-design/icons";
// import Image from "next/image";
// import React from "react";

// const BlogCom = () => {
//   return (
//     <div className="mt-[138px]">
//       <h2 className="text-center font-bold text-[30px] leading-[16px] text-[#3D3D3D] pb-[15px]">
//         Our Blog Posts
//       </h2>
//       <p className="text-center font-normal text-[16px] leading-[24px] text-[#727272] pb-[35px]">
//         We are an online plant shop offering a wide range of cheap and trendy
//         plants.{" "}
//       </p>
//       <div className="flex items-center justify-center gap-x-[44px]">
//         <div className="w-[268px]">
//           <Image
//             src={"/blogCom-img1.jpg"}
//             alt="image"
//             width={268}
//             height={195}
//             priority={true}
//           />
//           <span className="block pt-[9px] pe-[11px] pb-[12px] ps-[15px]">
//             {" "}
//             <p className="text-[#46A358] font-medium text-[14px] leading-[16px] pb-[4px]">
//               September 12 I Read in 6 minutes
//             </p>
//             <h4 className="font-bold text-[20px] leading-[26px] text-[#3D3D3D] pb-[4px]">
//               Cactus & Succulent Care Tips
//             </h4>
//             <p className="font-normal text-[14px] leading-[22px] text-[#727272] pb-[9px]">
//               Cacti are succulents are easy plants for any home or patio.
//             </p>
//             <button className="duration-200 cursor-pointer hover:text-[#46A358]">
//               Read More <ArrowRightOutlined className="pl-[6px]" />
//             </button>
//           </span>
//         </div>
//         <div className="w-[268px]">
//           <Image
//             src={"/blogCom-img1.jpg"}
//             alt="image"
//             width={268}
//             height={195}
//             priority={true}
//           />
//           <span className="block pt-[9px] pe-[11px] pb-[12px] ps-[15px]">
//             {" "}
//             <p className="text-[#46A358] font-medium text-[14px] leading-[16px] pb-[4px]">
//               September 12 I Read in 6 minutes
//             </p>
//             <h4 className="font-bold text-[20px] leading-[26px] text-[#3D3D3D] pb-[4px]">
//               Cactus & Succulent Care Tips
//             </h4>
//             <p className="font-normal text-[14px] leading-[22px] text-[#727272] pb-[9px]">
//               Cacti are succulents are easy plants for any home or patio.
//             </p>
//             <button className="duration-200 cursor-pointer hover:text-[#46A358]">
//               Read More <ArrowRightOutlined className="pl-[6px]" />
//             </button>
//           </span>
//         </div>
//         <div className="w-[268px]">
//           <Image
//             src={"/blogCom-img1.jpg"}
//             alt="image"
//             width={268}
//             height={195}
//             priority={true}
//           />
//           <span className="block pt-[9px] pe-[11px] pb-[12px] ps-[15px]">
//             {" "}
//             <p className="text-[#46A358] font-medium text-[14px] leading-[16px] pb-[4px]">
//               September 12 I Read in 6 minutes
//             </p>
//             <h4 className="font-bold text-[20px] leading-[26px] text-[#3D3D3D] pb-[4px]">
//               Cactus & Succulent Care Tips
//             </h4>
//             <p className="font-normal text-[14px] leading-[22px] text-[#727272] pb-[9px]">
//               Cacti are succulents are easy plants for any home or patio.
//             </p>
//             <button className="duration-200 cursor-pointer hover:text-[#46A358]">
//               Read More <ArrowRightOutlined className="pl-[6px]" />
//             </button>
//           </span>
//         </div>
//         <div className="w-[268px]">
//           <Image
//             src={"/blogCom-img1.jpg"}
//             alt="image"
//             width={268}
//             height={195}
//             priority={true}
//           />
//           <span className="block pt-[9px] pe-[11px] pb-[12px] ps-[15px]">
//             {" "}
//             <p className="text-[#46A358] font-medium text-[14px] leading-[16px] pb-[4px]">
//               September 12 I Read in 6 minutes
//             </p>
//             <h4 className="font-bold text-[20px] leading-[26px] text-[#3D3D3D] pb-[4px]">
//               Cactus & Succulent Care Tips
//             </h4>
//             <p className="font-normal text-[14px] leading-[22px] text-[#727272] pb-[9px]">
//               Cacti are succulents are easy plants for any home or patio.
//             </p>
//             <button className="duration-200 cursor-pointer hover:text-[#46A358]">
//               Read More <ArrowRightOutlined className="pl-[6px]" />
//             </button>
//           </span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BlogCom;

// RangeSlider

// "use client";
// import React, { useState } from "react";
// import { Slider } from "antd";
// import { Button } from "./Button";

// interface RangeType {
//   setRangeValue: (value: number[]) => void;
// }
// export const RangeSlider = ({ setRangeValue }) => {
//   const [values, setValues] = useState<number[]>([99, 800]);
//   const onChangeComplete = (value: number[]) => {
//     setValues(value);
//     setRangeValue(value);
//   };
//   return (
//     <div>
//       <Slider
//         range
//         step={1}
//         defaultValue={values}
//         min={39}
//         max={1500}
//         onChangeComplete={onChangeComplete}
//       />
//       <p>
//         <span className="text-[15px] leading-[16px]"> Price:</span>
//         <span className="font-semibold text-[#46A358] ml-2">
//           {" "}
//           {Array.isArray(values) ? values[0] : values}$ -
//         </span>
//         <span className="font-semibold text-[#46A358]">
//           {Array.isArray(values) ? values[values.length - 1] : values}$
//         </span>
//       </p>
//       <br />
//       <Button bgBtn={false} title="Filter" buttonWidth={90} />
//     </div>
//   );
// };

// fetch page

// "use client";
// import HeroMobile from "@/components/HeroCarusel/HeroMobile";
// import HeroCarusel from "../components/HeroCarusel";
// import { RangeSlider } from "@/components/RangeSlider";
// import Link from "next/link";
// import { useEffect, useMemo, useState } from "react";
// import { URL } from "../service/request";
// import { Product } from "@/components/Product";
// import { Pagination } from "antd";
// import Image from "next/image";
// import SummerCom from "@/components/SummerCom";
// import BlogCom from "@/components/BlogCom";

// interface Categories {
//   category_id: string;
//   category_name: string;
// }

// interface PlantProductsType {
//   product_id: string;
//   product_name: string;
//   cost: string;
//   image: string;
// }

// interface SizeType {
//   size_id: number;
//   size_name: string;
// }

// interface TagNavbarType {
//   tag_id: number;
//   tag_name: string;
// }

// interface ProductType {
//   basket: boolean;
//   category_id: string;
//   cost: number;
//   count: number;
//   discount: number;
//   image_url: string;
//   liked: boolean;
//   product_description: string;
//   product_id: string;
//   product_name: string;
//   product_status: string;
//   short_description: string;
//   size: [];
//   tags: [];
// }

// function Home() {
//   const [isLoading, setIsLoading] = useState(false);
//   const [refresh, setRefresh] = useState<boolean>(false);
//   const [pages, setPages] = useState<number>(1);
//   const [limited, setLimited] = useState<number>(10);
//   const [arrow, setArrow] = useState<string>("Show");
//   const [category, setCategory] = useState<Array<Categories>>([]);
//   const [categoriesId, setCategoriesId] = useState<string | null>(null);
//   const [tagNavbarId, setTagNavbarId] = useState<string>("");
//   const [sizeId, setSizeId] = useState<string | null>(null);
//   const [priceRange, setPriceRange] = useState<number[]>([39, 1500]);
//   const [plantProducts, setPlantProduct] = useState<Array<ProductType>>([]);

//   const mergedArrow = useMemo(() => {
//     if (arrow === "Hide") {
//       return false;
//     }
//     if (arrow === "Show") {
//       return true;
//     } else {
//       pointAtCenter: true;
//     }
//   }, [arrow]);

//   const size: SizeType[] = [
//     {
//       size_id: 1,
//       size_name: "Small",
//     },
//     {
//       size_id: 2,
//       size_name: "Medium",
//     },
//     {
//       size_id: 3,
//       size_name: "Large",
//     },
//   ];

//   const tagNavbar: TagNavbarType[] = [
//     {
//       tag_id: 1,
//       tag_name: "All Plants",
//     },
//     {
//       tag_id: 2,
//       tag_name: "New Arrivals",
//     },
//     {
//       tag_id: 3,
//       tag_name: "Sale",
//     },
//   ];

//   useEffect(() => {
//     fetch(`${URL}/categories?page=1&limit=100`)
//       .then((res) => res.json())
//       .then((data) => {
//         setCategory(data.categories);
//       })
//       .catch((error) => {
//         console.error("Error fetching categories:", error);
//       });
//   }, []);

//   useEffect(() => {
//     setIsLoading(true);
//     fetch(
//       `${URL}/products?page=1&limit=10&category=${categoriesId || ""}&size=${
//         sizeId || ""
//       }&min_price=${priceRange ? priceRange[0] : 0}&max_price=${
//         priceRange ? priceRange[1] : 0
//       }`
//     )
//       .then((res) => res.json())
//       .then((data) => {
//         setIsLoading(false);
//         setLimited(data.total_count);
//         setPlantProduct(data.products);
//       })
//       .catch((error) => {
//         setIsLoading(false);
//         console.error("Error fetching products:", error);
//       });
//   }, [categoriesId, sizeId, priceRange]);

//   return (
//     <>
//       <section className="pt-[12px] pb-[46px]">
//         <div className="container px-5 md:px-0">
//           <HeroCarusel />
//           <HeroMobile />
//         </div>
//       </section>
//       <section>
//         <div className="container">
//           <div className="flex flex-col md:flex-row justify-between gap-x-[50px] gap-y-[30px]">
//             <div className="w-full md:w-[310px] bg-[#FBFBFB]">
//               <div className="p-[15px]">
//                 <h2 className="font-bold text-[18px] leading-[16px]">
//                   Categories
//                 </h2>
//                 <ul className="pl-[12px] space-y-[15px] mt-[20px] mb-[36px]">
//                   {category &&
//                     Array.isArray(category) &&
//                     category?.length > 0 &&
//                     category?.map((item: Categories) => (
//                       <li
//                         key={item.category_id}
//                         onClick={() => {
//                           setIsLoading(true);
//                           setTimeout(() => {
//                             setCategoriesId(item.category_name);
//                           }, 500);
//                         }}
//                         className={`flex items-center justify-between cursor-pointer ${
//                           categoriesId == item.category_name
//                             ? "text-[#46A358] font-bold"
//                             : ""
//                         }`}
//                       >
//                         <span>{item.category_name}</span>
//                       </li>
//                     ))}
//                 </ul>
//                 <h2 className="font-bold text-[18px] leading-[16px]">
//                   Price Range
//                 </h2>
//                 <RangeSlider setRangeValue={setPriceRange} />
//                 <h2 className="font-bold text-[18px] leading-[16px] mt-[46px]">
//                   Size
//                 </h2>
//                 <ul className="pl-[12px] space-y-[15px] mt-[20px] mb-[36px]">
//                   {size?.map((item: SizeType) => (
//                     <li
//                       onClick={() => setSizeId(item.size_name)}
//                       className={`flex items-center justify-between cursor-pointer ${
//                         sizeId == item.size_name
//                           ? "text-[#46A358] font-bold"
//                           : ""
//                       }`}
//                       key={item.size_id}
//                     >
//                       <span>{item.size_name}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//               <Link href={"#"}>
//                 <Image
//                   src="/Super-Sale2.png"
//                   alt="Plant"
//                   width={310}
//                   height={470}
//                   priority={true}
//                   className="mx-auto hidden md:block"
//                 />
//               </Link>
//             </div>
//             <div className="w-full md:w-[840px]">
//               <div className="flex flex-col md:flex-row items-center justify-between">
//                 <ul className="flex items-center space-x-[37px] mb-[20px] md:mb-0">
//                   {tagNavbar.map((item: TagNavbarType) => (
//                     <li
//                       className={`cursor-pointer ${
//                         tagNavbarId == item.tag_name
//                           ? "text-[#46A358] font-semibold border-b-[3.5px] pb-[7px] border-[#46A358]"
//                           : ""
//                       }`}
//                       onClick={() => setTagNavbarId(item.tag_name)}
//                       key={item.tag_id}
//                     >
//                       {item.tag_name}
//                     </li>
//                   ))}
//                 </ul>
//                 <div>
//                   Short by: Default sorting
//                   <select>
//                     <option>Title Sort</option>
//                     <option> Price Sort</option>
//                   </select>
//                 </div>
//               </div>
//               <ul className="mt-[31px] flex flex-wrap gap-[30px] text-center md:text-left justify-center md:justify-start">
//                 {isLoading
//                   ? "Loading..."
//                   : plantProducts?.length
//                   ? plantProducts.map((item: ProductType) => (
//                       <Product
//                         setRefresh={setRefresh}
//                         refresh={refresh}
//                         key={item.product_id}
//                         item={item}
//                       />
//                     ))
//                   : "Empty Product..."}
//               </ul>
//               <div className="mt-[90px] flex justify-center md:justify-end">
//                 <Pagination defaultCurrent={pages} total={limited} />
//               </div>
//             </div>
//           </div>
//           <SummerCom />
//           <BlogCom />
//         </div>
//       </section>
//     </>
//   );
// }

// export default Home;

// header

// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import React, { ChangeEventHandler, useState } from "react";
// import { Navbar } from "./Navbar";
// import {
//   SearchIcon,
//   OrderBasket,
//   LoginIcon,
//   HamburgerButtonIcon,
// } from "@/assets/icon";
// import { Button } from "./Button";
// import { usePathname } from "next/navigation";

// interface LinkType {
//   id: number;
//   title: string;
//   path: string;
//   isActive: boolean;
// }
// const Header = () => {
//   const pathname = usePathname();
//   const [showSearchInput, setShowSearchInput] = useState<boolean>(false);
//   const [openModal, setOpenModal] = useState<boolean>(false);
//   const [loginModal, setLoginModal] = useState<boolean>(false);

//   const navList = [
//     {
//       id: 1,
//       title: "Home",
//       path: "/",
//       isActive: pathname == "/" ? true : false,
//     },
//     {
//       id: 2,
//       title: "Shop",
//       path: "/shop",
//       isActive: pathname == "/shop" ? true : false,
//     },
//     {
//       id: 3,
//       title: "Plant Care",
//       path: "/plant",
//       isActive: pathname == "/plant" ? true : false,
//     },
//     {
//       id: 4,
//       title: "Blogs",
//       path: "/blogs",
//       isActive: pathname == "/blogs" ? true : false,
//     },
//   ];
//   const handleSearchChangeInput: ChangeEventHandler<HTMLInputElement> = (e) => {
//     if (e.target.value == "") {
//       setTimeout(() => {
//         setShowSearchInput(false);
//       }, 2000);
//     }
//   };

//   const closeModal = (e: React.MouseEvent) => {
//     if ((e.target as HTMLButtonElement).id == "modal-wrapper")
//       setOpenModal(false);
//   };

//   const loginModalOPen = () => {};

//   return (
//     <header className="pt-[42px] md:pt-[25px]">
//       <div className="container md:border-b-[1px] gap-[8px] md:gap-0 border-[#A2D0AB] px-[24px] md:px-0 flex items-center justify-between">
//         <Link className="hidden md:block pb-[17px]" href={"/"}>
//           <Image
//             src={"/site-logo.svg"}
//             width={150}
//             height={34}
//             alt="site-logo"
//             priority={true}
//           />
//         </Link>
//         <Navbar />
//         <div className="hidden md:flex items-center space-x-[30px] pb-[11px]">
//           <button
//             className="flex items-center"
//             onClick={() => setShowSearchInput(true)}
//           >
//             {!showSearchInput && <SearchIcon />}
//             <input
//               onChange={handleSearchChangeInput}
//               className={`${
//                 showSearchInput ? "py-[14px] pl-[41px] w-[300px]" : "w-[0px]"
//               } search-input duration-300 outline-none focus:shadow text-[14px] font-normal leading-[16px] bg-[#F8F8F8] rounded-[10px] `}
//               type="text"
//               placeholder="Find your plants"
//               autoComplete="off"
//               aria-label="Find your plants"
//               name="plants-search"
//             />
//           </button>
//           <button>
//             <OrderBasket />
//           </button>
//           <Button
//             onClick={() => setLoginModal(true)}
//             bgBtn={false}
//             title="Login"
//             iconPosition="prev"
//             icon={<LoginIcon />}
//             buttonWidth={100}
//           />
//         </div>
//         <input
//           className="block md:hidden  py-[14px] pl-[41px] w-[90%]
//          search-input duration-300 outline-none focus:shadow text-[14px] font-normal leading-[16px] bg-[#F8F8F8] rounded-[10px]"
//           type="text"
//           placeholder="Find your plants"
//           autoComplete="off"
//           aria-label="Find your plants"
//           name="plants-search"
//         />
//         <button
//           onClick={() => setOpenModal(true)}
//           className="md:hidden w-[45px] h-[45px] bg-[#46A258] rounded-[14px] shadow flex items-center justify-center opacity-90"
//         >
//           <HamburgerButtonIcon />
//         </button>
//       </div>
//       <div
//         onClick={closeModal}
//         id="modal-wrapper"
//         className={` ${
//           openModal ? "left-0" : "left-[-100%]"
//         } modal duration-500 fixed top-0 z-[2] backdrop-blur-md  h-[100vh] w-full `}
//       >
//         <div
//           className={`absolute w-[80%] h-[100vh] bg-[#46A258] opacity-90 duration-500  ${
//             openModal ? "right-0" : "right-[-200%]"
//           } p-10 flex flex-col space-y-5`}
//         >
//           {navList.map((item: LinkType) => (
//             <Link
//               onClick={() => setOpenModal(false)}
//               className={`font-normal
//             pb-[31px] text-[16px] leading-[20px] text-white`}
//               key={item.id}
//               href={item.path}
//             >
//               {item.title}
//             </Link>
//           ))}
//         </div>
//       </div>
//       <div onClick={loginModalOPen}>
//         <form>
//           <input type="text" />
//           <input type="text" />
//           <button> </button>
//         </form>
//       </div>
//     </header>
//   );
// };

// export default Header;
