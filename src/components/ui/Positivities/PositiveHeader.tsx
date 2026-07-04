import { HOME_POSITIVITIES_INTRO } from "@/features/home/home-data";

const PositiveHeader = () => {
  return (
    <div className="flex flex-col items-center gap-y-6">
      <h2 className="px-4 text-center font-black text-2xl text-balance sm:text-3xl md:text-4xl lg:text-5xl">
        مسیر کامل محصول دیجیتال — از ایده تا رشد
      </h2>
      <p className="max-w-3xl px-4 text-center text-lg font-semibold text-content-gray text-balance sm:text-xl">
        طراحی، توسعه و مقیاس‌پذیر کردن در یک تیم
      </p>
      <div className="max-w-3xl space-y-3 text-center text-content-gray">
        {HOME_POSITIVITIES_INTRO.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
};

export default PositiveHeader;
