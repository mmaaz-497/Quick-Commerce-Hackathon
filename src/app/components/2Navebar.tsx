"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // For Mobile Menu Icon

interface MenuNavbarProps {
  title: string;
  breadcrumbs: { name: string; href: string }[];
}

const MenuNavbar: React.FC<MenuNavbarProps> = ({ title, breadcrumbs }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-black text-white">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <div className="text-2xl font-bold">FoodTuck</div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <Link className="text-yellow-700" href="/">Home</Link>
          <Link href="/Menu">Menu</Link>
          <Link href="/Blog">Blog</Link>
          
          <Link href="/About">About</Link>
          <Link href="/Shop">Shop</Link>
          <Link href="/Contact">Contact</Link>
        </nav>

        {/* Icons */}
        <div className="hidden md:flex items-center space-x-6">
          <Image src="/images/handBag.png" alt="Cart" width={24} height={24} />
          <Image src="/images/User.png" alt="User" width={24} height={24} />
          <Image src="/images/magnifyingGlass.png" alt="Search" width={24} height={24} />
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isMenuOpen && (
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

      {/* Page Title and Breadcrumbs */}
      <div className="relative">
        <Image
          src="/images/navebar2Pic.png"
          alt="Background"
          width={1920}
          height={410}
          className="w-full h-[300px] object-cover"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 text-center">
          <h1 className="text-3xl md:text-4xl font-bold">{title}</h1>
          <div className="text-sm text-gray-300 mt-2">
            {breadcrumbs.map((crumb, index) => (
              <span key={crumb.href}>
                <Link href={crumb.href} className="hover:underline text-white">
                  {crumb.name}
                </Link>
                {index < breadcrumbs.length - 1 && " > "}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuNavbar;
