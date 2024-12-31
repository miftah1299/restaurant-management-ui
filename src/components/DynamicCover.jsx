const DynamicCover = ({ bgImg, title, subtitle }) => {
    return (
        <div
            className="hero h-[80vh]"
            style={{
                backgroundImage: `url(${bgImg})`,
            }}
        >
            <div className="hero-overlay bg-opacity-25"></div>
            <div className="hero-content text-neutral-content text-center bg-black/45 px-64 py-20">
                <div className="max-w-md space-y-2 text-white">
                    <h3 className="text-5xl font-bold uppercase">{title}</h3>
                    <h5 className="text-lg uppercase">{subtitle}</h5>
                </div>
            </div>
        </div>
    );
};

export default DynamicCover;
