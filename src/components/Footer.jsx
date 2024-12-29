const Footer = () => {
    return (
        <footer className="footer bg-gray-50 flex flex-col items-center pt-12 pb-4">
            <div className="flex flex-col items-center">
                <h1 className="text-3xl font-bold text-black">BistroHub</h1>
                <p className="text-black/50">
                    The best place to find your favorite foods and drinks
                </p>
            </div>
            <hr className="w-11/12" />

            <div className="flex gap-40 text-center text-black/50">
                <nav className="flex flex-col space-y-2">
                    <h6 className="text-lg font-bold text-black">Services</h6>
                    <a className="link link-hover">Product Support</a>
                    <a className="link link-hover">Order Tracking</a>
                    <a className="link link-hover">Shipping & Delivery</a>
                    <a className="link link-hover">Returns</a>
                </nav>
                <nav className="flex flex-col space-y-2">
                    <h6 className="text-lg font-bold text-black">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Careers</a>
                    <a className="link link-hover">Contact</a>
                </nav>
                <nav className="flex flex-col space-y-2">
                    <h6 className="text-lg font-bold text-black">Legal</h6>
                    <a className="link link-hover">Terms of Service</a>
                    <a className="link link-hover">Privacy Policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </div>
            <p className="text-black/50">
                &copy; {new Date().getFullYear()} BistroHub. All rights
                reserved.
            </p>
        </footer>
    );
};

export default Footer;
