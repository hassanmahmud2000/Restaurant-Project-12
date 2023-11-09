import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import img1 from "../../../assets/home/slide1.jpg";
import img2 from "../../../assets/home/slide2.jpg";
import img3 from "../../../assets/home/slide3.jpg";
import img4 from "../../../assets/home/slide4.jpg";
import img5 from "../../../assets/home/slide5.jpg";
import SectionTitle from "../../SheardItem/SectionTitle/SectionTitle";
const OrderSlider = () => {
  return (
    <div className="my-12 ">
      <SectionTitle 
      heder={'ORDER ONLINE'}
      subHeader={'---From 11:00am to 10:00pm---'}>
      </SectionTitle>
      <div className="mx-6 lg:mx-20">
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={img1} alt="" />
            <p className="text-center text-3xl font-normal -mt-20 pb-2 text-white uppercase">
              Salads
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <img src={img2} alt="" />
            <p className="text-center text-3xl font-normal -mt-20 pb-2 text-white uppercase">
              pizzas
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <img src={img3} alt="" />
            <p className="text-center text-3xl font-normal -mt-20 pb-2 text-white uppercase">
              Soups
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <img src={img4} alt="" />
            <p className="text-center text-3xl font-normal -mt-20 pb-2 text-white uppercase">
              desserts
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <img src={img5} alt="" />
            <p className="text-center text-3xl font-normal -mt-20 pb-2 text-white uppercase">
              Salads
            </p>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default OrderSlider;
