import React from 'react';

const Container: React.FC<{ children: React.ReactNode, className?: string }> = ({ children, className='' }) => (
  <article className={`px-5 lg:px-6 xl:px-20 2xl:px-[120px] ${className}`}>
    {children}
  </article>
);

export default Container;
