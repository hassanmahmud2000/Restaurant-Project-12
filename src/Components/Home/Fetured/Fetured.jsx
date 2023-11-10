import SectionTitle from "../../SheardItem/SectionTitle/SectionTitle";
import img1 from '../../../assets/home/featured.jpg'

const Fetured = () => {
  return (
    <section>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            `url${img1}`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <SectionTitle
              heder="---Check it out---"
              subHeader="FROM OUR MENU"
            ></SectionTitle>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Fetured;
