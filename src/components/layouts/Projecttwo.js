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


import Project9 from "../../assets/project9.png";
import { motion } from 'framer-motion';
import { fadeInLeftVariant, fadeInRightVariant } from '../../utils/Variants';

const Projecttwo = ({ rowReverse }) => {
    const gitFrontUrl="https://github.com/slystersanto/Food-Kart-FrontEnd";
    const gitBackUrl="https://github.com/slystersanto/Food-Kart-BackEnd";
    const projectUrl="https://animated-mandazi-3a1de5.netlify.app"

  return (
    <FlexContainer rowReverse={rowReverse? true : false} fullWidthChild>
        <ProjectContentContainer 
            as={motion.div} 
            variants={rowReverse ? fadeInRightVariant : fadeInLeftVariant} 
            initial="hidden" 
            whileInView="visible"
        >

            <FlexContainer align="center" gap="1rem">
                <Heading as="h3" size="h3" bottom="1rem">Food Cart</Heading>
                <IconContainer color="blue" size="2rem"><FaGithub /></IconContainer>
            </FlexContainer>

            <PaddingContainer top="1rem">
                <FlexContainer gap="1.5rem">
                    <TechStackCard>MERN</TechStackCard>
                    <TechStackCard>Stripe</TechStackCard>
                    <TechStackCard>Materialize</TechStackCard>
                </FlexContainer>
            </PaddingContainer>

            <ParaText top="1.5rem" bottom="2rem">Proficient developer specializing in crafting dynamic applications. Created "Food Kart," a robust platform mirroring real food delivery apps, focused on burgers, pizzas, and similar dishes. Engineered with comprehensive functionalities, including seamless food ordering and secure payment processing.</ParaText>
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
            <ProjectImage src={Project9} alt="project" />
           
        </ProjectImageContainer>
    </FlexContainer>
    
  )
}

export default Projecttwo;