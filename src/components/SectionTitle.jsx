import PropTypes from "prop-types";

const SectionTitle = ({ title, subtitle }) => {
    return (
        <div className="text-center py-10">
            <h5 className="text-xl text-primary capitalize pb-2">
                ---{subtitle}---
            </h5>
            <h3 className="text-4xl uppercase inline-block border-y-4 py-2 px-8">
                {title}
            </h3>
        </div>
    );
};

SectionTitle.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
};
export default SectionTitle;
