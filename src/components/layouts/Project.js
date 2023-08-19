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

import Project7 from "../../assets/project7.png";

import { motion } from "framer-motion";
import { fadeInLeftVariant, fadeInRightVariant } from "../../utils/Variants";


const Project = ({ rowReverse }) => {
  const githubRepoUrl = "https://github.com/slystersanto/MERN-E-Commerce"; // Replace with your GitHub repository URL
  const projectWebsiteUrl = 'https://sellnbuy-backend.onrender.com';
  const gitUrl="https://github.com/slystersanto/MERN-E-Commerce"
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
            Sell N Buy
          </Heading>
          <a href={githubRepoUrl} target="_blank" rel="noopener noreferrer"></a> 
          <IconContainer color="blue" size="2rem" style={{ cursor: "pointer" }}>
            <FaGithub />
          </IconContainer>
        </FlexContainer>

        <PaddingContainer top="1rem">
          <FlexContainer gap="1.5rem">
            <TechStackCard>MERN</TechStackCard>
            <TechStackCard>AntD</TechStackCard>
            <TechStackCard>Cloudinary</TechStackCard>
          </FlexContainer>
        </PaddingContainer>

        <ParaText top="1.5rem" bottom="2rem">
          Designed and developed a comprehensive "Sell and Buy" platform with
          full CRUD operations, bidding functionality, and tailored
          notifications for sellers, buyers, and administrators. Employed Ant
          Design and Tailwind CSS for sleek and intuitive UI/UX.
        </ParaText>
        <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
        <Button as="a" href={projectWebsiteUrl} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>Visit Website</Button>
        <Button as="a" href={gitUrl} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>Front-End</Button>
        <Button as="a" href={gitUrl} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>Back-End</Button>
        </div>
      </ProjectContentContainer>
      <ProjectImageContainer
        justify={rowReverse ? "flex-start" : "flex-end"}
        as={motion.div}
        variants={rowReverse ? fadeInLeftVariant : fadeInRightVariant}
        initial="hidden"
        whileInView="visible"
      >
        <ProjectImage src={Project7} alt="project" />
      </ProjectImageContainer>
    </FlexContainer>
  );
};

export default Project;
