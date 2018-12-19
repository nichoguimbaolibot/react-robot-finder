import React, { ReactNode } from 'react';

interface IScrollProps {
  children: ReactNode,
}

const Scroll = ({ children }: IScrollProps) => {
  return (
    <div style={{ overflow: 'scroll', border: '5px solid black', height: '800px'}}>
      {children}
    </div>
  );
};

export default Scroll;