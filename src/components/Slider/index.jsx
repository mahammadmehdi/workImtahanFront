import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./index.scss";

function Slider() {
  return (
    <div>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        loop={true}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          <div className="fancySpencerSlide">
            <div className="number">
              {" "}
              <img src="https://preview.colorlib.com/theme/educature/img/quote.png.webp" />
            </div>
            <div className="name">Fancy Spencer</div>
            <div className="icon">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
            </div>
            <div className="about">
              As conscious traveling Paup ers we must always be oncerned about
              our dear Mother Earth. If you think about it, you travel across
              her face and She is the host to your journey.
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide><div className="fancySpencerSlide">
            <div className="number">
              {" "}
              <img src="https://preview.colorlib.com/theme/educature/img/quote.png.webp" />
            </div>
            <div className="name">Fancy Spencer</div>
            <div className="icon">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
            </div>
            <div className="about">
              As conscious traveling Paup ers we must always be oncerned about
              our dear Mother Earth. If you think about it, you travel across
              her face and She is the host to your journey.
            </div>
          </div></SwiperSlide>
        <SwiperSlide><div className="fancySpencerSlide">
            <div className="number">
              {" "}
              <img src="https://preview.colorlib.com/theme/educature/img/quote.png.webp" />
            </div>
            <div className="name">Fancy Spencer</div>
            <div className="icon">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
            </div>
            <div className="about">
              As conscious traveling Paup ers we must always be oncerned about
              our dear Mother Earth. If you think about it, you travel across
              her face and She is the host to your journey.
            </div>
          </div></SwiperSlide>
        <SwiperSlide><div className="fancySpencerSlide">
            <div className="number">
              {" "}
              <img src="https://preview.colorlib.com/theme/educature/img/quote.png.webp" />
            </div>
            <div className="name">Fancy Spencer</div>
            <div className="icon">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
            </div>
            <div className="about">
              As conscious traveling Paup ers we must always be oncerned about
              our dear Mother Earth. If you think about it, you travel across
              her face and She is the host to your journey.
            </div>
          </div></SwiperSlide>
        ...
      </Swiper>
    </div>
  );
}

export default Slider;
