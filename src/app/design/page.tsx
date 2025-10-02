import HeroSection from "@/components/development/HeroSection";
import ProfileCard from "@/components/design/ProfileCard";

const page = () => {
  return (
    <section className="min-h-screen font-iransans">
      <HeroSection>
        <div className="relative flex items-center justify-center min-h-screen col-span-6 font-iransans">
          <div className="w-full absolute left-0 right-0 flex flex-col items-center gap-y-10">
            <h1 className="text-7xl font-black text-primary">
              <span className="text-gray-400">ارتقای برندها در </span> عصر
              دیجیتال
            </h1>{" "}
            <h2 className="text-gray-500 w-[1200px] z-10 text-center">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
              ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز
              و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای
              زیادی در شصت و سه درصد گذشته حال و آینده
            </h2>
          </div>
        </div>{" "}
      </HeroSection>
      <div className=" flex flex-col  items-center gap-y-6 my-24">
        <h2 className="font-black text-5xl text-white">
          <span className="text-gray-500"> تیم </span>طراحی
        </h2>

        <p className="text-content-gray container mx-auto text-center px-42">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
          متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیاد
        </p>

        <div className="mt-16 grid grid-cols-4 w-full justify-center container mx-auto gap-10">
          <ProfileCard
            name="علی نقش ریزآبادیان"
            role="Frontend Developer"
            imgSrc="https://i.pravatar.cc/300"
            socials={[
              { platform: "instagram", url: "https://instagram.com/janedoe" },
              { platform: "github", url: "https://github.com/janedoe" },
              { platform: "linkedin", url: "https://linkedin.com/in/janedoe" },
            ]}
          />{" "}
          <ProfileCard
            name="علی نقش ریزآبادیان"
            role="Frontend Developer"
            imgSrc="https://i.pravatar.cc/300"
            socials={[
              { platform: "instagram", url: "https://instagram.com/janedoe" },
              { platform: "github", url: "https://github.com/janedoe" },
              { platform: "linkedin", url: "https://linkedin.com/in/janedoe" },
            ]}
          />
          <ProfileCard
            name="علی نقش ریزآبادیان"
            role="Frontend Developer"
            imgSrc="https://i.pravatar.cc/300"
            socials={[
              { platform: "instagram", url: "https://instagram.com/janedoe" },
              { platform: "github", url: "https://github.com/janedoe" },
              { platform: "linkedin", url: "https://linkedin.com/in/janedoe" },
            ]}
          />
          <ProfileCard
            name="علی نقش ریزآبادیان"
            role="Frontend Developer"
            imgSrc="https://i.pravatar.cc/300"
            socials={[
              { platform: "instagram", url: "https://instagram.com/janedoe" },
              { platform: "github", url: "https://github.com/janedoe" },
              { platform: "linkedin", url: "https://linkedin.com/in/janedoe" },
            ]}
          />
        </div>
      </div>
      <div className=" flex flex-col  items-center gap-y-6">
        <h2 className="font-black text-5xl text-white">
          <span className="text-gray-500"> تیم </span>توسعه
        </h2>

        <p className="text-content-gray container mx-auto text-center px-42">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
          متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیاد
        </p>

        <div className="mt-16 grid grid-cols-4 w-full justify-center container mx-auto gap-10">
          <ProfileCard
            name="علی نقش ریزآبادیان"
            role="Frontend Developer"
            imgSrc="https://i.pravatar.cc/300"
            socials={[
              { platform: "instagram", url: "https://instagram.com/janedoe" },
              { platform: "github", url: "https://github.com/janedoe" },
              { platform: "linkedin", url: "https://linkedin.com/in/janedoe" },
            ]}
          />{" "}
          <ProfileCard
            name="علی نقش ریزآبادیان"
            role="Frontend Developer"
            imgSrc="https://i.pravatar.cc/300"
            socials={[
              { platform: "instagram", url: "https://instagram.com/janedoe" },
              { platform: "github", url: "https://github.com/janedoe" },
              { platform: "linkedin", url: "https://linkedin.com/in/janedoe" },
            ]}
          />
          <ProfileCard
            name="علی نقش ریزآبادیان"
            role="Frontend Developer"
            imgSrc="https://i.pravatar.cc/300"
            socials={[
              { platform: "instagram", url: "https://instagram.com/janedoe" },
              { platform: "github", url: "https://github.com/janedoe" },
              { platform: "linkedin", url: "https://linkedin.com/in/janedoe" },
            ]}
          />
          <ProfileCard
            name="علی نقش ریزآبادیان"
            role="Frontend Developer"
            imgSrc="https://i.pravatar.cc/300"
            socials={[
              { platform: "instagram", url: "https://instagram.com/janedoe" },
              { platform: "github", url: "https://github.com/janedoe" },
              { platform: "linkedin", url: "https://linkedin.com/in/janedoe" },
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default page;
