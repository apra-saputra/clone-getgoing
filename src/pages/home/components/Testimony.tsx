import { testimonies } from "@/utils/data/testimony";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import quote from "@/assets/quote.png";
import { useState } from "react";

const Testimony = () => {
  const [index, setIndex] = useState<number>(0);

  const CardTestimony = (i: number) => {
    return (
      <div
        key={i}
        className="w-full min-h-[13rem] max-h-[16rem] overflow-hidden space-y-2"
      >
        <h4 className="font-semibold text-2xl">
          {testimonies[i].testimony.title}
        </h4>
        <p className="text-muted">{testimonies[i].testimony.description}</p>
      </div>
    );
  };

  const handleIndex = (state: "next" | "prev") => {
    switch (state) {
      case "next":
        setIndex((prevState) => {
          const length = testimonies.length - 1;

          if (prevState < length) return prevState + 1;
          if (prevState === length) return 0;
          return prevState;
        });
        break;
      case "prev":
        setIndex((prevState) => {
          const length = testimonies.length - 1;

          if (prevState > 0) return prevState - 1;
          if (prevState === 0) return length;
          return prevState;
        });
        break;
    }
  };

  return (
    <section className="container py-6">
      <div className="text-center my-6 mb-12 space-y-2">
        <h2 className="font-bold text-4xl drop-shadow">
          Kata <span className="text-primary">Mereka</span>
        </h2>
        <p className="text-muted">
          Cerita dari mereka yang telah menjelajahi Eropa bersama kami
        </p>
      </div>
      <div className="grid grid-cols-2 gap-x-20 h-full">
        <div className="h-56 relative space-y-6 px-6">
          <img
            src={quote}
            alt="quote"
            className="absolute w-32 aspect-square -top-[3.75rem] -left-12 -z-10"
          />
          {CardTestimony(index)}
          <div className="space-x-2">
            <button
              className="bg-gray-300 transition-all duration-300 hover:bg-primary active:brightness-90 focus:outline-offset-2 focus:outline-primary p-2 rounded-full"
              onClick={() => handleIndex("prev")}
            >
              <FaArrowLeft />
            </button>
            <button
              className="bg-gray-300 transition-all duration-300 hover:bg-primary active:brightness-90 focus:outline-offset-2 focus:outline-primary p-2 rounded-full"
              onClick={() => handleIndex("next")}
            >
              <FaArrowRight />
            </button>
          </div>
        </div>
        <div className="h-full w-full flex justify-center">
          <div className="bg-foreground border-[1px] border-gray-200/70 w-[22rem] h-80 rounded-sm hover:-translate-y-2 duration-300 shadow-lg flex flex-col items-center justify-between p-4">
            <div className="bg-muted w-[20rem] h-48" />
            <p className="capitalize font-semibold text-lg">{testimonies[index].name}</p>
            <p className="uppercase text-muted">{testimonies[index].job}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimony;
