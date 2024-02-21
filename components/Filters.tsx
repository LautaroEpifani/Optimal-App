'use client';
import { formUrlQuery } from '@/sanity/utils';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useState } from 'react';

const links = ['React', 'Next', 'Docker', 'AWS', 'Node', 'MongoDB', 'Laravel'];

const Filters = () => {
  const [active, setActive] = useState('');
  const searchParams = useSearchParams();
  const router = useRouter();
  let newUrl = '';

  const handleFilter = (link: string) => {
    if (active === link) {
      setActive('');
      newUrl = formUrlQuery({
        params: searchParams.toString(),
        keysToRemove: ['technology'],
        value: null,
      });
    } else {
      setActive(link);
      newUrl = formUrlQuery({
        params: searchParams.toString(),
        key: 'technology',
        value: link.toLowerCase(),
      });
    }

    router.push(newUrl, { scroll: false });
  };

  return (
    <ul className='text-white-800 body-text no-scrollbar flex justify-center w-full max-w-full gap-2 overflow-auto py-12'>
      {links.map((link) => (
        <button
          className={`${
            active === link ? 'gradient_blue-purple' : ''
          } whitespace-nowrap rounded-lg px-7 py-2.5 capitalize`}
          key={link}
          onClick={() => handleFilter(link)}
        >
          {link}
        </button>
      ))}
    </ul>
  );
};

export default Filters;
