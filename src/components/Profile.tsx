'use client';

import React from 'react';
import Image from 'next/image';
import { useSession } from 'next-auth/react';

const Profile = () => {
  const { data: session } = useSession();
  return (
    <div className="flex gap-6 mt-[8px]">
      <span className="text-[16px] font-normal text-[#989898]">
        {session?.user?.email}
      </span>
      <span className="w-[28px]">
        <Image
          src="/defaultAvatar.jpeg"
          alt="avatar"
          className="w-[28px] rounded-full"
          width={28}
          height={28}
        />
      </span>
    </div>
  );
};

export default Profile;
