import { FaCheck } from "react-icons/fa6";
import support from "@/assets/support-gradient.png";
import personPin from "@/assets/person-pin-gradient.png";
import commute from "@/assets/commute-gradient.png";
import star from "@/assets/star-gradient.png";

const QuoteSection = () => {
  const features = [
    {
      iconPath: support,
      title: "Konsultasi GRATIS",
      desc: "Curhatin aja semuanya!",
    },
    {
      iconPath: personPin,
      title: "Local Guide",
      desc: "Biar ada temen!",
    },
    {
      iconPath: commute,
      title: "Transportasi",
      desc: "Bebas pilih transportasi apa",
    },
    {
      iconPath: star,
      title: "Lengkap Pokoknya",
      desc: "Hotel, Asuransi, Visa, Wifi dll",
    },
  ];

  const pros = [
    { text: "Tentukan tanggal keberangkatan sesukamu" },
    { text: "Tidak ada kuota minimum, jadi pasti berangkat" },
    { text: "Fleksibel, bebas tentukan destinasi dan aktivitas perjalanan" },
    { text: "Liburan jadi lebih exclusive untuk kamu dan keluarga" },
  ];

  return (
    <section className="container px-6 space-y-[5rem] py-6">
      <div className="text-center font-bold">
        <h2 className="text-3xl">
          “Better to <span className="text-primary text-bold">SEE</span>{" "}
          something once than hear about it{" "}
          <span className="text-accent">A THOUSAND TIMES</span>”
        </h2>
        <span className="text-xl">- Asian Proverb.</span>
      </div>
      <div className="grid grid-cols-2 gap-x-20">
        <div className="flex flex-col gap-4">
          <div className="space-y-6">
            <h2 className="text-5xl text-primary">PRIVATE TRIP</h2>
            <p className="text-5xl font-bold">
              Berangkat <span className="text-primary">Kapan Saja</span> Semaumu
            </p>
          </div>
          <ul className="grid grid-cols-2 px-4">
            {pros.map((el, i) => (
              <li
                className="flex items-center mx-auto px-14 py-8 gap-4"
                key={i}
              >
                <div className="p-1 bg-custom-gradient rounded-full ">
                  <FaCheck color="white" />
                </div>
                <p className="text-muted">{el.text}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full bg-custom-gradient rounded-tl-[4rem] rounded-bl-[4rem] px-12 py-16">
          <ul className="grid grid-cols-2 gap-4">
            {features.map((el, i) => (
              <li
                className="bg-white/25 p-4 rounded-xl text-foreground flex flex-col gap-y-2"
                key={i}
              >
                <img
                  src={el.iconPath}
                  alt="sub-logo-features"
                  className="p-2 bg-foreground aspect-square w-16 rounded-xl"
                />

                <p className="font-semibold">{el.title}</p>
                <p>{el.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default QuoteSection;
