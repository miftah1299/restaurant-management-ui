import Heading from "../../components/Heading";
import ProductSlider from "../../components/slider/ProductSlider";

const Products = () => {
    return (
        <div className="max-w-screen-xl mx-auto py-10">
            <Heading
                subtitle="---From 11:00 am to 10:00pm---"
                title="Order online"
            />

            <ProductSlider />
        </div>
    );
};

export default Products;
