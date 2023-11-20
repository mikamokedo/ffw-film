import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Profile from '@movie/components/Profile';

const Header = () => {
  return (
    <div className="flex items-center justify-between p-5 sm:justify-end border-b border-[#3a3939]">
      <Link href="/" className="block w-[80px] sm:hidden">
        <Image
          src="https://media.umbraco.io/ffw-website/lvsdbo30/ffw-logo-white.svg"
          alt="logo"
          width={100}
          height={100}
        />
      </Link>
      <Profile />
    </div>
  );
};

export default Header;
