import { articles } from "@/utils/data/articel";
import { formattedDate } from "@/utils/functions/formattedDate";
import { FaLongArrowAltRight, FaRegClock } from "react-icons/fa";
import { FaAnglesRight } from "react-icons/fa6";

const Articles = () => {
  return (
    <section className="px-6 py-24 bg-gray-100 w-full flex justify-center min-h-[50vh]">
      <div className="container space-y-8 flex flex-col gap-y-6">
        <div className="w-full flex items-center justify-between">
          <p className="font-bold text-4xl">Baca juga</p>
          <button className="px-4 py-2 border border-primary rounded-full text-primary hover:bg-accent hover:border-accent hover:text-foreground duration-300 flex items-center justify-between gap-x-2 h-full">
            <span className="uppercase font-medium tracking-[0.2rem] text-sm">Lihat semua artikel</span>
            <FaAnglesRight className="aspect-[4/1] h-1/2" />
          </button>
        </div>
        <ul className="w-full flex items-center justify-between">
          {articles.map((article) => (
            <li
              key={article.id}
              className="w-[410px] shadow-lg drop-shadow-lg rounded-md overflow-hidden h-full hover:-translate-y-2 duration-300"
            >
              <img
                src={article.coverUrl}
                alt=""
                className="aspect-square h-[410px]"
              />
              <div className="px-4 py-6 space-y-6 mb-6">
                <button className="text-lg font-semibold hover:underline hover:underline-offset-2 hover:brightness-80 text-left">
                  {article.title}
                </button>
                <div className="flex items-center gap-2 text-muted">
                  <FaRegClock />
                  <span className="text-muted">
                    {formattedDate(article.createdAt)}
                  </span>
                </div>

                <button className="flex items-center gap-x-3 uppercase text-primary hover:underline hover:underline-offset-2 hover:brightness-80">
                  <span className="tracking-[0.2rem] text-sm">lanjutkan membaca</span>
                  <FaLongArrowAltRight />
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Articles;
