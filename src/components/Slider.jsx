import { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import img1 from "../assets/home/01.jpg";
import img2 from "../assets/home/02.jpg";
import img3 from "../assets/home/03.png";
import img4 from "../assets/home/04.jpg";
import img5 from "../assets/home/05.png";
import img6 from "../assets/home/06.png";

const Slider = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <>
            <Swiper
                style={{
                    "--swiper-navigation-color": "#fff",
                    "--swiper-pagination-color": "#fff",
                }}
                loop={true}
                spaceBetween={10}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper2 w-full h-[60vh]"
            >
                <SwiperSlide>
                    <img className="w-full h-full object-cover" src={img1} />
                </SwiperSlide>
                <SwiperSlide>
                    <img className="w-full h-full object-cover" src={img2} />
                </SwiperSlide>
                <SwiperSlide>
                    <img className="w-full h-full object-cover" src={img3} />
                </SwiperSlide>
                <SwiperSlide>
                    <img className="w-full h-full object-cover" src={img4} />
                </SwiperSlide>
                <SwiperSlide>
                    <img className="w-full h-full object-cover" src={img5} />
                </SwiperSlide>
                <SwiperSlide>
                    <img className="w-full h-full object-cover" src={img6} />
                </SwiperSlide>
            </Swiper>
            <Swiper
                onSwiper={setThumbsSwiper}
                loop={true}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper w-full h-[15vh] mt-4"
            >
                <SwiperSlide>
                    <img className="w-full h-full object-cover" src={img1} />
                </SwiperSlide>
                <SwiperSlide>
                    <img className="w-full h-full object-cover" src={img2} />
                </SwiperSlide>
                <SwiperSlide>
                    <img className="w-full h-full object-cover" src={img3} />
                </SwiperSlide>
                <SwiperSlide>
                    <img className="w-full h-full object-cover" src={img4} />
                </SwiperSlide>
                <SwiperSlide>
                    <img className="w-full h-full object-cover" src={img5} />
                </SwiperSlide>
                <SwiperSlide>
                    <img className="w-full h-full object-cover" src={img6} />
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default Slider;
