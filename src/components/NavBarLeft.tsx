'use client';

import React from 'react';
import NavBarLeftItem from '../components/NavBarLeftItem';
import Link from 'next/link';
import Image from 'next/image';
import { signOut } from 'next-auth/react';

const NavBarLeft = () => {
  return (
    <div className=" py-[20px] h-100vh border-r border-[#3a3939]">
      <Link
        href="/"
        className="hidden px-3 w-[100px] md:w-[150px] sm:flex items-center m-auto"
      >
        <Image
          src="https://media.umbraco.io/ffw-website/lvsdbo30/ffw-logo-white.svg"
          alt="logo"
          width={100}
          height={100}
        />
      </Link>
      <div>
        <div className="px-3 md:px-[30px] hidden md:block mt-[48px] text-lg font-medium text-white">
          MENU
        </div>
        <div className="items-center md:items-start mt-8 gap-6 flex flex-col">
          <NavBarLeftItem
            icon={
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 1024 1024"
                height="25"
                width="25"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M946.5 505L560.1 118.8l-25.9-25.9a31.5 31.5 0 0 0-44.4 0L77.5 505a63.9 63.9 0 0 0-18.8 46c.4 35.2 29.7 63.3 64.9 63.3h42.5V940h691.8V614.3h43.4c17.1 0 33.2-6.7 45.3-18.8a63.6 63.6 0 0 0 18.7-45.3c0-17-6.7-33.1-18.8-45.2zM568 868H456V664h112v204zm217.9-325.7V868H632V640c0-22.1-17.9-40-40-40H432c-22.1 0-40 17.9-40 40v228H238.1V542.3h-96l370-369.7 23.1 23.1L882 542.3h-96.1z"></path>
              </svg>
            }
            name="Home"
            href="/"
          />
          <NavBarLeftItem
            icon={
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                height="25"
                width="25"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fill="none" d="M0 0h24v24H0V0z"></path>
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z"></path>
              </svg>
            }
            name="Popular"
            href="/popular"
          />
          <NavBarLeftItem
            icon={
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 16 16"
                height="25"
                width="25"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4.41c1.387-1.425 4.854 1.07 0 4.277C3.146 5.48 6.613 2.986 8 4.412z"
                ></path>
                <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z"></path>
              </svg>
            }
            name="Upcoming"
            href="/upcoming"
          />
          <div className="hidden md:block px-3 md:px-[30px] mt-12 text-lg font-medium text-white">
            PERSONAL
          </div>
          <NavBarLeftItem
            icon={
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth="0"
                viewBox="0 0 24 24"
                height="30"
                width="30"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                ></path>
              </svg>
            }
            name="Logout"
            onClick={() => signOut()}
          />
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default NavBarLeft;
