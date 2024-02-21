import React from 'react';
import { Skeleton } from '@/components/ui/skeleton';

const loading = () => {
  return (
    <main className='flex-center paddings mx-auto w-full max-w-screen-2xl flex-col'>
      <section className='nav-padding w-full'>
        <Skeleton className='w-full h-[274px] rounded-lg bg-black-200/40' />
      </section>
      <section className='nav-padding w-full'>
        <Skeleton className='w-56 h-10 bg-black-200/40' />
        <div className='mt-12 flex w-full flex-wrap justify-center gap-16 sm:justify-start'>
        <Skeleton className='w-full sm:w-[356px] h-[440px] rounded-lg bg-black-200/40' />
        <Skeleton className='w-full sm:w-[356px] h-[440px] rounded-lg bg-black-200/40' />
        <Skeleton className='w-full sm:w-[356px] h-[440px] rounded-lg bg-black-200/40' />  
        </div>
      </section>
    </main>
  );
};

export default loading;
