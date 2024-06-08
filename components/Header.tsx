"use client";

import Image from "next/image";
import Link from "next/link";
import React, { ChangeEventHandler, useState } from "react";
import { Navbar } from "./Navbar";
import {
  SearchIcon,
  OrderBasket,
  LoginIcon,
  HamburgerButtonIcon,
} from "@/assets/icon";
import { Button } from "./Button";
const Header = () => {
  const [showSearchInput, setShowSearchInput] = useState<boolean>(false);

  const handleSearchChangeInput: ChangeEventHandler<HTMLInputElement> = (e) => {
    if (e.target.value == "") {
      setTimeout(() => {
        setShowSearchInput(false);
      }, 2000);
    }
  };

  return (
    <header className="pt-[42px] md:pt-[25px]">
      <div className="container md:border-b-[1px] gap-[8px] md:gap-0 border-[#A2D0AB] px-[24px] md:px-0 flex items-center justify-between">
        <Link className="hidden md:block pb-[17px]" href={"/"}>
          <Image
            src={"/site-logo.svg"}
            width={150}
            height={34}
            alt="site-logo"
            priority={true}
          />
        </Link>
        <Navbar />
        <div className="hidden md:flex items-center space-x-[30px] pb-[11px]">
          <button
            className="flex items-center"
            onClick={() => setShowSearchInput(true)}
          >
            {!showSearchInput && <SearchIcon />}
            <input
              onChange={handleSearchChangeInput}
              className={`${
                showSearchInput ? "py-[14px] pl-[41px] w-[300px]" : "w-[0px]"
              } search-input duration-300 outline-none focus:shadow text-[14px] font-normal leading-[16px] bg-[#F8F8F8] rounded-[10px] `}
              type="text"
              placeholder="Find your plants"
              autoComplete="off"
              aria-label="Find your plants"
              name="plants-search"
            />
          </button>
          <button>
            <OrderBasket />
          </button>
          <Button
            bgBtn={false}
            title="Login"
            iconPosition="prev"
            icon={<LoginIcon />}
            buttonWidth={100}
          />
        </div>
        <input
          className="block md:hidden  py-[14px] pl-[41px] w-[90%]
         search-input duration-300 outline-none focus:shadow text-[14px] font-normal leading-[16px] bg-[#F8F8F8] rounded-[10px]"
          type="text"
          placeholder="Find your plants"
          autoComplete="off"
          aria-label="Find your plants"
          name="plants-search"
        />
        <button className="md:hidden w-[45px] h-[45px] bg-[#46A258] rounded-[14px] shadow flex items-center justify-center opacity-90">
          <HamburgerButtonIcon />
        </button>
      </div>
    </header>
  );
};

export default Header;
