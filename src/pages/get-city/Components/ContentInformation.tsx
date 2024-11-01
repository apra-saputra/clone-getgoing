import { City } from "@/utils/data/city";
import { memo } from "react";

interface ContentInformationProps {
  data?: City;
}

const ContentInformation: React.FC<ContentInformationProps> = ({ data }) => {
  if (!data || !data.id) return <div>There is no data</div>;

  const tags: { url: string; text: string; alt?: string }[] = [
    {
      url: "https://getgoing.co.id/content/img/icon/recitin.png",
      alt: "Reciting",
      text: "Sarana Perjalanan",
    },
    {
      url: "https://getgoing.co.id/content/img/icon/transportation.png",
      alt: "Transpotation",
      text: "Transportasi Umum",
    },
    {
      url: "https://getgoing.co.id/content/img/icon/freeactivity.png",
      alt: "Discount",
      text: "Sarana Gratis",
    },
  ];

  return (
    <div className="container mx-auto px-6 pt-12 space-y-6 mb-6">
      <h3 className="text-3xl font-semibold">Info</h3>
      <p className="text-accent mb-3">Informasi penting di kota {data.city}</p>
      <ul className="flex items-center justify-start w-full gap-x-6 pb-6">
        {tags.map((tag) => (
          <LiComponent url={tag.url} alt={tag.alt} text={tag.text} />
        ))}
      </ul>
      {data.info ? (
        <p>{data.info}</p>
      ) : (
        <>
          <p className="font-semibold">Info di {data.city} belum tersedia.</p>
          <p className="text-muted">Silahkan menghubungi kami untuk informasi lebih lanjut</p>
        </>
      )}
    </div>
  );
};

export default ContentInformation;

const LiComponent = memo(
  ({ url, alt, text }: { url: string; alt?: string; text: string }) => {
    return (
      <li className="rounded-2xl flex items-center justify-between bg-foreground px-4 py-2 shadow-md gap-x-4 w-1/5">
        <img src={url} alt={alt} className="aspect-square w-[4rem]" />
        <span className="font-medium tracking-[.2rem] text-wrap">{text}</span>
      </li>
    );
  }
);
