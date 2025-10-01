import React, { useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import {
  Section,
  Title,
  Form,
  Input,
  Textarea,
  Button,
  Message,
  LinkedIn,
  FieldWrapper,
  Label,
  Or,
  ContactAlt,
  LinkedInLink,
} from "./Contact.styles";

type Status = "idle" | "sending" | "success" | "error";

const ContactMe: React.FC = () => {
  const { t } = useTranslation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});
  const [status, setStatus] = useState<Status>("idle");
  const [buttonText, setButtonText] = useState(t("contactMe.sendBtn"));

  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const validateEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    const newErrors: typeof errors = {};

    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedMessage = message.trim();

    if (!trimmedName) newErrors.name = t("contactMe.errorName");
    if (!trimmedEmail) newErrors.email = t("contactMe.errorEmail");
    else if (!validateEmail(trimmedEmail)) newErrors.email = t("contactMe.errorEmailFormat");
    if (!trimmedMessage) newErrors.message = t("contactMe.errorMessage");

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setStatus("error");
      // Focus first invalid field
      if (newErrors.name) nameRef.current?.focus();
      else if (newErrors.email) emailRef.current?.focus();
      else if (newErrors.message) messageRef.current?.focus();
      setButtonText(t("contactMe.sendBtn"));
      return;
    }

    setErrors({});

    // Simulate async sending 
    try {
      await new Promise((res) => setTimeout(res, 1000)); // simulate delay
      console.log({ name: trimmedName, email: trimmedEmail, message: trimmedMessage });

      // Reset fields
      setName("");
      setEmail("");
      setMessage("");

      setStatus("success");
      setButtonText(t("contactMe.successMessage"));

      // Return button text after 3 seconds
      setTimeout(() => {
        setButtonText(t("contactMe.sendBtn"));
        setStatus("idle");
      }, 3000);
    } catch (err) {
      setStatus("error");
      setButtonText(t("contactMe.sendBtn"));
    }
  };

  return (
    <Section>
      <Title>{t("contactMe.title")}</Title>
      <Form onSubmit={handleSubmit}>
        <FieldWrapper>
          <Label htmlFor="name">{t("contactMe.nameField")}</Label>
          <Input
            id="name"
            ref={nameRef}
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            hasError={!!errors.name}
            placeholder={t("contactMe.namePlaceholder")}
          />
          {errors.name && <Message aria-live="polite">{errors.name}</Message>}
        </FieldWrapper>

        <FieldWrapper>
          <Label htmlFor="email">{t("contactMe.emailField")}</Label>
          <Input
            id="email"
            ref={emailRef}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            hasError={!!errors.email}
            placeholder={t("contactMe.emailPlaceholder")}
          />
          {errors.email && <Message aria-live="polite">{errors.email}</Message>}
        </FieldWrapper>

        <FieldWrapper>
          <Label htmlFor="message">{t("contactMe.messageField")}</Label>
          <Textarea
            id="message"
            ref={messageRef}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={7}
            hasError={!!errors.message}
            placeholder={t("contactMe.messagePlaceholder")}
          />
          {errors.message && <Message aria-live="polite">{errors.message}</Message>}
        </FieldWrapper>

        <Button type="submit" disabled={status === "sending"}>
          {status === "sending" ? t("contactMe.sending") : buttonText}
        </Button>
      </Form>

      <LinkedIn>
        <Or>{t("contactMe.orField")}</Or>
        <ContactAlt>
          {t("contactMe.linkedInMessage")}
          <LinkedInLink
            href="https://www.linkedin.com/in/Halyna-Hryn"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </LinkedInLink>
        </ContactAlt>
      </LinkedIn>
    </Section>
  );
};

export default ContactMe;
