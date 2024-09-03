import React from 'react';
import Image from 'next/image';

import Typography from './Typography';

const TagChip: React.FC<{ image_url: string; title: string }> = ({
  image_url,
  title,
}) => {
  return (
    <div className='absolute top-2 left-2 h-8 w-32 flex items-center p-2 gap-1 rounded-md border-[0.5px] border-opacity-50 border-primary-stroke bg-gradient-to-r from-text-primary to-[#2F4B59]'>
      <Image
        src={image_url}
        alt='tag'
        width={16}
        height={16}
        className='w-4 h-4 object-cover'
      />
      <Typography as={'p'} variant='p' className='font-bold text-primary-main drop-shadow-custom'>
        {title}
      </Typography>
    </div>
  );
};

export default TagChip;
