import React from "react";
import Menu from "../Menu";
import Cover from "../../Cover/Cover";

const MenuCetagory = ({ items, title, subTitle, img }) => {
  return (
    <div className="mt-12">
      {title && <Cover img={img} title={title} subTitle={subTitle}></Cover>}
      <div className="grid grid-cols-2 gap-4 lg:mx-20 my-16">
        {items.map((item) => (
          <Menu key={item._id} item={item}></Menu>
        ))}
      </div>
    </div>
  );
};

export default MenuCetagory;
