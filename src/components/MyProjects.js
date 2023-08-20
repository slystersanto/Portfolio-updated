import React from 'react'
import { 
    PaddingContainer, 
    Heading, 
    BlueText, 
    FlexContainer, 
    ParaText, 
    IconContainer ,
    Button,
} 
from './styled-components/Global.styled';

import { 
    ProjectContentContainer, 
    ProjectImageContainer, 
    TechStackCard, 
    ProjectImage,
} from './styled-components/MyProjects.styled';

import {FaGithub} from 'react-icons/fa';
import Project1 from '../assets/Project1.png';

import Project from './layouts/Project';
import Projectone from './layouts/Projectone';
import Projecttwo from "./layouts/Projecttwo";
import Projectthree from './layouts/Projectthree';
import Projectfour from './layouts/Projectfour';
import { motion } from 'framer-motion';
import { fadeInTopVariant } from '../utils/Variants';


const MyProjects = () => {
  return (
    <PaddingContainer top="5%" bottom="5%" responsiveTop="20%" responsiveLeft="1rem" responsiveRight="1rem">
        <Heading 
            as={motion.h4} 
            variants={fadeInTopVariant}
            initial="hidden"
            whileInView="visible"
            size="h4"
        >
            MY PROJECTS
        </Heading>

        <Heading 
            as={motion.h4}
            variants={fadeInTopVariant}
            initial="hidden"
            whileInView="visible"
            size="h2" 
            top="0.5rem"
        >
            What <BlueText>I have built</BlueText>
        </Heading>

        <PaddingContainer top="5rem" bottom="5rem">
            <Project />
        </PaddingContainer>

        <PaddingContainer top="5rem" bottom="5rem">
            <Projectone  rowReverse/>
        </PaddingContainer>

        <PaddingContainer top="5rem" bottom="5rem">
            <Projecttwo />
        </PaddingContainer>

        <PaddingContainer top="5rem" bottom="5rem">
            <Projectthree  rowReverse/>
        </PaddingContainer>

        <PaddingContainer top="5rem" bottom="5rem">
            <Projectfour />
        </PaddingContainer>

        

       
       
        
    </PaddingContainer>
  )
}

export default MyProjects