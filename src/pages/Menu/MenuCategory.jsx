import PropTypes from "prop-types";
import ItemCard from "../../components/ItemCard";

const MenuCategory = ({ items }) => {
    return (
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 gap-6 md:grid-cols-2">
            {Array.isArray(items) &&
                items.map((item) => <ItemCard key={item._id} item={item} />)}
        </div>
    );
};

MenuCategory.propTypes = {
    items: PropTypes.array.isRequired,
};
export default MenuCategory;
