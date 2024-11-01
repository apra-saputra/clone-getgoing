import {
  CarouselComponent,
  CarouselItemComponent,
} from "@/components/commons/CarouselComponent";
import { guides } from "@/utils/data/guide";
import { Link } from "react-router-dom";

export default function Guides() {
  return (
    <CarouselComponent isShowIndex>
      {guides.map((guide, index) => (
        <CarouselItemComponent
          className="flex flex-col py-6 gap-y-4 md:basis-1/5 lg:basis-1/5"
          index={`${index}+${guide.id}`}
        >
          <Link to={`/getguide/${guide.id}`}>
            <img
              src={guide.imagesUrl.profile}
              className="rounded-xl w-[201px] aspect-square ease-in-out hover:-translate-y-3 duration-300 cursor-pointer object-scale-down"
            />
          </Link>

          <div className="px-2">
            <p className="font-bold capitalize">{guide.name}</p>
            <span className="capitalize">{`${guide.city}, ${guide.country}`}</span>
          </div>
        </CarouselItemComponent>
      ))}
    </CarouselComponent>
  );
}
