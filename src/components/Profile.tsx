import React from 'react';
import Image from 'next/image';

type ProfileProps = {
  name: string;
  avatar: string;
};

const Profile: React.FC<ProfileProps> = ({ name, avatar }) => {
  return (
    <div className="flex gap-6 mt-[8px]">
      <span className="text-[16px] font-normal text-[#989898]">{name}</span>
      <span className="w-[28px]">
        <Image
          src={avatar}
          alt=""
          className="w-[28px] rounded-full"
          width={28}
          height={28}
        />
      </span>
    </div>
  );
};

export default Profile;
