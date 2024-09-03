import React from 'react'
import Typography from './shared/Typography';

const Footer: React.FC = () => {
  return (
    <footer className='bg-background-secondary flex justify-center items-center w-full h-10 lg:h-11 border-b shadow px-5 lg:px-6 xl:px-20 2xl:px-[120px]'>
      <Typography variant='p' className='text-text-tarci'>
        © Copyright 2024. Bhive Private Limited
      </Typography>
    </footer>
  )
}

export default Footer;