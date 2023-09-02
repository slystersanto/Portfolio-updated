import React from 'react';
import { PaddingContainer, FlexContainer, Heading, BlueText,ParaText, Particle,Button } from './styled-components/Global.styled';
import { ShowcaseImageCard, ShowcaseParticleContainer, IconContainer } from './styled-components/Showcase.styles';
import ShowcaseImg from '../assets/santhosh.png';
import BackgroundImg from '../assets/particle.png';
import {BsGithub, BsLinkedin} from 'react-icons/bs';
import { FaDownload } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { fadeInLeftVariant, fadeInRightVariant } from '../utils/Variants';

const Showcase = () => {
    const linkedinUrl = 'https://www.linkedin.com/in/santh08/';
    const githubUrl = 'https://github.com/slystersanto';
    const resumeUrl='https://drive.google.com/file/d/1xMEWfbcxBEID3xtryM2chBmV8R4ZXxUE/view?usp=drive_link'
  return (
    <PaddingContainer left="3%" right="10%" top="10%" bottom="10%" responsiveLeft="1rem" responsiveRight="1rem">
        <FlexContainer align="center" fullWidthChild>
            <motion.div variants={fadeInLeftVariant} initial="hidden" whileInView="visible"> 
                <Heading as="h4" size="h4" >Hello!</Heading>

                <Heading as="h1" size="h1" top="0.5rem" bottom="1rem">
                    I'm <BlueText>Santhosh</BlueText>
                </Heading>

                <Heading as="h3" size="h3">
                    I'm a <BlueText>Full Stack Developer</BlueText>
                </Heading>
                
                <ParaText as="p" top="2rem" bottom="4rem">
                    Hello, my name is Santhosh and I am a full-stack developer with hands on practice in creating and designing user-friendly websites and web applications. 
                </ParaText>

                <FlexContainer gap="20px" responsiveFlex>
                    <IconContainer>
                    <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
                        <BsLinkedin style={{ color: 'white' }}  />
                        </a>
                    </IconContainer>

                    <IconContainer>
                    <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                        <BsGithub style={{ color: 'white' }} />
                        </a>
                    </IconContainer>

                    <IconContainer>
                    <a href={resumeUrl} target="_blank" rel="noopener noreferrer">
                        <FaDownload style={{ color: 'white' }}/>
                        </a>
                    </IconContainer>

                   
                    
                </FlexContainer>
            </motion.div>

            <FlexContainer justify="flex-end">
                <ShowcaseParticleContainer as={motion.div} variants={fadeInRightVariant} initial="hidden" whileInView="visible">
                    <ShowcaseImageCard background={BackgroundImg}>
                        <img src={ShowcaseImg} alt="showcase" />
                    </ShowcaseImageCard>

                    {/* <Particle src={BackgroundImg} initialTop="-80px" initialLeft="20px" rotate="60deg" /> */}
                    <Particle src={BackgroundImg} initialTop="50px" initialRight="-70px" rotate="0deg"/>
                    <Particle src={BackgroundImg} initialBottom="10px" initialLeft="-70px" rotate="50deg" />
                </ShowcaseParticleContainer>
            </FlexContainer>

        </FlexContainer>

    </PaddingContainer>
  )
}

export default Showcase;