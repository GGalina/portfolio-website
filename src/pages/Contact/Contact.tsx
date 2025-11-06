import React, { useState, useRef, useEffect } from "react";
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
import { sendContactForm } from "../../api/contactApi";

type Status = "idle" | "sending" | "success" | "error";

const ContactMe: React.FC = () => {
  const { t } = useTranslation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});
  const [status, setStatus] = useState<Status>("idle");

  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const validateEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  // Get button text based on status
  const getButtonText = (): string => {
    switch (status) {
      case "sending":
        return t("contactMe.sending");
      case "success":
        return t("contactMe.successMessage");
      case "error":
        return t("contactMe.errorSendMessage");
      default:
        return t("contactMe.sendBtn");
    }
  };

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
      return;
    }

    setErrors({});

    try {
      await sendContactForm({
        name: trimmedName,
        email: trimmedEmail,
        message: trimmedMessage,
      });

      setName("");
      setEmail("");
      setMessage("");

      setStatus("success");
    } catch (err) {
      console.error("Failed to send message", err);
      setStatus("error");
    }
  };

  // Auto-reset status after 3 seconds if success or error
  useEffect(() => {
    if (status === "success" || status === "error") {
      const timer = setTimeout(() => setStatus("idle"), 3000);
      return () => clearTimeout(timer);
    }
  }, [status]);

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
            $hasError={!!errors.name}
            placeholder={t("contactMe.namePlaceholder")}
            autoComplete="name"
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
            $hasError={!!errors.email}
            placeholder={t("contactMe.emailPlaceholder")}
            autoComplete="email"
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
            $hasError={!!errors.message}
            placeholder={t("contactMe.messagePlaceholder")}
            autoComplete="off"
          />
          {errors.message && <Message aria-live="polite">{errors.message}</Message>}
        </FieldWrapper>

        <Button type="submit" disabled={status === "sending"}>
          {getButtonText()}
        </Button>
      </Form>

      <LinkedIn>
        <Or>{t("contactMe.orField")}</Or>
        <ContactAlt>
          {t("contactMe.linkedInMessage")}{" "}
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
