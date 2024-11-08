import React, { useRef } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/features/shared/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import DownloadAppButton from "@/features/shared/components/commons/DownloadAppButton";

interface BannerCarouselProps {}

const BannerCarousel: React.FC<BannerCarouselProps> = ({}) => {
  const plugin = useRef(Autoplay({ delay: 3900, stopOnInteraction: false }));

  return (
    <Carousel className="container px-6 w-full" plugins={[plugin.current]}>
      <CarouselContent>
        <CarouselItem>
          <Banner1 />
        </CarouselItem>
        <CarouselItem>
          <Banner2 />
        </CarouselItem>
      </CarouselContent>
      {/* <CarouselPrevious />
        <CarouselNext /> */}
    </Carousel>
  );
};

export default BannerCarousel;

const Banner1 = () => {
  const imageUrl =
      "https://firebasestorage.googleapis.com/v0/b/getgoing-prod.appspot.com/o/webImages%2F1689692183775IMG_1600.JPG?alt=media&token=0da0739c-fc65-4944-80d9-9e6b45d7af11",
    list = [
      { title: "Trip Planner", description: "Susun rute perjalanan sendiri" },
      { title: "Guide", description: "Tour guide berbahasa indonesia" },
      { title: "Info", description: "Infor penting di luar negeri" },
    ];

  return (
    <div className="grid grid-cols-2 w-full gap-x-8 justify-items-center">
      <div className="h-full relative overflow-hidden rounded-3xl">
        <img
          src={imageUrl}
          alt="Banner 1"
          className="object-cover aspect-video"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-transparent to-black" />
      </div>
      <div className="py-6 space-y-6">
        <p className="uppercase tracking-widest text-muted/80 text-xl">
          Apa yang Getgoing punya ?
        </p>
        <ul className="w-full flex flex-col items-start justify-center gap-y-6">
          {list.map((item, i) => (
            <li key={i} className="flex items-center gap-x-8">
              <div className="p-6 rounded-full bg-slate-500" />
              <div className="flex flex-col items-start gap-y-1">
                <span className="font-semibold text-lg">{item.title}</span>
                <span className="font-medium text-sm px-2 py-1 rounded-lg bg-foreground">
                  {item.description}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Banner2 = () => {
  const imageUrl =
    "https://firebasestorage.googleapis.com/v0/b/getgoing-prod.appspot.com/o/webImages%2F1689692364277swiss%202%20(1)-min.JPG?alt=media&token=e4b0843f-875b-4bbe-b8bc-642318848bca";

  return (
    <div className="grid grid-cols-2 w-full gap-x-16 justify-items-center">
      <div className="h-full relative overflow-hidden rounded-3xl">
        <img
          src={imageUrl}
          alt="Banner 1"
          className="object-cover aspect-video"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-transparent to-black" />
      </div>

      <div className="w-full flex flex-col items-center justify-center gap-y-6">
        <span className="text-muted uppercase tracking-[0.2rem] w-2/3 text-center">
          Eksplor dan nikmati mudah liburan ke luar negeri dengan
        </span>
        <h1 className="text-4xl font-bold capitalize">Aplikasi Getgoing</h1>
        <span className="text-muted uppercase tracking-[0.2rem] w-2/3 text-center">
          dapat didownload di :
        </span>
        <DownloadAppButton />
      </div>
    </div>
  );
};
