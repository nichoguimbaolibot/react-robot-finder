import * as React from 'react';

interface IScrollStatelessProps {
  children?: JSX.Element,
}

const Scroll: React.SFC<IScrollStatelessProps> = ({ children }) => {
  return (
    <div style={{ overflow: 'scroll', border: '5px solid black', height: '800px'}}>
      {children}
    </div>
  );
};

export default Scroll;