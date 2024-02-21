import React from 'react';

interface Props {
  type: string;
  query: string;
  technology: string;
}

const Header = ({ type, query, technology }: Props) => {
  if (query && technology) {
    return (
      <h1 className='heading3 self-start text-white-800'>
        Sarch results for "{query}" in {type}{' '}
        with technology: <span className='capitalize'>{technology}</span>
      </h1>
    );
  }

  if (query) {
    return (
      <h1 className='heading3 self-start text-white-800'>
        Search results for "{query}"
      </h1>
    );
  }

  if (technology) {
    return (
      <h1 className='heading3 self-start text-white-800'>
         Technology: <span className='capitalize'>"{technology}"</span>
      </h1>
    );
  }

  return <h1 className='heading3 self-start text-white-800'>No Results</h1>;
};

export default Header;
