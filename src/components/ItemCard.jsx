import React from "react";
import PropTypes from "prop-types";

const ItemCard = ({ item }) => {
    const { name, recipe, image, price } = item;
    return (
        <div className="flex gap-4 p-4">
            {/* image */}
            <img
                src={image}
                alt={name}
                className="w-24 h-24 object-cover rounded-r-full rounded-b-full"
            />
            {/* content */}
            <div className="mt-4">
                <h4 className="text-xl font-semibold">{name} -----------</h4>
                <p className="text-gray-500">{recipe}</p>
            </div>
            <p className="text-lg font-medium text-primary mt-2">${price}</p>
        </div>
    );
};
ItemCard.propTypes = {
    item: PropTypes.object.isRequired,
};

export default ItemCard;
