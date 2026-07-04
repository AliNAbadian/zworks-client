"use client";

import { Paperclip } from "lucide-react";
import { useRef } from "react";

import { Button } from "@/components/ui/button";
import ContactFormField from "@/features/contact/components/contact-form-field";
import { useContactForm } from "@/features/contact/hooks/use-contact-form";
import {
  CONTACT_FORM_FIELDS,
  CONTACT_FORM_TITLE,
} from "@/features/contact/lib/constants";
import { cn } from "@/lib/utils";

const ContactForm = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const {
    values,
    errors,
    attachment,
    isSubmitting,
    isSubmitted,
    handleChange,
    handleFileChange,
    handleSubmit,
  } = useContactForm();

  const rowFields = CONTACT_FORM_FIELDS.filter((field) => field.colSpan !== 2);
  const fullWidthField = CONTACT_FORM_FIELDS.find(
    (field) => field.colSpan === 2,
  );

  return (
    <div className="w-full max-w-[1228px] rounded-[20px] border border-white/10 bg-[#1a1a1a] p-4 shadow-[0_40px_100px_-60px_rgba(0,0,0,0.85)] sm:rounded-[28px] sm:p-6">
      <h2 className="mb-8 text-end text-lg font-semibold text-white">
        {CONTACT_FORM_TITLE}
      </h2>

      <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {rowFields.map((field) => (
            <ContactFormField
              key={field.name}
              error={errors[field.name]}
              field={field}
              onChange={(value) => handleChange(field.name, value)}
              value={values[field.name]}
            />
          ))}
        </div>

        {fullWidthField ? (
          <ContactFormField
            error={errors[fullWidthField.name]}
            field={fullWidthField}
            onChange={(value) =>
              handleChange(fullWidthField.name, value)
            }
            value={values[fullWidthField.name]}
          />
        ) : null}

        <div className="flex flex-col-reverse gap-4 sm:flex-row sm:items-center sm:justify-between">
          <Button
            className="h-14 min-w-[183px] rounded-2xl bg-white text-base font-semibold text-black hover:bg-white/90"
            disabled={isSubmitting}
            type="submit"
          >
            {isSubmitting ? "در حال ارسال..." : "ارسال"}
          </Button>

          <button
            className={cn(
              "flex h-14 w-full items-center justify-center gap-3 rounded-2xl border border-white/10 bg-grayBg px-4 text-sm text-content-gray transition-colors hover:border-white/20 sm:max-w-[383px]",
            )}
            onClick={() => fileInputRef.current?.click()}
            type="button"
          >
            <span>{attachment?.name ?? "پیوست"}</span>
            <Paperclip className="size-5 text-white/70" />
          </button>
          <input
            ref={fileInputRef}
            accept="image/*,.pdf,.doc,.docx"
            className="hidden"
            onChange={(event) =>
              handleFileChange(event.target.files?.[0] ?? null)
            }
            type="file"
          />
        </div>

        {isSubmitted ? (
          <p className="text-sm text-primary">
            پیام شما با موفقیت ثبت شد. به زودی با شما تماس می‌گیریم.
          </p>
        ) : null}
      </form>
    </div>
  );
};

export default ContactForm;
