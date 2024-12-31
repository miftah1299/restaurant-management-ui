import { Parallax } from "react-parallax";
import PropTypes from "prop-types";

const DynamicCover = ({ bgImg, title, subtitle }) => {
    return (
        <Parallax
            blur={{ min: -50, max: 50 }}
            bgImage={bgImg}
            bgImageAlt="Our Menu"
            strength={-200}
        >
            <div className="hero h-[80vh]">
                <div className="hero-overlay bg-opacity-25"></div>
                <div className="hero-content text-neutral-content text-center bg-black/45 px-64 py-20">
                    <div className="max-w-md space-y-2 text-white">
                        <h3 className="text-5xl font-bold uppercase">
                            {title}
                        </h3>
                        <h5 className="text-lg uppercase">{subtitle}</h5>
                    </div>
                </div>
            </div>
        </Parallax>
    );
};

DynamicCover.propTypes = {
    bgImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
};
export default DynamicCover;
