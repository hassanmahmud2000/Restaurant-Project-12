import React, { useEffect, useState } from "react";
import SectionTitle from "../../SheardItem/SectionTitle/SectionTitle";
import useHook from "../../Hook/useHook";
import RecommendCard from "./RecoomendCard/RecommendCard";
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const ChefRecommend = () => {
  const {data} = useHook();
  const [recommend, setRecommend] = useState([]);
  useEffect(() => {
    let recommendItem = data.filter((item) => item.category === "salad");
    setRecommend(recommendItem);
  }, []);

  return (
    <section>
      <SectionTitle
        heder="CHEF RECOMMENDS"
        subHeader="---Should Try---"
      ></SectionTitle>
      <div className="my-16">
        <Swiper
          slidesPerView={4}
          spaceBetween={40}
          centeredSlides={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
            <div>
            {recommend.map((item) => (
                 <SwiperSlide key={item._id}><RecommendCard key={item._id} item={item}></RecommendCard></SwiperSlide>
              ))}
            </div>
              
        </Swiper>
      </div>
    </section>
  );
};

export default ChefRecommend;
