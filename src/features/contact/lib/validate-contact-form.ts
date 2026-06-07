import type {
  ContactFormErrors,
  ContactFormFieldName,
  ContactFormValues,
} from "@/features/contact/contact-model";
import { CONTACT_FORM_FIELDS } from "@/features/contact/lib/constants";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const fieldValidators: Record<
  ContactFormFieldName,
  (value: string) => string | undefined
> = {
  fullName: (value) =>
    value.trim().length < 2 ? "نام و نام خانوادگی را وارد کنید" : undefined,
  email: (value) =>
    !emailPattern.test(value.trim()) ? "ایمیل معتبر وارد کنید" : undefined,
  phone: (value) =>
    value.trim().length < 10 ? "شماره تماس معتبر وارد کنید" : undefined,
  budget: (value) =>
    value.trim().length === 0 ? "بودجه مورد نظر را وارد کنید" : undefined,
  description: (value) =>
    value.trim().length < 10 ? "توضیحات پروژه را وارد کنید" : undefined,
};

export const validateContactForm = (
  values: ContactFormValues,
): ContactFormErrors => {
  const errors: ContactFormErrors = {};

  for (const field of CONTACT_FORM_FIELDS) {
    if (!field.required) continue;

    const message = fieldValidators[field.name](values[field.name]);
    if (message) {
      errors[field.name] = message;
    }
  }

  return errors;
};

export const hasContactFormErrors = (errors: ContactFormErrors) =>
  Object.keys(errors).length > 0;
