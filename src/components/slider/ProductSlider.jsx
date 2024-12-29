// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
// import required modules
import { FreeMode, Pagination } from "swiper/modules";

import prod1 from "../../assets/home/slide1.jpg";
import prod2 from "../../assets/home/slide2.jpg";
import prod3 from "../../assets/home/slide3.jpg";
import prod4 from "../../assets/home/slide4.jpg";
import prod5 from "../../assets/home/slide5.jpg";

const ProductSlider = () => {
    return (
        <>
            <Swiper
                slidesPerView={4}
                spaceBetween={20}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img className="w-full h-full object-cover" src={prod1} />
                </SwiperSlide>
                <SwiperSlide>
                    <img className="w-full h-full object-cover" src={prod2} />
                </SwiperSlide>
                <SwiperSlide>
                    <img className="w-full h-full object-cover" src={prod3} />
                </SwiperSlide>
                <SwiperSlide>
                    <img className="w-full h-full object-cover" src={prod4} />
                </SwiperSlide>
                <SwiperSlide>
                    <img className="w-full h-full object-cover" src={prod5} />
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default ProductSlider;
