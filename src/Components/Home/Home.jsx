import PopulerItem from "../SheardItem/PopulerItem/PopulerItem";
import TextSection from "../TextSection/TextSection";
import Banner from "./Banner/Banner";
import OrderSlider from "./OrderOnlineSlider/OrderSlider";

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <OrderSlider></OrderSlider>
           <TextSection></TextSection>
           <PopulerItem></PopulerItem>
        </div>
    );
};

export default Home;