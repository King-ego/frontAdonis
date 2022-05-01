import React from 'react';

interface IconProps {
  width?: string;
  height?: string;
  name: string;
  fill?: string;
  stroke?: string;
  className?: string;
}

const Icon: React.FC<IconProps> = (props) => {
  const { width, height, name, fill, stroke, className } = props;

  return (
    <svg
      className={className}
      width={width}
      height={height}
      fill={fill}
      stroke={stroke}
      {...props}
    >
      <use href={`/img/sprite.svg#${name}`} />
    </svg>
  );
};

export default Icon;
