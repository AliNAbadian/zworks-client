import { Instagram, Twitter, Github, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { JSX } from "react";

type SocialPlatform = "instagram" | "twitter" | "github" | "linkedin";

const socialIcons: Record<SocialPlatform, JSX.Element> = {
  instagram: <Instagram className="w-5 h-5" />,
  twitter: <Twitter className="w-5 h-5" />,
  github: <Github className="w-5 h-5" />,
  linkedin: <Linkedin className="w-5 h-5" />,
};

interface SocialLink {
  platform: SocialPlatform;
  url: string;
}

interface ProfileCardProps {
  name: string;
  imgSrc: string;
  role: string;
  socials?: SocialLink[];
}

const ProfileCard = ({
  name,
  imgSrc = "https://i.pravatar.cc/1000",
  role,
  socials = [],
}: ProfileCardProps) => {
  return (
    <article
      className="relative overflow-hidden h-[50vh] border rounded-4xl border-white/8 
        bg-base/20 bg-[url('/images/abstractbg.svg')] bg-cover bg-center font-iransans"
    >
      <div className="flex flex-col items-center justify-center gap-y-10 z-10 h-full">
        <div className="relative items-center justify-center flex flex-col grow pt-20">
          <div
            className="w-26 h-26 rounded-full bg-transparent border-[1px] absolute 
              [mask-image:linear-gradient(to_bottom,white,transparent)] [mask-repeat:no-repeat] [mask-size:100%_100%]"
          ></div>
          <div
            className="w-32 h-32 rounded-full bg-transparent border-[1px] absolute 
              [mask-image:linear-gradient(to_bottom,white,transparent)] [mask-repeat:no-repeat] [mask-size:100%_100%]"
          ></div>
          <Image
            src={imgSrc}
            alt={`${name}'s avatar`}
            width={80}
            height={80}
            className="rounded-full overflow-hidden"
          />
        </div>
        <div className="flex flex-col items-center justify-center gap-y-3">
          {" "}
          <h1 className="mt-2 font-bold text-2xl">{name}</h1>
          <p className="text-lg  border rounded-full py-4 px-6 bg-base/60 text-white font-light">
            {role}
          </p>
        </div>
        <div className="flex gap-3 mt-4 border-t-2 w-full flex-row items-center justify-center bg-transparent grow ">
          {socials.map(({ platform, url }) => (
            <Link
              key={platform}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-base hover:bg-white transition-colors border p-4 rounded-full"
            >
              {socialIcons[platform]}
            </Link>
          ))}
        </div>
      </div>
    </article>
  );
};

export default ProfileCard;
