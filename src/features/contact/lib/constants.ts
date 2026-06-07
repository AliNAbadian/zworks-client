import type { ContactFormFieldConfig } from "@/features/contact/contact-model";

export const CONTACT_CTA_HEADING_LINES = [
  "همین",
  "حالا شروع",
  "کنید",
  "!",
] as const;

export const CONTACT_FORM_TITLE = "ارتباط با ما" as const;

export const CONTACT_FORM_FIELDS: ContactFormFieldConfig[] = [
  {
    name: "fullName",
    label: "نام و نام خانوادگی",
    type: "text",
    required: true,
  },
  { name: "email", label: "ایمیل", type: "email", required: true },
  { name: "phone", label: "تلفن همراه", type: "tel", required: true },
  {
    name: "budget",
    label: "بودجه مورد نظر",
    type: "text",
    required: true,
  },
  {
    name: "description",
    label: "توضیحات پروژه",
    type: "textarea",
    required: true,
    colSpan: 2,
  },
];

export const CONTACT_FORM_INITIAL_VALUES = {
  fullName: "",
  email: "",
  phone: "",
  budget: "",
  description: "",
} as const;
