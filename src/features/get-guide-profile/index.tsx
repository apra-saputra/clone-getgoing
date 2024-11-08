import useDocumentTitle from "@/features/shared/hooks/useDocumentTitle";
import { guides } from "@/utils/data/guide";
import { useParams } from "react-router-dom";
import Banner from "../shared/components/commons/Banner";
import { useMemo } from "react";
import Information from "./components/Information";

const GetGuideProfile = () => {
  useDocumentTitle("Get Guide - Tour Guide Indonesia | GetGoing");

  const { id } = useParams();

  const memoizedData = useMemo(() => {
    return guides.find((el) => el.id === id);
  }, [id]);

  return (
    <section className="w-full h-full relative">
      {/* banner */}
      <Banner imageUrl={memoizedData?.imagesUrl.banner} />
      <Information data={memoizedData} />
    </section>
  );
};

export default GetGuideProfile;
