import { useLoaderData } from "react-router-dom";
import Slider from "../components/Slider";
import TabCategory from "../components/TabCategory";

const Home = () => {
    
    return (
        <div className="container mx-auto max-w-screen-xl my-5">
            <Slider></Slider>
            <TabCategory ></TabCategory>
        </div>
    );
};

export default Home;