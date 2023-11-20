import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../SheardItem/SectionTitle/SectionTitle";


const UpdateItem = () => {
    const item = useLoaderData();
    console.log(item);
    return (
        <div>
            <SectionTitle heder='Update Item' subHeader='----Refresh----'></SectionTitle>
        </div>
    );
};

export default UpdateItem;