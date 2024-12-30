import Slider from "../../components/slider/Slider";
import PopularItems from "./PopularItems";
import Products from "./Products";

const Home = () => {
    return (
        <div>
            <Slider />
            <Products />
            <PopularItems />
        </div>
    );
};

export default Home;
