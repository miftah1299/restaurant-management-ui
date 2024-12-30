import Heading from "../../components/Heading";
import featuredimg from "../../assets/home/featured.jpg";
import PrimaryButton from "../../components/PrimaryButton";

const FeaturedDishes = () => {
    return (
        <div className="max-w-screen-xl mx-auto py-10">
            <Heading
                title="Featured Dishes"
                subtitle="Taste the best of the best"
            />

            <div className="flex gap-6 items-center">
                <div className="flex-1">
                    <img
                        src={featuredimg}
                        alt="featured"
                        className="rounded-lg"
                    />
                </div>
                <div className="flex-1 flex flex-col items-start gap-2">
                    <p className="text-gray-500">
                        {new Date().toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                        })}
                    </p>
                    <h2 className="text-2xl font-semibold uppercase">
                        Where can i get some?
                    </h2>
                    <p>
                        Our featured dishes are crafted with the finest
                        ingredients and cooked to perfection by our expert
                        chefs. Each dish is a masterpiece, combining flavors and
                        textures to create an unforgettable dining experience.
                    </p>

                    <PrimaryButton btnText="Read more" />
                </div>
            </div>
        </div>
    );
};

export default FeaturedDishes;
