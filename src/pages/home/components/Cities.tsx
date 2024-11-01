import {
  CarouselComponent,
  CarouselItemComponent,
} from "@/components/commons/CarouselComponent";
import { cities } from "@/utils/data/city";
import { useNavigate } from "react-router-dom";

const Cities = () => {
  const navigate = useNavigate();

  return (
    <section className="container px-6 space-y-2">
      <h2 className="capitalize text-4xl font-semibold">
        kota <span className="text-primary">populer</span>
      </h2>
      <CarouselComponent isShowIndex>
        {cities.map((city, index) => (
          <CarouselItemComponent
            className="py-6 px-4 md:basis-1/5 lg:basis-1/5"
            index={`${index}+${city.city}`}
          >
            <div
              className="rounded-xl overflow-hidden flex flex-col justify-end relative hover:-translate-y-2 duration-200 cursor-pointer select-none"
              onClick={() => navigate(`/getcity/${city.id}`)}
            >
              <img
                src={city.banner.card}
                alt="Banner"
                className="w-full h-full object-cover aspect-[3/4]"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-transparent to-black" />

              <div className="absolute p-6 text-background flex flex-col gap-y-4">
                <p className="font-bold capitalize text-3xl">{city.city}</p>
                <span className="capitalize text-lg">{city.country}</span>
              </div>
            </div>
          </CarouselItemComponent>
        ))}
      </CarouselComponent>
    </section>
  );
};

export default Cities;
