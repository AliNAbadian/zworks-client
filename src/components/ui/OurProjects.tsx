import Radial from "../shared/effects/Radial";
import ProjectsCard from "./OurProjects/ProjectsCard";
import ProjectsHeader from "./OurProjects/ProjectsHeader";

const OurProjects = () => {
  const projects = [
    {
      title: "پلتفرم نوآورانه تجارت الکترونیک",
      description:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز",
      category: "توسعه وب",
      date: "خرداد ۱۴۰۴",
      href: "#",
      ctaLabel: "مشاهده جزئیات پروژه",
      categoryLabel: "دسته بندی:",
      dateLabel: "زمان اجرا",
    },
    {
      title: "پلتفرم نوآورانه تجارت الکترونیک",
      description:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز",
      category: "توسعه وب",
      date: "خرداد ۱۴۰۴",
      href: "#",
      ctaLabel: "مشاهده جزئیات پروژه",
      categoryLabel: "دسته بندی:",
      dateLabel: "زمان اجرا",
    },
    {
      title: "پلتفرم نوآورانه تجارت الکترونیک",
      description:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز",
      category: "توسعه وب",
      date: "خرداد ۱۴۰۴",
      href: "#",
      ctaLabel: "مشاهده جزئیات پروژه",
      categoryLabel: "دسته بندی:",
      dateLabel: "زمان اجرا",
    },
  ];

  return (
    <section className="relative my-10 min-h-screen">
      <div className="container mx-auto">
        <ProjectsHeader />
      </div>
      <Radial
        className="absolute left-[20%] top-[5%] -z-10"
        size="70rem"
        color="rgba(0, 178, 98, 0.35)"
        transparency={60}
      />
      <Radial
        className="absolute left-[75%] top-[45%] -z-10"
        size="48rem"
        color="rgba(15, 110, 167, 0.25)"
        transparency={80}
      />
      <div className="container mx-auto mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectsCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
};

export default OurProjects;
