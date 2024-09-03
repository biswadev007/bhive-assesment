import React from 'react';
import Image from 'next/image';

const Header: React.FC = () => {
  return (
    <header className='flex justify-between items-center w-full h-[72px] lg:h-[90px] border-b shadow px-5 lg:px-6 xl:px-20 2xl:px-[120px]'>
      <Image
        src={'/static_assets/logo.svg'}
        alt='logo'
        width={125}
        height={40}
        className='w-32 h-10 object-contain'
      />
      <Image
        src={'/icons/call.svg'}
        alt='logo'
        width={42}
        height={42}
        className='w-[42px] h-[42px] object-cover'
      />
    </header>
  );
};

export default Header;
