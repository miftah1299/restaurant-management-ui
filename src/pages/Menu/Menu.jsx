import { Helmet } from "react-helmet-async";
import DynamicCover from "../../components/DynamicCover";
import menuBg from "../../assets/menu/banner3.jpg";
import PopularItems from "../Home/PopularItems";

const Menu = () => {
    return (
        <div>
            <Helmet>
                <title>BistroHub | Menu</title>
            </Helmet>

            <DynamicCover bgImg={menuBg} title="Our Menu" subtitle="Discover our delicious menu" />
            <PopularItems />
            
            <DynamicCover bgImg={menuBg} title="Our Menu" subtitle="Discover our delicious menu" />
            <PopularItems />
            <DynamicCover bgImg={menuBg} title="Our Menu" subtitle="Discover our delicious menu" />
            <PopularItems />
            <DynamicCover bgImg={menuBg} title="Our Menu" subtitle="Discover our delicious menu" />
            <PopularItems />
            <DynamicCover bgImg={menuBg} title="Our Menu" subtitle="Discover our delicious menu" />
            <PopularItems />
        </div>
    );
};

export default Menu;
