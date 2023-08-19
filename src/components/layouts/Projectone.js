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


import Project8 from "../../assets/project8.png";
import { motion } from 'framer-motion';
import { fadeInLeftVariant, fadeInRightVariant } from '../../utils/Variants';

const Projectone = ({ rowReverse }) => {
    const projectUrl= 'https://effervescent-tulumba-cfa789.netlify.app'
    const gitUrl="https://github.com/slystersanto/MERN-Multi-vendor"
  return (
    <FlexContainer rowReverse={rowReverse? true : false} fullWidthChild>
        <ProjectContentContainer 
            as={motion.div} 
            variants={rowReverse ? fadeInRightVariant : fadeInLeftVariant} 
            initial="hidden" 
            whileInView="visible"
        >

            <FlexContainer align="center" gap="1rem">
                <Heading as="h3" size="h3" bottom="1rem">Multi Vendor E-Commerce</Heading>
                <IconContainer color="blue" size="2rem"><FaGithub /></IconContainer>
            </FlexContainer>

            <PaddingContainer top="1rem">
                <FlexContainer gap="1.5rem">
                    <TechStackCard>MERN</TechStackCard>
                    <TechStackCard>Tailwind</TechStackCard>
                    <TechStackCard>Cloudinary</TechStackCard>
                </FlexContainer>
            </PaddingContainer>

            <ParaText top="1.5rem" bottom="2rem">Dedicated developer with expertise in creating multi-vendor e-commerce platforms. Designed and executed a feature-rich online marketplace encompassing all essential e-commerce functionalities, including seamless Cash on Delivery payment. Implemented a user-friendly seller onboarding process, with a touch of elegance through Tailwind CSS styling.</ParaText>
            
            <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
          <Button as="a" href={projectUrl} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
            Visit Website
          </Button>
          <Button as="a" href={gitUrl} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
            Front-End
          </Button>
          <Button as="a" href={gitUrl} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
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
            <ProjectImage src={Project8} alt="project" />
           
        </ProjectImageContainer>
    </FlexContainer>
    
  )
}

export default Projectone;