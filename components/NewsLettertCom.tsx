import Image from "next/image";
import React from "react";
import {
  MailOutlined,
  PhoneOutlined,
  EnvironmentOutlined,
} from "@ant-design/icons";

const FooterCom = () => {
  return (
    <footer className="bg-white py-10 px-4 md:px-10 lg:px-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="text-center md:text-left">
          <Image src="/garden.svg" alt="icon" width={64} height={64} />
          <h4 className="font-bold text-lg mt-4">Garden Care</h4>
          <p className="text-sm text-gray-600 mt-2">
            We are an online plant shop offering a wide range of cheap and
            trendy plants.
          </p>
        </div>
        <div className="text-center md:text-left">
          <Image src="/plant.svg" alt="icon" width={64} height={64} />
          <h4 className="font-bold text-lg mt-4">Plant Renovation</h4>
          <p className="text-sm text-gray-600 mt-2">
            We are an online plant shop offering a wide range of cheap and
            trendy plants.
          </p>
        </div>
        <div className="text-center md:text-left">
          <Image src="/watering.svg" alt="icon" width={64} height={64} />
          <h4 className="font-bold text-lg mt-4">Watering Garden</h4>
          <p className="text-sm text-gray-600 mt-2">
            We are an online plant shop offering a wide range of cheap and
            trendy plants.
          </p>
        </div>
        <div className="text-center md:text-left">
          <h4 className="font-bold text-lg mt-4">
            Would you like to join newsletters?
          </h4>
          <div className="flex mt-4">
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full p-2 border border-gray-300 rounded-l-md"
            />
            <button className="bg-[#46A358] text-white p-2 rounded-r-md">
              Join
            </button>
          </div>
          <p className="text-sm text-gray-600 mt-2">
            We usually post offers and challenges in newsletters. We’re your
            online houseplant destination.
          </p>
        </div>
      </div>
      <div className="border-t border-gray-200 my-8"></div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex items-center justify-center md:justify-start space-x-4">
          <Image
            src="/greenshop.png"
            alt="greenshop logo"
            width={64}
            height={64}
          />
          <div>
            <p className="flex items-center text-sm text-gray-600">
              <EnvironmentOutlined className="mr-2" />
              70 West Buckingham Ave., Farmingdale, NY 11735
            </p>
            <p className="flex items-center text-sm text-gray-600">
              <MailOutlined className="mr-2" />
              contact@greenshop.com
            </p>
            <p className="flex items-center text-sm text-gray-600">
              <PhoneOutlined className="mr-2" />
              +88 01911 717 490
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-around">
          <div className="text-center md:text-left">
            <h4 className="font-bold text-lg">My Account</h4>
            <ul className="mt-4 space-y-2">
              <li className="text-sm text-gray-600">My Account</li>
              <li className="text-sm text-gray-600">Our stores</li>
              <li className="text-sm text-gray-600">Contact us</li>
              <li className="text-sm text-gray-600">Career</li>
              <li className="text-sm text-gray-600">Specials</li>
            </ul>
          </div>
          <div className="text-center md:text-left">
            <h4 className="font-bold text-lg">Help & Guide</h4>
            <ul className="mt-4 space-y-2">
              <li className="text-sm text-gray-600">Help Center</li>
              <li className="text-sm text-gray-600">How to Buy</li>
              <li className="text-sm text-gray-600">Shipping & Delivery</li>
              <li className="text-sm text-gray-600">Product Policy</li>
              <li className="text-sm text-gray-600">How to Return</li>
            </ul>
          </div>
          <div className="text-center md:text-left">
            <h4 className="font-bold text-lg">Categories</h4>
            <ul className="mt-4 space-y-2">
              <li className="text-sm text-gray-600">House Plants</li>
              <li className="text-sm text-gray-600">Potter Plants</li>
              <li className="text-sm text-gray-600">Seeds</li>
              <li className="text-sm text-gray-600">Small Plants</li>
              <li className="text-sm text-gray-600">Accessories</li>
            </ul>
          </div>
        </div>
        <div className="text-center md:text-left">
          <h4 className="font-bold text-lg">Social Media</h4>
          <div className="flex mt-4 space-x-4 justify-center md:justify-start">
            <i className="fab fa-facebook text-2xl text-gray-600"></i>
            <i className="fab fa-instagram text-2xl text-gray-600"></i>
            <i className="fab fa-twitter text-2xl text-gray-600"></i>
            <i className="fab fa-linkedin text-2xl text-gray-600"></i>
            <i className="fab fa-youtube text-2xl text-gray-600"></i>
          </div>
          <h4 className="font-bold text-lg mt-6">We accept</h4>
          <div className="flex mt-4 space-x-4 justify-center md:justify-start">
            <Image src="/paypal.png" alt="paypal" width={50} height={32} />
            <Image
              src="/mastercard.png"
              alt="mastercard"
              width={50}
              height={32}
            />
            <Image src="/visa.png" alt="visa" width={50} height={32} />
            <Image
              src="/americanexpress.png"
              alt="americanexpress"
              width={50}
              height={32}
            />
          </div>
        </div>
      </div>
      <div className="text-center text-sm text-gray-600 mt-8">
        © 2021 GreenShop. All Rights Reserved.
      </div>
    </footer>
  );
};

export default FooterCom;
