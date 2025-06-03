'use client';
import { useState } from 'react';
import Image from "next/image";
import SearchBar from "../components/navbar/SearchBar";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <header className="max-h-[100px] h-full md:max-h-[120px]">
      <div className="sticky top-0 z-50 bg-white py-3 md:py-2 shadow-md">
        <div className="container mx-auto px-4 py-2 md:px-0">
          <div className="flex items-center justify-between md:px-4 lg:px-0">
            <div className="flex items-center justify-center gap-5">
              {/* Desktop logo */}
              <div className="md:block hidden relative w-[150px] h-[75px]">
                <Image
                  src="/assets/images/droom-logo.png"
                  alt="Droom Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>

              {/* Desktop menu icon */}
              {/* <div className="md:block hidden relative w-[20px] h-[20px] mt-4 cursor-pointer">
                <Image
                  src="/assets/images/more.png"
                  alt="Menu"
                  fill
                  className="object-contain"
                  priority
                />
              </div> */}






<div>
      {/* Trigger Icon */}
      <div
        className="md:block hidden relative w-[20px] h-[20px] mt-4 cursor-pointer"
        onClick={() => setIsSidebarOpen(true)}
      >
        <Image
          src="/assets/images/more.png"
          alt="Menu"
          fill
          className="object-contain"
          priority
        />
      </div>

      {/* Sidebar */}
      {isSidebarOpen && (
        <div className="fixed top-0 left-0 w-64 h-full bg-white shadow-lg z-50 transition-transform duration-300">
          <button
            className="absolute top-4 right-4 text-black"
            onClick={() => setIsSidebarOpen(false)}
          >
            Close
          </button>
          <div className="p-4">
            <h2 className="text-lg font-bold">Sidebar Content</h2>
            <p>Yahan aapka data ya options ho sakta hai.</p>
          </div>
        </div>
      )}
    </div>

              {/* Mobile logo */}
              <div className="block md:hidden relative w-[100px] h-[50px]">
                <Image
                  src="/assets/images/droom-logo.png"
                  alt="Droom Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>

              {/* Mobile menu icon */}
              <div className="block md:hidden relative w-[20px] h-[20px] mt-4 cursor-pointer">
                <Image
                  src="/assets/images/more.png"
                  alt="Menu"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
            <div className="flex items-center justify-center gap-2 lg:gap-6">
              {/* Search bar for desktop view */}
              <div className="md:block hidden">
                <div className="flex max-md:justify-center w-[500px]">
                <SearchBar />
                </div>
              </div>

              {/* for both m and desktop view  login, add to cart  */}
              <div className="flex gap-8">
                <div>
                  <Image
                    src="/assets/images/add-to-cart.png"
                    alt="add to card"
                    width={30}
                    height={30}
                  />
                </div>
                <div>
                  <Image
                    src="/assets/images/customer-service.png"
                    alt="help center"
                    width={30}
                    height={30}
                  />
                </div>
                {/* help center  */}
                <div>
                  <Image
                    src="/assets/images/avatar.png"
                    alt="avatar"
                    width={30}
                    height={30}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* msite bar  */}
          <div className="block md:hidden my-2">
            <SearchBar />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
