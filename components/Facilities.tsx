import React from 'react';

import Heading from './shared/Heading';
import FlexCard from './shared/FlexCard';

import { facilities } from '@/data';

const Facilities: React.FC = () => {
  return (
    <section className='mt-9'>
      <Heading heading='Why Choose us?' />
      <div className='mt-7 lg:mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-0 mb-12 lg:mb-[120px]'>
        {facilities.map(({ facility, image_url }, index) => (
          <FlexCard key={facility} title={facility} image_url={image_url} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Facilities;
