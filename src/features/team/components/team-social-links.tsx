import { Instagram, Linkedin } from "lucide-react";
import Link from "next/link";

import type { TeamMemberSocialLink } from "@/features/team/team-model";
import { cn } from "@/lib/utils";

type TeamSocialLinksProps = {
  links: TeamMemberSocialLink[];
  className?: string;
};

const TwitterIcon = ({ className }: { className?: string }) => (
  <svg
    aria-hidden="true"
    className={className}
    fill="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const socialIconMap = {
  instagram: Instagram,
  twitter: TwitterIcon,
  linkedin: Linkedin,
} as const;

const TeamSocialLinks = ({ links, className }: TeamSocialLinksProps) => {
  return (
    <div className={cn("flex items-center justify-center gap-2.5", className)}>
      {links.map((link) => {
        const Icon = socialIconMap[link.platform];

        return (
          <Link
            key={link.platform}
            aria-label={link.platform}
            className="flex size-16 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/80 transition-colors hover:border-primary/40 hover:bg-primary/10 hover:text-primary"
            href={link.href}
          >
            <Icon className="size-6" />
          </Link>
        );
      })}
    </div>
  );
};

export default TeamSocialLinks;
