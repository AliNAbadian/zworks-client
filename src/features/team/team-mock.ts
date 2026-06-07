import type { TeamGroup, TeamMemberSocialLink } from "@/features/team/team-model";

const defaultSocialLinks: TeamMemberSocialLink[] = [
  { platform: "instagram", href: "#" },
  { platform: "twitter", href: "#" },
  { platform: "linkedin", href: "#" },
];

const designAvatars = [
  "linear-gradient(135deg, #7c3aed 0%, #4c1d95 100%)",
  "linear-gradient(135deg, #2563eb 0%, #1e3a8a 100%)",
  "linear-gradient(135deg, #059669 0%, #064e3b 100%)",
  "linear-gradient(135deg, #d97706 0%, #92400e 100%)",
];

const developmentAvatars = [
  "linear-gradient(135deg, #6366f1 0%, #312e81 100%)",
  "linear-gradient(135deg, #0ea5e9 0%, #0c4a6e 100%)",
  "linear-gradient(135deg, #10b981 0%, #065f46 100%)",
  "linear-gradient(135deg, #f59e0b 0%, #b45309 100%)",
];

export const designTeamGroup: TeamGroup = {
  id: "design",
  title: "تیم طراحی",
  description:
    "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است",
  members: [
    {
      id: "design-1",
      name: "احمد رضائی",
      role: "طراح محصول",
      avatarGradient: designAvatars[0],
      socialLinks: defaultSocialLinks,
    },
    {
      id: "design-2",
      name: "احمد رضائی",
      role: "گرافیک دیزاینر",
      avatarGradient: designAvatars[1],
      socialLinks: defaultSocialLinks,
    },
    {
      id: "design-3",
      name: "احمد رضائی",
      role: "طراح محصول",
      avatarGradient: designAvatars[2],
      socialLinks: defaultSocialLinks,
    },
    {
      id: "design-4",
      name: "احمد رضائی",
      role: "گرافیک دیزاینر",
      avatarGradient: designAvatars[3],
      socialLinks: defaultSocialLinks,
    },
  ],
};

export const developmentTeamGroup: TeamGroup = {
  id: "development",
  title: "تیم توسعه",
  description:
    "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است",
  members: [
    {
      id: "dev-1",
      name: "احمد رضائی",
      role: "بک اند دولوپر",
      avatarGradient: developmentAvatars[0],
      socialLinks: defaultSocialLinks,
    },
    {
      id: "dev-2",
      name: "احمد رضائی",
      role: "فرانت اند دولوپر",
      avatarGradient: developmentAvatars[1],
      socialLinks: defaultSocialLinks,
    },
    {
      id: "dev-3",
      name: "احمد رضائی",
      role: "بک اند دولوپر",
      avatarGradient: developmentAvatars[2],
      socialLinks: defaultSocialLinks,
    },
    {
      id: "dev-4",
      name: "احمد رضائی",
      role: "فرانت اند دولوپر",
      avatarGradient: developmentAvatars[3],
      socialLinks: defaultSocialLinks,
    },
  ],
};

export const teamGroups: TeamGroup[] = [designTeamGroup, developmentTeamGroup];
