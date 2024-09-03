import React from 'react';
import Image from 'next/image';

import Typography from './Typography';

const Heading: React.FC<{ heading: string }> = ({ heading }) => (
  <div className='flex justify-between items-center'>
    <Typography as={'h2'} variant='h2'>
      {heading}
    </Typography>
    <Image src={'/icons/arrow_right.svg'} alt='arrow' width={30} height={20} className='block lg:hidden' />
  </div>
);

export default Heading;
