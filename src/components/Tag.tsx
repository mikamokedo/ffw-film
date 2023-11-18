import Link from 'next/link';
import React from 'react';

export type TagProps = {
  name: string;
  id: number;
  isOutLine?: boolean;
};
const Tag: React.FC<TagProps> = ({ name, id, isOutLine }) => {
  return (
    <Link href={`${id}`}>
      <div className={isOutLine ? 'isOutLine' : 'unOutLine'}>{name}</div>
    </Link>
  );
};

export default Tag;
