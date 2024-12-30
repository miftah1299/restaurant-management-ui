import { useEffect, useState } from "react";
import Heading from "../../components/Heading";
import ItemCard from "../../components/ItemCard";

const PopularItems = () => {
    const [menu, setMenu] = useState([]);
    useEffect(() => {
        fetch("menu.json")
            .then((res) => res.json())
            .then((data) => {
                const popularItems = data.filter(
                    (item) => item.category === "popular"
                );
                // console.log(popularItems);
                setMenu(popularItems);
            });
    }, []);

    return (
        <div className="max-w-screen-xl mx-auto py-10">
            <Heading title="Our Specialities" subtitle="Why Choose Us" />

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {menu.map((item) => (
                    <ItemCard key={item._id} item={item} />
                ))}
            </div>
        </div>
    );
};

export default PopularItems;
