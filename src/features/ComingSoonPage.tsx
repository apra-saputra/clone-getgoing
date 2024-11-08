import comingSoon from "@/assets/coming-soon.webp";
import friend from "@/assets/friend.webp";

const ComingSoonPage = () => {
  return (
    <section className="w-full h-full relative">
      <div className="relative w-full h-screen shadow">
        <img
          src={friend}
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-y-12 text-accent">
          <img
            src={comingSoon}
            alt="Text"
            className="mix-blend-darken "
          />
          <p className="text-2xl font-semibold">Konten ini akan segera hadir.</p>
          <p className="text-xl">GetGoing</p>
        </div>
      </div>
    </section>
  );
};

export default ComingSoonPage;
