'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { Input } from '@/components/ui/input';
import { formUrlQuery } from '@/sanity/utils';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

const SearchForm = () => {
  const [search, setSearch] = useState('');
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      let newUrl = '';

      if (search) {
        newUrl = formUrlQuery({
          params: searchParams.toString(),
          key: 'query',
          value: search,
        });
      } else {
        newUrl = formUrlQuery({
          params: searchParams.toString(),
          keysToRemove: ['query']
        })
      }
      router.push(newUrl, { scroll: false });
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [search]);

  return (
    <form className='flex-center mx-auto mt-10 w-full sm:-mt-10 sm:px-5'>
      <label className='flex-center relative w-full max-w-3xl'>
        <Image
          className='absolute left-8 '
          src='/searchIcon.svg'
          alt='search icon'
          width={32}
          height={32}
        />
        <Input
          type='text'
          placeholder='Search project'
          className='base-regular h-fit border-0 bg-white py-6 pl-20 pr-8 text-[#333333] !ring-0 !ring-offset-0 placeholder:text-[#333333]'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </label>
    </form>
  );
};

export default SearchForm;
