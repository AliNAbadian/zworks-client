import { Button } from "@/components/ui/button"; // Adjust path based on your shadcn/ui setup
import { LinkButtonProps } from "@/types/components";
import Link from "next/link";
import { ReactNode } from "react";

const LinkButton: React.FC<LinkButtonProps> = ({
  href,
  linkText,
  linkIcon,
  className = "",
}) => {
  return (
    <Link
      href={href}
      className={`group transition-all duration-200 ${className}`}
    >
      <div className="transition-all duration-200 inline-flex items-center bg-gradient-to-b from-base to-primary/10 text-white border p-4 space-x-2 rounded-full cursor-pointer group-hover:bg-white/5">
        <span className="mr-4">{linkText}</span>
        <Button
          variant="link"
          size="icon"
          className="transition-all cursor-pointer duration-200 text-white group-hover:bg-white group-hover:text-black px-6 bg-base border-none"
        >
          {linkIcon}
        </Button>
      </div>
    </Link>
  );
};

export default LinkButton;
