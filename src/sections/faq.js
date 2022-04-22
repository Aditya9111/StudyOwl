import React from "react";
import { Box, Container } from "theme-ui";
import Accordion from "components/accordion/accordion";
import BlockTitle from "components/block-title";

const accordionData = [
  {
    isExpanded: false,
    title:
      "What’s the difference between a supervised experience or regular YouTube ?",
    contents: (
      <div>
        Youtube or other platforms can expose your kids to unwanted things but
        our website has supervised video uploading which means every video is
        properly vetted befor uploading.
      </div>
    ),
  },
  {
    isExpanded: true,
    title:
      "What is Study Owl? How is it different from a supervised account on YouTube?",
    contents: (
      <div>
        Study owl is a kid learning website where kids from ages 10-14 years can
        come to learn innpvative technologies.
      </div>
    ),
  },
  {
    isExpanded: false,
    title: "Website reponse taking time, how to improve?",
    contents: (
      <div>
        Due to heavy traffic website can slow down.We request you to please wait
        for some time and try again.
      </div>
    ),
  },
  {
    isExpanded: false,
    title: "New update fixed all bug and issues",
    contents: (
      <div>
        Our team keeps working to improve your experience and make our website
        as bug free as we can.If you encounter a bug please report it to us.
      </div>
    ),
  },
];

const FAQ = () => {
  return (
    <Box as="section" id="faq" sx={styles.accordion}>
      <Container sx={styles.accordion.container}>
        <BlockTitle
          sx={styles.accordion.blockTitle}
          tagline="Frequent Question"
          heading="Do you have any question?"
        />
        <Accordion items={accordionData} />
      </Container>
    </Box>
  );
};
export default FAQ;

const styles = {
  accordion: {
    container: {
      maxWidth: "900px",
    },
    blockTitle: {
      marginBottom: [25, null, null, 65],
      textAlign: "center",
    },
  },
};
