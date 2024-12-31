import SectionTitle from "../../components/SectionTitle";

const FeaturedDishes = () => {
    return (
        <div className="max-w-screen-2xl mx-auto text-white bg-featured bg-cover bg-center my-10 parallax">
            <div className="relative w-full z-10 bg-black/45 py-12 px-28">
                <SectionTitle
                    title="Featured Dishes"
                    subtitle="Taste the best of the best"
                />

                <div className="flex gap-6 items-center">
                    <div className="flex-1 bg-featured bg-cover bg-center h-96 rounded-lg"></div>

                    <div className="flex-1 flex flex-col items-start gap-2">
                        <p>
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
                            chefs. Each dish is a masterpiece, combining flavors
                            and textures to create an unforgettable dining
                            experience.
                        </p>

                        <div className="flex justify-center mt-6">
                            <button className="border-b-4 border-white rounded-r-lg rounded-l-lg py-2 px-4 uppercase font-semibold">
                                read more
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturedDishes;
