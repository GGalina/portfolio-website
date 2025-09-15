import React from "react";
import { motion } from "framer-motion";
import { Container, Title, Text, EmailLink } from "./Contact.styles";

const Contact: React.FC = () => {
  return (
    <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }}>
      <Container>
        <Title>Contact Me</Title>
        <Text>
          Feel free to reach out via email: <EmailLink href="mailto:halyna@example.com">halyna@example.com</EmailLink>
        </Text>
      </Container>
    </motion.div>
  );
};

export default Contact;
