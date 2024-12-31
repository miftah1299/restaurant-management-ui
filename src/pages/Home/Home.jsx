import { Helmet } from "react-helmet-async";
import Slider from "../../components/slider/Slider";
import FeaturedDishes from "./FeaturedDishes";
import PopularItems from "./PopularItems";
import Products from "./Products";
import Testimonials from "./Testimonials";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>BistroHub | Home</title>
            </Helmet>
            <Slider />
            <Products />
            <PopularItems />
            <FeaturedDishes />
            <Testimonials />
        </div>
    );
};

export default Home;
