import React from 'react';
import Image from 'next/image';
import Typography from './Typography';

type ButtonType = 'primary' | 'secondary';
type PassType = 'daypass' | 'bulkpass';

interface Props {
  button_type: ButtonType;
  passtype: PassType;
  isDiscountAvailable?: boolean;
  price: number;
  discount?: string;
}

const BookingButton: React.FC<Props> = ({
  button_type,
  isDiscountAvailable = false,
  passtype,
  price,
  discount,
}) => {
  return (
    <button
      className={`relative px-3 py-2 w-full rounded-md flex items-center justify-between border-[0.5px] ${
        button_type === 'primary'
          ? 'bg-primary-light border border-primary-stroke'
          : 'bg-secondary-main border-secondary-stroke'
      }`}
    >
      {isDiscountAvailable ? (
        <div className='text-[8px] p-1 -top-[24px] rounded bg-text-primary text-secondary-main absolute transform -translate-x-1/2 transition-transform left-1/2 w-3/4'>
          {discount}
        </div>
      ) : null}
      <div className='flex flex-col items-start'>
        <Typography
          as={'p'}
          variant='p'
          className='text-text-secondary font-bold'
        >
          {passtype === 'daypass' ? 'Day Pass' : 'Bulk Pass'}
        </Typography>
        <div className='flex items-baseline'>
          <Typography as={'h4'} variant='h4'>
            ₹ {price}
          </Typography>
          <Typography as={'p'} variant='p' className='text-text-secondary'>
            {passtype === 'daypass' ? '/Day' : '/10 Days'}
          </Typography>
        </div>
      </div>
      <Image
        src={'/icons/arrow.svg'}
        alt='arrow'
        width={16}
        height={8}
        className='w-4 h-2 object-cover'
      />
    </button>
  );
};

export default BookingButton;
