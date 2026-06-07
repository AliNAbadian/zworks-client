export type TeamSocialPlatform = "instagram" | "twitter" | "linkedin";

export type TeamMemberSocialLink = {
  platform: TeamSocialPlatform;
  href: string;
};

export type TeamMember = {
  id: string;
  name: string;
  role: string;
  avatarGradient: string;
  socialLinks: TeamMemberSocialLink[];
};

export type TeamGroup = {
  id: string;
  title: string;
  description: string;
  members: TeamMember[];
};
