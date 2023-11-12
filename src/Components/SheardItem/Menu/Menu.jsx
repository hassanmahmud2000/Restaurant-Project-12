import React from "react";

const Menu = ({ item }) => {
  const { name, recipe, image, price } = item;
  return (
    <div className="flex">
      <div className="flex">
        <img
          src={image}
          alt=""
          className="w-[130px] rounded-r-full rounded-b-full"
        />
        <div className="ml-3 text-[#737373]">
          <h2 className="text-xl font-normal mb-1">{name}  ....................................</h2>
          <p className="text-base font-normal">{recipe}</p>
        </div>
      </div>
      <p className="ml-6 text-[#BB8506] text-xl font-normal">${price}</p>
    </div>
  );
};

export default Menu;
