import Slider from "../../components/slider/Slider";
import FeaturedDishes from "./FeaturedDishes";
import PopularItems from "./PopularItems";
import Products from "./Products";

const Home = () => {
    return (
        <div>
            <Slider />
            <Products />
            <PopularItems />
            <FeaturedDishes />
        </div>
    );
};

export default Home;
