import { Helmet } from "react-helmet-async";
import Cover from "../../SheardItem/Cover/Cover";
import imgCover from "../../../assets/menu/banner3.jpg";
import dessertImg from "../../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import saladImg from "../../../assets/menu/salad-bg.jpg";
import soupImg from "../../../assets/menu/soup-bg.jpg";
import useHook from "../../Hook/useHook";
import SectionTitle from "../../SheardItem/SectionTitle/SectionTitle";
import MenuCetagory from "../../SheardItem/Menu/MenuCetagory/MenuCetagory";

const OurMenu = () => {
  const { data } = useHook();
  const dessert = data.filter((item) => item.category === "dessert");
  const pizza = data.filter((item) => item.category === "pizza");
  const salad = data.filter((item) => item.category === "salad");
  const soup = data.filter((item) => item.category === "soup");
  const offered = data.filter((item) => item.category === "offered");
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <Cover
        img={imgCover}
        title="Our Menu"
        subTitle="Would you like to try a dish?"
      ></Cover>
      {/* Offered Items */}
      <SectionTitle
        heder="TODAYS OFFER"
        subHeader="---Dont miss---"
      ></SectionTitle>
      <MenuCetagory items={offered}></MenuCetagory>
      {/* Desserts Items */}
      <MenuCetagory
        items={dessert}
        img={dessertImg}
        title="DESSERTS"
        subTitle="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      ></MenuCetagory>
      {/* Pizza Items */}
      <MenuCetagory
        items={pizza}
        img={pizzaImg}
        title="PIZZA"
        subTitle="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      ></MenuCetagory>
      {/* Salad Items */}
      <MenuCetagory
        items={salad}
        img={saladImg}
        title="SALADS"
        subTitle="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      ></MenuCetagory>
      {/* Soup Items */}
      <MenuCetagory
        items={soup}
        img={soupImg}
        title="SOUPS"
        subTitle="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      ></MenuCetagory>
    </div>
  );
};

export default OurMenu;
