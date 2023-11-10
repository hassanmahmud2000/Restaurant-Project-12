import PopulerItem from "../SheardItem/PopulerItem/PopulerItem";
import TextSection from "../TextSection/TextSection";
import Banner from "./Banner/Banner";
import ContuctUs from "./ContuctUs/ContuctUs";
import Fetured from "./Fetured/Fetured";
import OrderSlider from "./OrderOnlineSlider/OrderSlider";

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <OrderSlider></OrderSlider>
           <TextSection></TextSection>
           <PopulerItem></PopulerItem>
           <ContuctUs></ContuctUs>
           <Fetured></Fetured>
        </div>
    );
};

export default Home;