import { Box, Grid, Container } from "theme-ui";
import React from "react";
import BlockTitle from "components/block-title";
import FavoriteCard from "components/favorite-card";
import fevCardImageOne from "assets/fev-course-1-1.jpg";
import fevCardImageTwo from "assets/fev-course-1-2.jpg";
import fevCardImageThree from "assets/fev-course-1-3.jpg";

import { Swiper, SwiperSlide } from "swiper/react";

const favoriteCourseData = [
  {
    title: "10 Easy Science Experiments - That Will Amaze Kids",
    image: fevCardImageOne,
    reviewCount: "5.0 (392 reviews)",
    watchCount: "2,538 students watched",
    videoLink: "https://www.youtube.com/watch?v=eu3ncE1TC9k",
    starCount: 5,
  },
  {
    title: "15 Best Kids Science Experiments to Do at Home",
    image: fevCardImageTwo,
    reviewCount: "4.5 (524 reviews)",
    watchCount: "3,532 students watched",
    videoLink: "https://www.youtube.com/watch?v=eu3ncE1TC9k",
    starCount: 4,
  },
  {
    title: "Simple Activities For Kids Surprise Your Child With Magic Colours",
    image: fevCardImageThree,
    reviewCount: "5.0 (392 reviews)",
    watchCount: "1,037 students watched",
    videoLink: "https://www.youtube.com/watch?v=eu3ncE1TC9k",
    starCount: 5,
  },
];

const FavoriteCourse = () => {
  const FavoriteCarousel = {
    spaceBetween: 30,
    slidesPerView: 3,
    breakpoints: {
      0: {
        spaceBetween: 0,
        slidesPerView: 1,
      },
      376: {
        spaceBetween: 0,
        slidesPerView: 1,
      },
      576: {
        spaceBetween: 0,
        slidesPerView: 1,
      },
      768: {
        spaceBetween: 30,
        slidesPerView: 2,
      },
      992: {
        spaceBetween: 30,
        slidesPerView: 2,
      },
      1200: {
        spaceBetween: 30,
        slidesPerView: 3,
      },
    },
  };
  return (
    <Box as="section" sx={styles.fevCourse}>
      <Container sx={styles.fevCourse.container}>
        <BlockTitle
          sx={styles.fevCourse.blockTitle}
          tagline="Trending Videos"
          heading="Videos that kids are loving"
        />
        <Swiper {...FavoriteCarousel} sx={styles.carousel}>
          {favoriteCourseData.map((course, index) => (
            <SwiperSlide key={index}>
              <FavoriteCard
                starCount={course.starCount}
                title={course.title}
                image={course.image}
                reviewCount={course.reviewCount}
                watchCount={course.watchCount}
                videoLink={course.videoLink}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </Box>
  );
};

export default FavoriteCourse;

const styles = {
  fevCourse: {
    paddingTop: ["60px", null, null, "80px", "110px"],
    pb: [null, null, null, "30px", "50px", "0"],
    container: {
      maxWidth: 1440,
      "@media(max-width:1440px)": {
        maxWidth: 1240,
      },
      ".swiper-container": {
        pb: "30px",
        overflow: [null, null, null, null, null, "visible"],
      },
    },
    blockTitle: {
      textAlign: "center",
      marginBottom: "30px",
    },
    row: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr",
      gridGap: 30,
      "@media(max-width: 991px)": {
        gridTemplateColumns: "1fr 1fr",
      },
      "@media(max-width: 575px)": {
        gridTemplateColumns: "1fr",
      },
    },
    col: {
      display: "flex",
    },
  },
};
