import React from 'react'

import { 
    PaddingContainer, 
    Heading, 
    FlexContainer, 
    ParaText, 
    IconContainer ,
    Button,
} 
from '../styled-components/Global.styled';

import { 
    ProjectContentContainer, 
    ProjectImageContainer, 
    TechStackCard, 
    ProjectImage,
} from '../styled-components/MyProjects.styled';

import {FaGithub} from 'react-icons/fa';


import Project11 from "../../assets/project11.png";
import { motion } from 'framer-motion';
import { fadeInLeftVariant, fadeInRightVariant } from '../../utils/Variants';

const Projectthree = ({ rowReverse }) => {
    const gitFrontUrl="https://github.com/slystersanto/MERN-MONEY-TRACKER-FRONTEND";
    const gitBackUrl="https://github.com/slystersanto/MERN-MONEY-TRACKER-BACKEND";
    const projectUrl="https://mminder.netlify.app";
  return (
    <FlexContainer rowReverse={rowReverse? true : false} fullWidthChild>
        <ProjectContentContainer 
            as={motion.div} 
            variants={rowReverse ? fadeInRightVariant : fadeInLeftVariant} 
            initial="hidden" 
            whileInView="visible"
        >

            <FlexContainer align="center" gap="1rem">
                <Heading as="h3" size="h3" bottom="1rem">Money Minder</Heading>
                <IconContainer color="blue" size="2rem"><FaGithub /></IconContainer>
            </FlexContainer>

            <PaddingContainer top="1rem">
                <FlexContainer gap="1.5rem">
                    <TechStackCard>MERN</TechStackCard>
                    <TechStackCard>BootStrap-5</TechStackCard>
                    <TechStackCard>MongoDB</TechStackCard>
                </FlexContainer>
            </PaddingContainer>

            <ParaText top="1.5rem" bottom="2rem">Accomplished developer adept at creating practical solutions. Developed "Money Minder," an intuitive financial tracking application encompassing complete CRUD operations, historical insights, and essential features to manage expenses and incomes effectively.</ParaText>
            
            <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
            <Button  as="a" href={projectUrl} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }} >Visit Website</Button>
            <Button  as="a" href={gitFrontUrl} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }} >Front-End</Button>
            <Button  as="a" href={gitBackUrl} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }} >Back-End</Button>
            
            </div>


        </ProjectContentContainer>
        <ProjectImageContainer 
            justify={rowReverse ? "flex-start" : "flex-end"}
            as={motion.div} 
            variants={rowReverse ? fadeInLeftVariant : fadeInRightVariant} 
            initial="hidden" 
            whileInView="visible"
        >
            <ProjectImage src={Project11} alt="project" />
           
        </ProjectImageContainer>
    </FlexContainer>
    
  )
}

export default Projectthree;