import React from "react";
import { FaFacebookF, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer class="bg-white">
      <div
        class="max-w-[1200px] px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap justify- w-full flex-col"
        bis_skin_checked="1"
      >
        <div
          class="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left"
          bis_skin_checked="1"
        >
          <a class="flex items-center mb-4 md:mb-0 h-[32px]">
            <img src="/assets/logo.svg" alt="logo" />
          </a>
        </div>
        <div
          class="flex-grow flex md:flex-nowrap flex-wrap -mb-10 md:mt-0 mt-10 md:text-left text-center justify-center"
          bis_skin_checked="1"
        >
          <div class="lg:w-1/4 md:w-1/2 w-full px-4" bis_skin_checked="1">
            <h2 class="font-[700] text-[16px] leading-[24px] tracking-[-1%] mb-[16px]">
              SELL A HOME
            </h2>
            <nav class="list-none font-[500] text-[16px] leading-[42px] opacity-[0.6]">
              <li>
                <a class="hover:text-gray-900">Request an offer</a>
              </li>
              <li>
                <a class="hover:text-gray-900">Pricing</a>
              </li>
              <li>
                <a class="hover:text-gray-900">Reviews</a>
              </li>
              <li>
                <a class="hover:text-gray-900">Stories</a>
              </li>
            </nav>
          </div>
          <div class="lg:w-1/4 md:w-1/2 w-full px-4" bis_skin_checked="1">
            <h2 class="font-[700] text-[16px] leading-[24px] tracking-[-1%] mb-[16px]">
              ABOUT
            </h2>
            <nav class="list-none font-[500] text-[16px] leading-[42px] opacity-[0.6]">
              <li>
                <a class="hover:text-gray-800">Company</a>
              </li>
              <li>
                <a class="hover:text-gray-800">How it works</a>
              </li>
              <li>
                <a class="hover:text-gray-800">Contact</a>
              </li>
              <li>
                <a class="hover:text-gray-800">Investors</a>
              </li>
            </nav>
          </div>
          <div class="lg:w-1/4 md:w-1/2 w-full px-4" bis_skin_checked="1">
            <h2 class="font-[700] text-[16px] leading-[24px] tracking-[-1%] mb-[16px]">
              RESOURCES
            </h2>
            <nav class="list-none font-[500] text-[16px] leading-[42px] opacity-[0.6]">
              <li>
                <a class="hover:text-gray-800">Blog</a>
              </li>
              <li>
                <a class="hover:text-gray-800">Guides</a>
              </li>
              <li>
                <a class="hover:text-gray-800">FAQ</a>
              </li>
              <li>
                <a class="hover:text-gray-800">Help Center</a>
              </li>
            </nav>
          </div>
        </div>
      </div>
      <div class="border-t h-min" bis_skin_checked="1">
        <div
          class="max-w-[1200px] h-min mx-auto py-[32px] pb-[19px] px-[20px] flex flex-wrap flex-col sm:flex-row"
          bis_skin_checked="1"
        >
          <p class="text-[500] text-[16px] leading-[30px] text-center sm:text-left opacity-[0.6]">
            ©2024 NFsTay. All rights reserved
          </p>
          <span class="inline-flex sm:ml-auto sm:mt-0 mt-2 gap-[40px] justify-center sm:justify-start opacity-[0.4]">
            <a class="" href="#" target="_blank">
              <FaFacebookF size={21} color="#0B0924" />
            </a>
            <a class="" href="#" target="_blank">
              <FaInstagram size={21} color="#0B0924" />
            </a>
            <a class="" href="#" target="_blank">
              <FaTwitter size={21} color="#0B0924" />
            </a>
            <a class="" href="#" target="_blank">
              <FaLinkedin size={21} color="#0B0924" />
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
