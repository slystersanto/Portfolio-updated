import React from "react";

import {
  PaddingContainer,
  Heading,
  FlexContainer,
  ParaText,
  IconContainer,
  Button,
} from "../styled-components/Global.styled";

import {
  ProjectContentContainer,
  ProjectImageContainer,
  TechStackCard,
  ProjectImage,
} from "../styled-components/MyProjects.styled";

import { FaGithub } from "react-icons/fa";

import Nke from "../../assets/nke.png";
import { motion } from "framer-motion";
import { fadeInLeftVariant, fadeInRightVariant } from "../../utils/Variants";

const Projectfour = ({ rowReverse }) => {
  const gitFrontUrl =
    "https://github.com/slystersanto/Nike-Landing-Page-Tailwind-css";
  const gitBackUrl =
    "https://github.com/slystersanto/Nike-Landing-Page-Tailwind-css";
  const projectUrl = "https://landing-page-nikke.netlify.app/";
  return (
    <FlexContainer rowReverse={rowReverse ? true : false} fullWidthChild>
      <ProjectContentContainer
        as={motion.div}
        variants={rowReverse ? fadeInRightVariant : fadeInLeftVariant}
        initial="hidden"
        whileInView="visible"
      >
        <FlexContainer align="center" gap="1rem">
          <Heading as="h3" size="h3" bottom="1rem">
            Nike Landing Page
          </Heading>
          <IconContainer color="blue" size="2rem">
            <FaGithub />
          </IconContainer>
        </FlexContainer>

        <PaddingContainer top="1rem">
          <FlexContainer gap="1.5rem">
            <TechStackCard>React Js</TechStackCard>
            <TechStackCard>TailWind CSS</TechStackCard>
            <TechStackCard>Front End</TechStackCard>
          </FlexContainer>
        </PaddingContainer>

        <ParaText top="1.5rem" bottom="2rem">
          As part of my portfolio, I'm excited to present a dynamic and visually
          appealing redesign of Nike's landing page. Leveraging the power of
          React.js and the modern styling capabilities of Tailwind CSS, this
          project demonstrates my expertise in creating captivating user
          interfaces.This project showcases not only my technical skills but
          also my dedication to creating user-centric designs that captivate and
          engage visitors. I invite you to explore this project and experience
          firsthand how React.js and Tailwind CSS can transform a traditional
          landing page into an interactive and visually stunning journey."
        </ParaText>

        <div style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
          <Button
            as="a"
            href={projectUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            Visit Website
          </Button>
          <Button
            as="a"
            href={gitFrontUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            Front-End
          </Button>
          <Button
            as="a"
            href={gitBackUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            Back-End
          </Button>
        </div>
      </ProjectContentContainer>
      <ProjectImageContainer
        justify={rowReverse ? "flex-start" : "flex-end"}
        as={motion.div}
        variants={rowReverse ? fadeInLeftVariant : fadeInRightVariant}
        initial="hidden"
        whileInView="visible"
      >
        <ProjectImage src={Nke} alt="project" />
      </ProjectImageContainer>
    </FlexContainer>
  );
};

export default Projectfour;
