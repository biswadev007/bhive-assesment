import React from 'react';
import Image from 'next/image';

import Typography from './Typography';

const FlexCard: React.FC<{
  title: string;
  image_url: string;
  index: number;
}> = ({ image_url, title, index }) => {
  return (
    <div
      className={`flex flex-col lg:flex-row w-full h-20 items-center justify-start gap-4 p-3 shadow-sm lg:shadow-none rounded-md lg:rounded-none lg:p-6 ${index > 3 ? 'border-b-0' : 'lg:border-b'} border-gray-300 ${index === 3 ? 'border-r-0' : 'lg:border-r'} last:border-r-0`}
    >
      <Image
        src={image_url}
        alt='desc'
        width={24}
        height={24}
        className='h-6 w-6 object-cover'
      />
      <Typography as={'h6'} variant='h6'>
        {title}
      </Typography>
    </div>
  );
};

export default FlexCard;
