import Link from 'next/link'
import React from 'react'

const ErrorPage = () => {
  return (
    <div className='bg-white'>
      <section>
        <h1 className='text-3xl text-center text-yellow-500'>404</h1>
        <p  className='text-2xl text-center font-semibold'>Oops! look likes something going wrong</p>
        <p   className='text-sm text-center  text-gray-600'>page can not be found we will have it figured out in no time</p>
        <p className='text-sm text-center  text-gray-600'>Menwhile check out these fresh ideas</p>
        <Link href={'/Home'}><button className='ml-[760px] border rounded-lg bg-yellow-500 px-2 py-2 text-white'>Go to home</button></Link>
      </section>
    </div>
  );
}

export default ErrorPage
