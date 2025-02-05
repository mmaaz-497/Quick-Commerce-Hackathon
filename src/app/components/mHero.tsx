
"use client";
import React from "react";
import Image from "next/image";

const menuItems = [
  {
    category: "Starter Menu",
    image: "/images/starterMenu.png",
    items: [
      { name: "Alder Grilled Chinook Salmon", description: "Toasted French bread topped with romano cheddar", calories: "560 CAL", price: "32$" },
      { name: "Berries and Creme Tart", description: "Gorgonzola ricotta mozzarella taleggio", calories: "700 CAL", price: "43$" },
    ],
  },
  {
    category: "Main Course",
    image: "/images/menuHeroBurgerPic.png",
    items: [
      { name: "Optic Big Breakfast Combo Menu", description: "Toasted French bread topped with romano cheddar", calories: "560 CAL", price: "32$" },
      { name: "Cashew Chicken With Stir-Fry", description: "Gorgonzola ricotta mozzarella taleggio", calories: "700 CAL", price: "43$" },
    ],
  },
];

const MHero = () => {
  return (
    <div className="bg-gray-200 text-black px-6 md:px-16 py-10">
      {menuItems.map((menu, index) => (
        <div key={index} className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 mb-16">
          <div className="w-full lg:w-[450px]">
            <Image src={menu.image} alt="Menu Image" width={448} height={626} className="w-full rounded-lg object-cover" />
          </div>
          <div className="flex-1">
            <h2 className="text-4xl font-bold">{menu.category}</h2>
            <div className="mt-6 space-y-6">
              {menu.items.map((item, idx) => (
                <div key={idx} className="flex justify-between items-center border-b pb-4">
                  <div>
                    <h5 className="text-xl font-bold">{item.name}</h5>
                    <p className="text-gray-600">{item.description}</p>
                    <p className="text-gray-500 text-sm mt-2">{item.calories}</p>
                  </div>
                  <h5 className="text-xl font-bold text-orange-500">{item.price}</h5>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MHero;