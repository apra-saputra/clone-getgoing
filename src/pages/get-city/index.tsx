import Banner from "@/components/commons/Banner";
import { Button } from "@/components/ui/button";
import useDocumentTitle from "@/hooks/useDocumentTitle";
import { cities } from "@/utils/data/city";
import { useMemo, useState } from "react";
import { FaImages, FaPlay } from "react-icons/fa6";
import { useParams } from "react-router-dom";
import ContentInformation from "./Components/ContentInformation";
import { Separator } from "@/components/ui/separator";
import VideoPopUp from "./Components/VideoPopUp";
import PhotoCollectionsPopup from "./Components/PhotoCollectionsPopup";

const GetCity = () => {
  const { id } = useParams();

  const memoizedData = useMemo(() => {
    return cities.find((el) => el.id === id);
  }, [id]);

  useDocumentTitle("Get Guide - Tour Guide Indonesia | GetGoing");

  const [isOpen, setIsOpen] = useState(false);
  const [isOpenImages, setIsOpenImages] = useState(false);

  return (
    <section className="w-full h-full relative">
      {/* banner */}
      <Banner imageUrl={memoizedData?.banner.background}>
        <div className="absolute w-full bottom-10 ">
          <div className="container mx-auto text-foreground">
            <h1 className="text-8xl">Eksplor</h1>
            <div className="w-full flex items-center justify-between px-1">
              <p className="text-2xl font-semibold">{memoizedData?.city}</p>
              <div className="flex items-center gap-x-8">
                {memoizedData?.video && (
                  <Button
                    className="rounded-full px-6 py-3 text-foreground bg-text/70 border-slate-700 border hover:bg-accent uppercase font-semibold tracking-[.3rem]"
                    onClick={() => setIsOpen(true)}
                  >
                    <FaPlay />
                    Video
                  </Button>
                )}
                {!!memoizedData?.images.length && (
                  <Button
                    className="rounded-full px-6 py-3 text-foreground bg-text/70 border-slate-700 border hover:bg-accent uppercase font-semibold tracking-[.3rem]"
                    onClick={() => setIsOpenImages(true)}
                  >
                    <FaImages />
                    Foto
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </Banner>
      <ContentInformation data={memoizedData} />
      <Separator />
      {memoizedData?.video && (
        <VideoPopUp
          src={memoizedData?.video}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
      )}
      {!!memoizedData?.images.length && (
        <PhotoCollectionsPopup
          dataset={memoizedData?.images}
          isOpen={isOpenImages}
          setIsOpen={setIsOpenImages}
        />
      )}
    </section>
  );
};

export default GetCity;
