// "use server";
// import HeroMobile from "@/components/HeroCarusel/HeroMobile";
// import HeroCarusel from "../components/HeroCarusel";
// import { getCategory } from "@/service/getCategory";
// import { RangeSlider } from "@/components/RangeSlider";
// import { getSize } from "@/service/getSize";
// import Link from "next/link";

// interface CategoryType {
//   id: string;
//   title: string;
//   count: string;
// }

// export default async function Home() {
//   // const categoryData:any = await getCategory()
//   const [categoryData, sizesData] = await Promise.all([
//     getCategory(),
//     getSize(),
//   ]);

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
//           <div className="flex justify-between">
//             <div className="w-[310px] bg-[#FBFBFB]">
//               <div className="p-[15px]">
//                 <h2 className="font-bold text-[18px] leading-[16px]">
//                   Categories
//                 </h2>
//                 <ul className="pl-[12px] space-y-[15px] mt-[20px] mb-[36px]">
//                   {categoryData &&
//                     Array.isArray(categoryData) &&
//                     categoryData.length > 0 &&
//                     categoryData.map((item: CategoryType) => (
//                       <li
//                         className="flex items-center justify-between"
//                         key={item.id}
//                       >
//                         <span>{item.title}</span>
//                         <span>({item.count})</span>
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
//                   {sizesData &&
//                     Array.isArray(sizesData) &&
//                     sizesData.length > 0 &&
//                     sizesData.map((item: CategoryType) => (
//                       <li
//                         className="flex items-center justify-between"
//                         key={item.id}
//                       >
//                         <span>{item.title}</span>
//                         <span>({item.count})</span>
//                       </li>
//                     ))}
//                 </ul>
//               </div>
//               <Link href={"#"}>
//                 <img
//                   className=""
//                   src="/Super-Sale2.png"
//                   alt="Plant"
//                   width={"100%"}
//                   height={470}
//                 />
//               </Link>
//             </div>
//             <div className="w-[840px]"></div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

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
