import useHook from "../../Hook/useHook";
import SectionTitle from "../../SheardItem/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import TestimonialCard from "./TestimonialCard";

const TESTIMONIALS = () => {
  const {review} = useHook();

  return (
    <div className="my-14">
      <SectionTitle
        heder="TESTIMONIALS"
        subHeader="---What Our Clients Say---"
      ></SectionTitle>
      <div>
        <Swiper
          pagination={{
            type: "progressbar",
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {review.map((rev) => (
            <SwiperSlide key={rev._id}>
              <TestimonialCard key={rev._id} item={rev}></TestimonialCard>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TESTIMONIALS;
