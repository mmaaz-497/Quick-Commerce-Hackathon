'use client';
import React, { useState } from 'react'; 
import Link from 'next/link';
import Image from 'next/image';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';
import { Menu, X } from 'lucide-react';

const Navebar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className='relative'>
      {/* Background Image */}
      <div className='w-full h-[300px] md:h-[400px]'>
        <Image
          className='object-cover'
          src={'/images/1Pic.png'}
          alt='photo'
          width={1920}
          height={950}
        />
      </div>

      {/* Navbar */}
      <div className='absolute top-0 left-0 w-full h-[87px] text-white flex justify-between items-center px-4 md:px-12 bg-black/60'>
        {/* Authentication Buttons */}
        <div className='text-xl font-semibold hover:text-gray-600 border rounded-lg p-2 bg-yellow-600'>
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>

        {/* Logo */}
        <div className='text-xl font-semibold'>
          Foodtuck
        </div>

        {/* Desktop Menu */}
        <div className='hidden md:flex space-x-8'>
          <Link className='text-sm font-normal' href={'/Home'}>Home</Link>
          <Link className='text-sm font-normal' href={'/Menu'}>Menu</Link>
          <Link className='text-sm font-normal' href={'/Blog'}>Blog</Link>
          
          <Link className='text-sm font-normal' href={'/About'}>About</Link>
          <Link className='text-sm font-normal' href={'/Shop'}>Shop</Link>
          <Link className='text-sm font-normal' href={'/Contact'}>Contact</Link>
        </div>

        {/* Search Bar */}
        <div className='hidden md:flex w-[250px] md:w-[310px] h-[54px] border rounded-3xl items-center pl-4'>
          <input className='w-full h-full bg-transparent text-white placeholder-white outline-none' type="text" placeholder='Search....' />
        </div>


     {/* Icons */}
     <div className="hidden md:flex items-center space-x-6">
          <Image src="/images/handBag.png" alt="Cart" width={24} height={24} />
          <Image src="/images/User.png" alt="User" width={24} height={24} />
          <Image src="/images/magnifyingGlass.png" alt="Search" width={24} height={24} />
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>


     {/* Mobile Navigation Dropdown */}
     {menuOpen && (
        <div className="md:hidden bg-gray-800 text-white p-4 flex flex-col space-y-4 text-center">
          <Link href="/">Home</Link>
          <Link href="/Menu">Menu</Link>
          <Link href="/Blog">Blog</Link>
          <Link href="/Pages">Pages</Link>
          <Link href="/About">About</Link>
          <Link href="/Shop">Shop</Link>
          <Link href="/Contact">Contact</Link>
        </div>
      )}
    </div>
  );
};

export default Navebar;
