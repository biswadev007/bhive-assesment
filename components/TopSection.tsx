import React from 'react';
import Image from 'next/image';

import Typography from './shared/Typography';
import Container from './shared/Container';

const TopSection: React.FC = () => {
  return (
    <section className='grid grid-cols-1 lg:grid-cols-5 gap-2'>
      <div
        className={`col-span-3 bg-[url('/static_assets/bg-1.png')] flex items-center order-2 lg:order-1 text-center xl:text-left`}
      >
        <Container className='mx-auto lg:mx-0'>
          <Typography as={'h1'} variant='h1'>
            Host your meeting with world-class amenities. Starting at{' '}
            <span className='text-primary-main'>₹199/-!</span>
          </Typography>
        </Container>
      </div>
      <div className={`col-span-2 relative order-1 lg:order-2`}>
        <div className='absolute flex justify-end items-end w-full h-[400px] overflow-hidden right-0 top-0'>
          <Image
            src={'/static_assets/bg-2.svg'}
            alt='bg-image'
            width={400}
            height={300}
            className='w-full h-full'
          />
        </div>
        <Image
          src={'/static_assets/coworking.svg'}
          alt='cowork'
          width={388}
          height={388}
          className='w-[388px] h-[388px] object-cover mx-auto lg:mx-0'
        />
      </div>
    </section>
  );
};

export default TopSection;
