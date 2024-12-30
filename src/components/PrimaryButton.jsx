import PropTypes from "prop-types";

const PrimaryButton = ({ btnText, onClick }) => {
    return (
        <div className="flex justify-center mt-10">
            <button
                onClick={onClick}
                className="border-b-2 border-black rounded-r rounded-l py-2 px-4 uppercase font-semibold"
            >
                {btnText}
            </button>
        </div>
    );
};

PrimaryButton.propTypes = {
    btnText: PropTypes.string.isRequired,
    onClick: PropTypes.func,
};
PrimaryButton.defaultProps = {
    onClick: () => {},
};
export default PrimaryButton;
