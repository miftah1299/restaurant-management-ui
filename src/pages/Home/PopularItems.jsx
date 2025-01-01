import SectionTitle from "../../components/SectionTitle";
import ItemCard from "../../components/ItemCard";
import CustomButton from "../../components/CustomButton";
import useMenu from "../../hooks/useMenu";

const PopularItems = () => {
    const [menu] = useMenu();
    const popularItems = menu.filter((item) => item.category === "popular");

    return (
        <div className="max-w-screen-xl mx-auto py-10">
            <SectionTitle
                title="Popular Items"
                subtitle="Most loved in the town"
            />

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {popularItems.map((item) => (
                    <ItemCard key={item._id} item={item} />
                ))}
            </div>

            <CustomButton btnText="View Full Menu" />
        </div>
    );
};

export default PopularItems;
