import React from 'react'
import { FlexContainer, Heading, PaddingContainer, IconContainer, ParaText, BlueText } from './styled-components/Global.styled'
import { SkillsCardContainer, SkillsCard } from './styled-components/MySkills.styled'
import { Skills } from '../utils/Data'
import { motion } from 'framer-motion'
import { fadeInLeftVariant, fadeInRightVariant } from '../utils/Variants';



const MySkills = () => {
  return (
    <PaddingContainer top="10%" bottom="10%" responsiveLeft="1rem" responsiveRight="1rem">
        <FlexContainer responsiveDirection="column-reverse" responsiveFlex fullWidthChild>
            <SkillsCardContainer 
                as={motion.div} 
                variants={fadeInLeftVariant} 
                initial="hidden" 
                whileInView="visible"
            >

                {Skills.map((skill) => (
                  <SkillsCard key={skill.id}>
                    <IconContainer size="5rem" color="blue">
                      {skill.icon}
                    </IconContainer>
                    
                    <Heading as="h4" size="h4">{skill.tech}</Heading>
                  </SkillsCard>
                ))}

            </SkillsCardContainer>

            <motion.div variants={fadeInRightVariant} initial="hidden"          whileInView="visible">
                <Heading as="h4" size="h4">MY SKILLS</Heading>
                <Heading as="h2" size="h2" top="0.5rem">What <BlueText>I can do</BlueText></Heading>

                <ParaText top="2rem" bottom="1.5rem">"As a seasoned MERN (MongoDB, Express, React, Node.js) full-stack developer, I bring a wealth of experience in crafting end-to-end web applications that seamlessly bridge the gap between front-end interactivity and back-end functionality. My proficiency across a diverse array of technologies enables me to deliver dynamic and user-centered digital experiences.</ParaText>

                <ParaText>My portfolio showcases projects that exemplify these skills in action, ranging from full-stack applications to responsive UI designs. With my passion for innovative problem-solving and my commitment to clean and maintainable code, I consistently contribute to the creation of impactful and cutting-edge web solutions.
                Through my holistic approach to problem-solving, rigorous testing, and meticulous attention to detail, I consistently deliver code that is not only cutting-edge but also maintainable and scalable. My commitment to continuous learning and adapting to emerging industry trends ensures that the solutions I craft are always ahead of the curve, driving meaningful impact for businesses and users alike."

</ParaText>
                 
            </motion.div>
        </FlexContainer>
    </PaddingContainer>
    
  )
}

export default MySkills