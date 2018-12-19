import React from 'react';

// interface ISearchBoxProps {
//   searchfield: string,
//   props: any
// }

const SearchBox: React.SFC<any> = (props) => {
  let { searchfield } = props;
  return (
    <div className='pa2'>
      <input
        className='pa3 ba b--green bg-lightest-blue'
        type='search'
        value={searchfield}
        placeholder='search robots'
        {...props}
      />
    </div>
  );
}

export default SearchBox;