import SectionTitle from "../../SheardItem/SectionTitle/SectionTitle";
import img1 from "../../../assets/home/featured.jpg";

const Fetured = () => {
  return (
    <section className="mx-auto">
      <div className="">
            <SectionTitle
              heder="---Check it out---"
              subHeader="FROM OUR MENU"
            ></SectionTitle>
          </div>
      <div
        className="hero min-h-screen w-[1180px] h-[750px] bg-fixed"
        style={{
          backgroundImage: `url(${img1})`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="flex items-center justify-center">
            <img src={img1} alt="" className="w-[650px] h-[400px] pl-6" />
            <div className="text-left ml-6">
              <p className="text-2xl pb-2">March 20, 2023</p>
              <p className="text-xl pb-2">WHERE CAN I GET SOME?</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                voluptate facere, deserunt dolores maiores quod nobis quas
                quasi. Eaque repellat recusandae ad laudantium tempore
                consequatur consequuntur omnis ullam maxime tenetur.
              </p>
              <button className="border-b-4 border-l-0 border-r-0 border-t-0 hover:bg-[#CD9003] btn btn-outline mt-12 text-white font-semibold text-xl">Read more</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Fetured;
