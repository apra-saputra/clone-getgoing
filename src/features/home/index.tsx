import Articles from "./components/Articles";
import Guides from "./components/Guides";
import Cities from "./components/Cities";
import QuoteSection from "./components/QuoteSection";
import Testimony from "./components/Testimony";
import useDocumentTitle from "@/features/shared/hooks/useDocumentTitle";
import BannerCarousel from "./components/BannerCarousel";

const Home = () => {
  useDocumentTitle(undefined);
  return (
    <div className="mx-auto w-full flex flex-col items-center gap-y-6 h-full mt-32">
      <BannerCarousel />
      <section className="container px-6">
        <div className="mb-6">
          <h1 className="capitalize font-extrabold text-4xl">
            sedang <span className="text-primary">populer</span>
          </h1>
        </div>
        <Guides />
      </section>
      <QuoteSection />
      <Cities />
      {/* last view */}
      <Testimony />
      <Articles />
    </div>
  );
};

export default Home;
