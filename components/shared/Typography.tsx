import React from 'react';

interface ITypographyProps {
  as?: React.ElementType;
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
  className?: string;
  children: React.ReactNode;
};

const Typography: React.FC<ITypographyProps> = ({
  as: Component = 'p',
  variant = 'p',
  className = '',
  children,
}) => {
  const variantStyles = {
    h1: 'lg:leading-[66px] text-xl lg:text-[58px] font-bold',
    h2: 'text-2xl lg:text-4xl font-bold',
    h3: 'text-xl lg:text-2xl font-semibold',
    h4: 'text-lg lg:text-xl font-semibold',
    h5: 'text-base lg:text-lg font-semibold',
    h6: 'text-sm lg:text-base font-semibold',
    p: 'text-sm',
    span: 'text-sm',
  };

  return (
    <Component className={`${variantStyles[variant]} ${className} `}>
      {children}
    </Component>
  );
};

export default Typography;
