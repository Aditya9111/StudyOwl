import { Box, Container } from "theme-ui";
import React from "react";
import BlockTitle from "components/block-title";
import PopularCard from "components/popular-card";

const popularCourseData = [
  {
    title: "Simple Activities For Kids Surprise Your Child With Magic Colours",
    reviewCount: "5.0 (392 reviews)",
    watchCount: "2,538 students watched",
    videoLink: "L9jU-IIN0ng",
    starCount: 5,
    expanded: true,
    list: [
      {
        content: "Activities For Kids",
      },
      {
        content: "Activities For Kids",
      },
      {
        content: "Activities For Kids",
      },
      {
        content: "Activities For Kids",
      },
    ],
  },
  {
    title: "5 Best Kids Science Experiments to Do at Home",
    reviewCount: "4.5 (524 reviews)",
    watchCount: "3,532 students watched",
    videoLink: "L9jU-IIN0ng",
    starCount: 4,
    expanded: false,
    list: [
      {
        content: "Activities For Kids",
      },
      {
        content: "Activities For Kids",
      },
      {
        content: "Activities For Kids",
      },
      {
        content: "Activities For Kids",
      },
    ],
  },
  {
    title: "Simple Activities For Kids Surprise Your Child With Magic Colours",
    reviewCount: "5.0 (392 reviews)",
    watchCount: "1,037 students watched",
    videoLink: "L9jU-IIN0ng",
    starCount: 5,
    expanded: false,
    list: [
      {
        content: "Activities For Kids",
      },
      {
        content: " Activities For Kids ",
      },
      {
        content: "Activities For Kids",
      },
      {
        content: "Activities For Kids",
      },
    ],
  },
];

const PopularCourse = () => {
  return (
    <Box as="section" id="courses" sx={styles.popularCourse}>
      <Container>
        <BlockTitle
          sx={styles.popularCourse.blockTitle}
          tagline="Quality features"
          heading="Popular Courses"
        />
        {popularCourseData.map((course, index) => (
          <Box sx={styles.popularCourse.col} key={index}>
            <PopularCard
              key={index}
              listData={course.list}
              expanded={course.expanded}
              starCount={course.starCount}
              title={course.title}
              reviewCount={course.reviewCount}
              watchCount={course.watchCount}
              videoLink={course.videoLink}
            />
          </Box>
        ))}
      </Container>
    </Box>
  );
};

export default PopularCourse;

const styles = {
  popularCourse: {
    paddingBottom: ["100px"],
    "@media(max-width: 575px)": {
      paddingBottom: "60px",
    },
    blockTitle: {
      textAlign: "center",
      marginBottom: "60px",
      "@media(max-width: 575px)": {
        marginBottom: "30px",
      },
    },
    col: {},
  },
};
