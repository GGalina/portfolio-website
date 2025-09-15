import React from "react";
import { motion } from "framer-motion";
import { Container, Title, Text } from "./About.styles";

const About: React.FC = () => {
  return (
    <motion.div initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: 50, opacity: 0 }}>
      <Container>
        <Title>About Me</Title>
        <Text>
          I am a Junior Full Stack Developer with knowledge of React, TypeScript, MongoDB, and basic Docker.
          I like to deliver clean and maintainable code using best practices.
        </Text>
      </Container>
    </motion.div>
  );
};

export default About;
