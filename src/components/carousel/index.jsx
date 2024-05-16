// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./index.scss";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";
import axios from "axios";
import { useEffect, useState } from "react";

//props
// Number of slide

export default function Carousel({ numberOfSlide, category }) {
  const [movies, setMovies] = useState([]);

  const fetchMovies = async () => {
    const response = await axios.get("https://66365c06415f4e1a5e272378.mockapi.io/movie");

    console.log(response.data);
    setMovies(response.data);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <>
      <Swiper
        slidesPerView={numberOfSlide} // CUA THANG SWIPER => thay vi truyen co dinh(slide co dinh) ta dung ten goi de goi so slide
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={true}
        modules={[Pagination, Autoplay]}
        className="carousel"
      >
        {movies.filter((movie) => movie.category === category ).map((movie) => (
          <SwiperSlide key={movie.id}>
            <img src={movie.poster_path} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
