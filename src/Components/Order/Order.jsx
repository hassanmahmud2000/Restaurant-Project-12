import { useState } from "react";
import coverImg from "../../assets/shop/banner3.jpg";
import Cover from "../SheardItem/Cover/Cover";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useHook from "../Hook/useHook";
import OrderCart from "./OrderCart/OrderCart";
import { Helmet } from "react-helmet-async";

const Order = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const { data } = useHook();
  const dessert = data.filter((item) => item.category === "dessert");
  const pizza = data.filter((item) => item.category === "pizza");
  const salad = data.filter((item) => item.category === "salad");
  const soup = data.filter((item) => item.category === "soup");
  const drinks = data.filter((item) => item.category === "drinks");
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Order now</title>
      </Helmet>
      {/* Cover Image */}
      <Cover
        img={coverImg}
        title="OUR SHOP"
        subTitle="Would you like to try a dish?"
      ></Cover>
      {/* Tabs */}
      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList className="uppercase ml-[400px] my-16">
          <Tab>Salad</Tab>
          <Tab>pizza</Tab>
          <Tab>Soups</Tab>
          <Tab>desserts</Tab>
          <Tab>drinks</Tab>
        </TabList>
        <TabPanel>
          <div className="grid grid-cols-4 gap-4 mb-16">
            {salad.map((item) => (
              <OrderCart key={item._id} item={item}></OrderCart>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-4 gap-4 mb-16">
            {pizza.map((item) => (
              <OrderCart key={item._id} item={item}></OrderCart>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-4 gap-4 mb-16">
            {soup.map((item) => (
              <OrderCart key={item._id} item={item}></OrderCart>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-4 gap-4 mb-16">
            {dessert.map((item) => (
              <OrderCart key={item._id} item={item}></OrderCart>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-4 gap-4 mb-16">
            {drinks.map((item) => (
              <OrderCart key={item._id} item={item}></OrderCart>
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Order;
