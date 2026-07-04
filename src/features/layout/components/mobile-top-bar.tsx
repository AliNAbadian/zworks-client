import Image from "next/image";
import Link from "next/link";

const MobileTopBar = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-[9998] flex h-14 items-center justify-between border-b border-primary/20 bg-background/85 px-4 backdrop-blur-md lg:hidden">
      <Link aria-label="صفحه اصلی" href="/">
        <Image
          alt="Mars Agency"
          className="h-8 w-auto object-contain"
          height={32}
          src="/images/logoName.png"
          width={140}
        />
      </Link>
    </header>
  );
};

export default MobileTopBar;
