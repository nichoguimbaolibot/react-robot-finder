import * as React from 'react';

// interface ISearchBoxProps {
//   searchfield: string,
//   props: any
// }

// interface ISearchBoxStatelessProps {
//   searchfield: string,
//   onChange?(event: React.SyntheticEvent<HTMLInputElement>): void,
//   onMouseOver?(event: React.SyntheticEvent<HTMLInputElement>): void,
// }

const SearchBox: React.SFC<any> = (props) => {
  return (
    <div className='pa2'>
      <input
        className='pa3 ba b--green bg-lightest-blue'
        type='search'
        placeholder='search robots'
        {...props}
      />
    </div>
  );
}

export default SearchBox;