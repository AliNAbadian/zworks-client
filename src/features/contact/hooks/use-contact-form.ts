"use client";

import { useCallback, useState } from "react";

import type {
  ContactFormErrors,
  ContactFormFieldName,
  ContactFormValues,
} from "@/features/contact/contact-model";
import { CONTACT_FORM_INITIAL_VALUES } from "@/features/contact/lib/constants";
import {
  hasContactFormErrors,
  validateContactForm,
} from "@/features/contact/lib/validate-contact-form";

export const useContactForm = () => {
  const [values, setValues] = useState<ContactFormValues>({
    ...CONTACT_FORM_INITIAL_VALUES,
  });
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [attachment, setAttachment] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = useCallback(
    (name: ContactFormFieldName, value: string) => {
      setValues((current) => ({ ...current, [name]: value }));
      setErrors((current) => {
        if (!current[name]) return current;
        const next = { ...current };
        delete next[name];
        return next;
      });
    },
    [],
  );

  const handleFileChange = useCallback((file: File | null) => {
    setAttachment(file);
  }, []);

  const handleSubmit = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      const nextErrors = validateContactForm(values);
      setErrors(nextErrors);

      if (hasContactFormErrors(nextErrors)) return;

      setIsSubmitting(true);

      try {
        await new Promise((resolve) => setTimeout(resolve, 600));
        setIsSubmitted(true);
        setValues({ ...CONTACT_FORM_INITIAL_VALUES });
        setAttachment(null);
      } finally {
        setIsSubmitting(false);
      }
    },
    [values],
  );

  return {
    values,
    errors,
    attachment,
    isSubmitting,
    isSubmitted,
    handleChange,
    handleFileChange,
    handleSubmit,
  };
};
