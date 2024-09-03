import React from 'react';
import Image from 'next/image';

import Typography from './shared/Typography';
import Heading from './shared/Heading';

const BottomSection: React.FC = () => {
  return (
    <>
      <section className='block lg:hidden mt-12 mb-8'>
        <Heading heading='Download our app now' />
        <div className='border border-gray-200 rounded-xl shadow-xl p-3 mt-4'>
          <Image
            src={'/static_assets/app-sample.svg'}
            alt='apps'
            width={400}
            height={400}
            className='w-[400px] h-[400px] object-contain mx-auto'
          />
          <div className='flex gap-6 justify-center mt-2'>
            <Image
              src={'/static_assets/app-store.png'}
              alt='app'
              width={146}
              height={45}
              className='w-[146px] h-[45px] object-contain'
            />
            <Image
              src={'/static_assets/play-store.png'}
              alt='app'
              width={146}
              height={45}
              className='w-[146px] h-[45px] object-contain'
            />
          </div>
        </div>
      </section>
      <section className='mt-32 mb-10 hidden lg:block'>
        <Typography as={'h2'} variant='h2' className='text-gray-400'>
          Download our app now
        </Typography>
        <div className='rounded-xl shadow-2xl w-full relative grid grid-cols-2 py-7 px-14 gap-5 mt-60'>
          <Image
            src={'/static_assets/app-sample.svg'}
            alt='apps'
            width={400}
            height={470}
            className='w-[400px] h-[470px] object-contain absolute -bottom-9 left-5'
          />
          <div />
          <div>
            <Typography
              as={'h4'}
              variant='h4'
              className='font-medium text-text-secondary'
            >
              Boost your productivity with the BHIVE Workspace app. Elevate your
              workspace, collaborate efficiently, and unlock exclusive perks.
            </Typography>

            <div className='flex gap-6 mt-10'>
              <Image
                src={'/static_assets/app-store.png'}
                alt='app'
                width={146}
                height={45}
                className='w-[146px] h-[45px] object-contain'
              />
              <Image
                src={'/static_assets/play-store.png'}
                alt='app'
                width={146}
                height={45}
                className='w-[146px] h-[45px] object-contain'
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BottomSection;
