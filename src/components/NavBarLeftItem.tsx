'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';

type NavHomeItemProps = {
  href?: string;
  icon: React.ReactElement;
  name: string;
  onClick?: () => void;
};
const NavHomeItem: React.FC<NavHomeItemProps> = ({
  href,
  icon,
  name,
  onClick,
}) => {
  const pathname = usePathname();
  const router = useRouter();
  const handleClick = () => {
    if (href) {
      router.push(href);
      return;
    }
    if (onClick) {
      onClick();
    }
  };
  const isActive = pathname === href;

  return (
    <div className="cursor-pointer" onClick={handleClick}>
      <div
        className={`flex items-center hover gap-6 ${isActive ? 'active' : ''}`}
      >
        <div className="text-[#989898] color-hover w-[25px]">{icon}</div>
        <div className="text-[16px] font-medium text-[#989898] color-hover">
          {name}
        </div>
      </div>
    </div>
  );
};

export default NavHomeItem;
