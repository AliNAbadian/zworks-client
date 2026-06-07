import type { ContactFormFieldConfig } from "@/features/contact/contact-model";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

type ContactFormFieldProps = {
  field: ContactFormFieldConfig;
  value: string;
  error?: string;
  onChange: (value: string) => void;
};

const fieldClassName =
  "h-14 rounded-2xl border-white/10 bg-[#131917] px-4 text-sm text-white placeholder:text-content-gray focus-visible:border-primary/50 focus-visible:ring-primary/20";

const ContactFormField = ({
  field,
  value,
  error,
  onChange,
}: ContactFormFieldProps) => {
  const label = field.required ? `${field.label} *` : field.label;

  if (field.type === "textarea") {
    return (
      <div className="flex flex-col gap-2">
        <textarea
          aria-invalid={Boolean(error)}
          className={cn(
            fieldClassName,
            "min-h-[189px] resize-none py-4",
            error && "border-destructive/60",
          )}
          name={field.name}
          onChange={(event) => onChange(event.target.value)}
          placeholder={label}
          value={value}
        />
        {error ? (
          <p className="text-xs text-destructive">{error}</p>
        ) : null}
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-2">
      <Input
        aria-invalid={Boolean(error)}
        className={cn(fieldClassName, error && "border-destructive/60")}
        name={field.name}
        onChange={(event) => onChange(event.target.value)}
        placeholder={label}
        type={field.type}
        value={value}
      />
      {error ? <p className="text-xs text-destructive">{error}</p> : null}
    </div>
  );
};

export default ContactFormField;
