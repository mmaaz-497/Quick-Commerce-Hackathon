import React from "react";

const AboutFoodMenu = () => {
  return (
    <div className="bg-white text-black flex flex-col items-center px-4 md:px-16 py-10">
      {/* Header Section */}
      <div className="text-center">
        <h2 className="text-2xl md:text-4xl font-bold">Our Food Menu</h2>
        <p className="text-sm md:text-base mt-2 max-w-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed
          pharetra dictum neque massa congue.
        </p>
      </div>

      {/* Food Category Navigation */}
      <div className="flex flex-wrap justify-center gap-4 md:gap-8 mt-6">
        {["Break Fast", "Lunch", "Dinner", "Dessert", "Drink", "Snack"].map(
          (category, index) => (
            <p
              key={index}
              className={`text-sm md:text-base font-medium ${
                index === 0 ? "text-[#FF9F0D]" : ""
              } cursor-pointer`}
            >
              {category}
            </p>
          )
        )}
      </div>

      {/* Food Items List */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
        {[...Array(8)].map((_, index) => (
          <div key={index} className="flex justify-between items-start">
            <div>
              <h5 className="text-lg md:text-xl font-bold text-[#FF9F0D]">
                Alder Grilled Chinook Salmon
              </h5>
              <p className="text-sm md:text-base mt-2">
                Toasted French bread topped with romano cheddar
              </p>
              <p className="text-xs md:text-sm mt-2">560 CAL</p>
            </div>
            <h5 className="text-lg md:text-xl font-bold text-[#FF9F0D]">$32</h5>
          </div>
        ))}
      </div>

      {/* View Menu Button */}
      <button className="text-[#FF9F0D] mt-8 text-lg font-medium hover:underline">
        View Menu
      </button>
    </div>
  );
};

export default AboutFoodMenu;
