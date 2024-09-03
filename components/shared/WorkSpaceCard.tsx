import React from 'react';
import Image from 'next/image';

import { IWorkspace } from '@/data';
import Typography from './Typography';
import TagChip from './TagChip';
import BookingButton from './BookingButton';

const WorkSpaceCard: React.FC<IWorkspace> = ({
  name,
  images,
  day_pass_price,
  google_maps_url,
  day_pass_discounts_percentage
}) => {
  return (
    <div className='p-3 rounded-lg border border-gray-300 w-full flex flex-col justify-between'>
      <div className='flex justify-between'>
        <Typography as={'h4'} variant='h4'>
          {name}
        </Typography>
        {google_maps_url ? (
          <a
            target='_blank'
            href={google_maps_url}
            className='cursor-pointer p-1 w-[52px] h-[52px] mb-[18px] border border-gray-300 rounded-md flex flex-col gap-1 justify-center items-center'
          >
            <Image
              src={'/icons/location.svg'}
              alt='distance'
              width={36}
              height={36}
              className='w-[36px] h-[36px] object-cover'
            />
          </a>
        ) : null}
      </div>
      <div className='rounded-md w-full h-[200px] overflow-hidden relative mb-5'>
        <TagChip image_url='/icons/cowork.svg' title='Workspace' />
        <Image
          src={`/${images[0]}`}
          alt='workspace'
          width={346}
          height={200}
          className='w-full h-[200px] object-cover'
        />
      </div>
      <div className='flex gap-3'>
        <BookingButton
          button_type='secondary'
          passtype='daypass'
          price={day_pass_price}
          isDiscountAvailable
          discount={day_pass_discounts_percentage[10].message}
        />
        <BookingButton
          button_type='primary'
          passtype='bulkpass'
          price={2400}
        />
      </div>
    </div>
  );
};

export default WorkSpaceCard;
