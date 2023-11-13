import { data } from "autoprefixer";
import { useEffect, useState } from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import Menu from "../Menu/Menu";

const PopulerItem = () => {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        let populerItem = data.filter((item) => item.category === "popular");
        setMenu(populerItem);
      });
  }, []);
  return (
    <section>
      <SectionTitle
        heder="FROM OUR MENU"
        subHeader="---Check it out---"
      ></SectionTitle>
      <div className="grid grid-cols-2 gap-4 lg:mx-20 mb-12">
        {menu.map((item) => (
          <Menu key={item._id} item={item}></Menu>
        ))}
      </div>
    </section>
  );
};

export default PopulerItem;
