import React from "react";
import { Box, Container } from "theme-ui";
import Accordion from "components/accordion/accordion";
import BlockTitle from "components/block-title";

const accordionData = [
  {
    isExpanded: false,
    title:
      "What’s the difference between a supervised experience or regular YouTube? ?",
    contents: (
      <div>
        Your child’s experience will look much like YouTube’s flagship app and
        website, but with adjustments to the content they can find and watch,
        features they can use, default account settings, and ads protections.
        The videos they can watch will depend on a content setting that you
        select for their supervised account when granting them permission to use
        YouTube. We’ll disable a number of standard features normally available
        in YouTube, like comments and live chat, as well as the abilities to
        create a channel, upload content, and make purchases. Automatic
        reminders will appear for breaks and bedtime, which they can adjust to
        reinforce healthy screen time habits, and YouTube’s autoplay feature
        will be off by default as well. Since self-expression and community are
        integral parts of the YouTube experience we’ll work with parents and
        experts as we consider adding some of these features in the future. This
        experience does not support accounts provided through a school, work, or
        other organization, so make sure you're using a personal Google Account
        for yourself and your child.
      </div>
    ),
  },
  {
    isExpanded: true,
    title:
      "What is Study Owl? How is it different from a supervised account on YouTube?",
    contents: (
      <div>
        An FAQ is a list of frequently asked questions (FAQs) and answers on a
        particular topic (also known as Questions and Answers [Q&A] or
        Frequently Asked Questions). The format is often used in articles,
        websites, email lists, and online forums where common questions tend to
        recur, for example through posts or queries by new users related to
        common knowledge gaps. The purpose of an FAQ is generally provide
        information.
      </div>
    ),
  },
  {
    isExpanded: false,
    title: "Website reponse taking time, how to improve?",
    contents: (
      <div>
        An FAQ is a list of frequently asked questions (FAQs) and answers on a
        particular topic (also known as Questions and Answers [Q&A] or
        Frequently Asked Questions). The format is often used in articles,
        websites, email lists, and online forums where common questions tend to
        recur, for example through posts or queries by new users related to
        common knowledge gaps. The purpose of an FAQ is generally provide
        information.
      </div>
    ),
  },
  {
    isExpanded: false,
    title: "New update fixed all bug and issues",
    contents: (
      <div>
        An FAQ is a list of frequently asked questions (FAQs) and answers on a
        particular topic (also known as Questions and Answers [Q&A] or
        Frequently Asked Questions). The format is often used in articles,
        websites, email lists, and online forums where common questions tend to
        recur, for example through posts or queries by new users related to
        common knowledge gaps. The purpose of an FAQ is generally provide
        information.
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
