"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const blogPosts = [
  {
    image: "/images/blogPic1.png",
    title: "10 Reasons To Do A Digital Detox Challenge",
    description:
      "At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren...",
  },
  {
    image: "/images/blogPic2.png",
    title: "Traditional Soft Pretzels with Sweet Beer Cheese",
    description:
      "At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren...",
  },
  {
    image: "/images/blogPic3.png",
    title: "The Ultimate Hangover Burger Egg in a Hole Burger",
    description:
      "At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren...",
  },
  {
    image: "/images/blogPic3.png",
    title: "My Favorite Easy Black Pizza Toast Recipe",
    description:
      "At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren...",
  },
];

const BlogHero = () => {
  return (
    <div className="bg-gray-200 text-black px-6 md:px-16 py-10">
      {/* Blog Layout */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10">
        {/* Blog Posts Section */}
        <div className="flex-1 space-y-12">
          {blogPosts.map((post, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <Image
                src={post.image}
                alt="Blog Image"
                width={871}
                height={520}
                className="w-full rounded-lg"
              />
              <div className="flex items-center gap-2 mt-4 text-gray-500 text-sm">
                <Image
                  src="/images/blogCalendar.png"
                  alt="Calendar Icon"
                  width={24}
                  height={24}
                />
                <Image
                  src="/images/blogAdmin.png"
                  alt="Admin Icon"
                  width={150}
                  height={24}
                />
              </div>
              <h5 className="text-2xl font-bold mt-4">{post.title}</h5>
              <p className="text-gray-600 mt-3">{post.description}</p>
              <Link href="#" className="flex items-center text-orange-500 mt-4">
                Read More
                <Image
                  src="/images/blogArrowLineUpRight.png"
                  alt="Arrow"
                  width={18}
                  height={18}
                  className="ml-2"
                />
              </Link>
            </div>
          ))}
        </div>

        {/* Sidebar */}
        <div className="w-full lg:w-[400px]">
          <Image
            src="/images/blogSideBar.png"
            alt="Sidebar"
            width={424}
            height={2501}
            className="w-full object-cover"
          />
        </div>
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-10">
        <Image
          src="/images/blogPagination.png"
          alt="Pagination"
          width={306}
          height={51}
        />
      </div>
    </div>
  );
};

export default BlogHero;
