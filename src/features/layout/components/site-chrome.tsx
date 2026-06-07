import Footer from "@/components/shared/ui/Footer";
import Navbar from "@/components/shared/ui/Navbar";
import MobileBottomNav from "@/features/layout/components/mobile-bottom-nav";
import MobileTopBar from "@/features/layout/components/mobile-top-bar";

const SiteChrome = () => {
  return (
    <>
      <MobileTopBar />
      <Navbar />
      <MobileBottomNav />
      <Footer />
    </>
  );
};

export default SiteChrome;
