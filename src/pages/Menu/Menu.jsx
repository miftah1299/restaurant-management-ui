import { Helmet } from "react-helmet-async";
import DynamicCover from "../../components/DynamicCover";
import MenuCategory from "./MenuCategory";
import useMenu from "../../hooks/useMenu";
import SectionTitle from "../../components/SectionTitle";
import menuBg from "../../assets/menu/banner3.jpg";
import dessertBg from "../../assets/menu/dessert-bg.jpeg";
import pizzaBg from "../../assets/menu/pizza-bg.jpg";
import saladBg from "../../assets/menu/salad-bg.jpg";
import soupBg from "../../assets/menu/soup-bg.jpg";

const Menu = () => {
    const [menu] = useMenu();
    const offeredItems = menu.filter((item) => item.category === "offered");
    const dessertItems = menu.filter((item) => item.category === "dessert");
    const pizzaItems = menu.filter((item) => item.category === "pizza");
    const saladItems = menu.filter((item) => item.category === "salad");
    const soupItems = menu.filter((item) => item.category === "soup");

    return (
        <div>
            <Helmet>
                <title>BistroHub | Menu</title>
            </Helmet>

            <DynamicCover
                bgImg={menuBg}
                title="Our Menu"
                subtitle="Discover our delicious menu"
            />

            {/* Offered Items */}
            <SectionTitle subtitle="don't miss out" title="today's offer" />
            <MenuCategory items={offeredItems} />

            {/* Dessert Items */}
            <DynamicCover
                bgImg={dessertBg}
                title="desserts"
                subtitle="Discover our delicious menu"
            />
            <MenuCategory items={dessertItems} />

            {/* Pizza Items */}
            <DynamicCover
                bgImg={pizzaBg}
                title="pizza"
                subtitle="Discover our delicious menu"
            />
            <MenuCategory items={pizzaItems} />

            {/* Salad Items */}
            <DynamicCover
                bgImg={saladBg}
                title="salads"
                subtitle="Discover our delicious menu"
            />
            <MenuCategory items={saladItems} />

            {/* Soup Items */}
            <DynamicCover
                bgImg={soupBg}
                title="soups"
                subtitle="Discover our delicious menu"
            />
            <MenuCategory items={soupItems} />
        </div>
    );
};

export default Menu;
