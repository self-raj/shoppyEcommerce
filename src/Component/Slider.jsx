// components/DualSlider.jsx

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination, Autoplay } from 'swiper/modules';


 function Slider({allProduct}) {
    console.log("slider",allProduct);
    
  return (
    <div className="space-y-10 p-4">
      {/*  Product Image Slider */}
      <div>
        <Swiper
          modules={[ Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          spaceBetween={20}
          slidesPerView={1}
          className="rounded-lg overflow-hidden bg-slate-600"
        >
          {allProduct.map((img, idx) => (
            <SwiperSlide key={idx}>
              <img src={img.images[0]} className="w-full h-64 object-contain" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

     
    </div>
  );
}
export default Slider;
