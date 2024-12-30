import Slider from "../../components/slider/Slider";
import FeaturedDishes from "./FeaturedDishes";
import PopularItems from "./PopularItems";
import Products from "./Products";
import Testimonials from "./Testimonials";

const Home = () => {
    return (
        <div>
            <Slider />
            <Products />
            <PopularItems />
            <FeaturedDishes />
            <Testimonials />
        </div>
    );
};

export default Home;
