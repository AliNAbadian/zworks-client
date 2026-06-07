type TeamSectionHeaderProps = {
  title: string;
  description: string;
};

const TeamSectionHeader = ({ title, description }: TeamSectionHeaderProps) => {
  return (
    <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 text-center">
      <h2 className="font-iransans text-4xl font-black text-white md:text-5xl">
        {title}
      </h2>
      <p className="max-w-3xl text-base leading-relaxed text-content-gray md:text-lg">
        {description}
      </p>
    </div>
  );
};

export default TeamSectionHeader;
