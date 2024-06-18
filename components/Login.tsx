"use client";

import React, { FC, useState, ChangeEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { CloseOutlined } from "@ant-design/icons";
import { Button } from "./Button";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LoginModal: FC<LoginModalProps> = ({ isOpen, onClose }) => {
  const [isModalContent, setIsModalContent] = useState<string>("Login");

  const [loginEmail, setLoginEmail] = useState<string>("");
  const [loginPassword, setLoginPassword] = useState<string>("");

  const [registerEmail, setRegisterEmail] = useState<string>("");
  const [registerFirstName, setRegisterFirstName] = useState<string>("");
  const [registerLastName, setRegisterLastName] = useState<string>("");
  const [registerPassword, setRegisterPassword] = useState<string>("");
  const [registerConfirmPassword, setRegisterConfirmPassword] =
    useState<string>("");

  const handleLogin = () => {
    // Implement login functionality
  };

  const handleRegister = () => {
    // Implement register functionality
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded shadow-lg relative w-full max-w-[600px]">
        <button
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          <CloseOutlined />
        </button>
        <div className="text-center mb-4">
          <ul className="flex items-center space-x-3 justify-center text-[22px] font-semibold">
            <li
              onClick={() => setIsModalContent("Login")}
              className={`${
                isModalContent == "Login"
                  ? "text-[#46A358] font-medium text-[20px] leading-[16px]"
                  : ""
              }`}
            >
              Login
            </li>
            <li className="w-[1px] h-[16px] bg-[#3D3D3D]"></li>
            <li
              onClick={() => setIsModalContent("Register")}
              className={`${
                isModalContent == "Register"
                  ? "text-[#46A358] font-medium text-[20px] leading-[16px]"
                  : ""
              }`}
            >
              Register
            </li>
          </ul>
        </div>

        {isModalContent == "Login" && (
          <form className="px-[100px] pt-[50px] pb-[68px]">
            <div className="mb-4">
              <label
                className="block font-normal text-[13px] leading-[16px] text-[#3D3D3D] pb-[14px]"
                htmlFor="email"
              >
                Enter your username and password to login.
              </label>
              <input
                value={loginEmail}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setLoginEmail(e.target.value)
                }
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="almamun_uxui@outlook.com"
              />
            </div>
            <div className="mb-6">
              <input
                value={loginPassword}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setLoginPassword(e.target.value)
                }
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="***********"
              />
            </div>
            <div className="flex items-center justify-between mb-6">
              <Link
                href="/forgot-password"
                className="font-normal text-[14px] leading-[16px] text-[#46A358]"
              >
                Forgot Password?
              </Link>
            </div>
            <div className="flex items-center justify-between">
              <Button
                title="Login"
                buttonWidth={380}
                onClick={handleLogin}
                bgBtn={false}
              ></Button>
            </div>
            <div className="flex items-center justify-center text-center my-4">
              <span className="block border-[1px] border-[#EAEAEA] w-[100px] mx-2"></span>
              <span className="text-gray-600">Or login with</span>
              <span className="block border-[1px] border-[#EAEAEA] w-[100px] mx-2"></span>
            </div>
            <a href="https:google.com" target="_blank">
              <button
                className="bg-white border border-gray-300 text-gray-700 font-bold py-[10px] px-4 rounded flex items-center justify-center w-full  mb-[15px]"
                type="button"
              >
                <Image
                  src="/google-icon.svg"
                  alt="Login with Google"
                  width={20}
                  height={20}
                  className="mr-2"
                />
                Continue with Google
              </button>
            </a>
            <a href="https://facebook.com" target="_blank">
              <button
                className="bg-white border border-gray-300 text-gray-700 font-bold py-[10px] px-4 rounded flex items-center justify-center w-full"
                type="button"
              >
                <Image
                  src="/facebook-icon.svg"
                  alt="Login with Facebook"
                  width={14}
                  height={20}
                  className="mr-2"
                />
                Continue with Facebook
              </button>
            </a>
          </form>
        )}

        {isModalContent == "Register" && (
          <form className="px-[100px] py-[50px]">
            <div className="mb-[16px]">
              <label
                className="block font-normal text-[13px] leading-[16px] text-[#3D3D3D] pb-[14px]"
                htmlFor="first-name"
              >
                Enter your email and password to register.
              </label>
              <input
                value={registerFirstName}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setRegisterFirstName(e.target.value)
                }
                className="shadow appearance-none border rounded w-full py-2 px-3 text-[#A5A5A5] font-normal leading-tight focus:outline-none focus:shadow-outline"
                id="first-name"
                type="text"
                placeholder="Username"
              />
            </div>
            <input
              value={registerEmail}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setRegisterEmail(e.target.value)
              }
              className="shadow appearance-none border rounded w-full py-2 px-3 text-[#A5A5A5] font-normal leading-tight focus:outline-none focus:shadow-outline mb-[16px]"
              id="email"
              type="email"
              placeholder="Enter your email address"
            />
            <input
              value={registerPassword}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setRegisterPassword(e.target.value)
              }
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-[16px]"
              id="password"
              type="password"
              placeholder="Password"
            />
            <input
              value={registerConfirmPassword}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setRegisterConfirmPassword(e.target.value)
              }
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-[41px]"
              id="confirm-password"
              type="password"
              placeholder="Confirm Password"
            />
            <div className="flex items-center justify-between">
              <Button
                title="Register"
                buttonWidth={380}
                onClick={handleRegister}
                bgBtn={false}
              ></Button>
            </div>
            <div className="flex items-center justify-center text-center my-4">
              <span className="block border-[1px] border-[#EAEAEA] w-[100px] mx-2"></span>
              <span className="text-gray-600 whitespace-nowrap">
                Or register with
              </span>
              <span className="block border-[1px] border-[#EAEAEA] w-[100px] mx-2"></span>
            </div>
            <a href="https://google.com" target="_blank">
              <button
                className="bg-white border border-gray-300 text-gray-700 font-bold py-[10px] px-4 rounded flex items-center justify-center w-full  mb-[15px]"
                type="button"
              >
                <Image
                  src="/google-icon.svg"
                  alt="Login with Google"
                  width={20}
                  height={20}
                  className="mr-2"
                />
                Continue with Google
              </button>
            </a>
            <a href="https://facebook.com" target="_blank">
              <button
                className="bg-white border border-gray-300 text-gray-700 font-bold py-[10px] px-4 rounded flex items-center justify-center w-full"
                type="button"
              >
                <Image
                  src="/facebook-icon.svg"
                  alt="Login with Facebook"
                  width={14}
                  height={20}
                  className="mr-2"
                />
                Continue with Facebook
              </button>
            </a>
          </form>
        )}
        <div className="bg-[#46A358] w-full h-[10px] absolute bottom-0 left-0"></div>
      </div>
    </div>
  );
};

export default LoginModal;
