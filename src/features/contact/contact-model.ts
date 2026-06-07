export type ContactFormFieldName =
  | "fullName"
  | "email"
  | "phone"
  | "budget"
  | "description";

export type ContactFormValues = Record<ContactFormFieldName, string>;

export type ContactFormErrors = Partial<Record<ContactFormFieldName, string>>;

export type ContactFormFieldConfig = {
  name: ContactFormFieldName;
  label: string;
  type: "text" | "email" | "tel" | "textarea";
  required?: boolean;
  colSpan?: 1 | 2;
};
