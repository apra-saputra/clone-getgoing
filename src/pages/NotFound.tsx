import { FaHouse } from "react-icons/fa6";
import compas from "@/assets/compas.jpg";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <section className="w-full h-screen relative overflow-hidden">
      <img
        src={compas}
        className="absolute w-full h-full object-cover -z-10 top-0 left-0"
      />
      <div className="container mx-auto w-full flex flex-col items-start justify-center gap-y-12 min-h-screen p-6 text-background z-10 relative">
        <h1 className="text-6xl font-bold">Halaman tidak ditemukan</h1>
        <div className="space-y-2">
          <p className="text-2xl font-semibold">Error 404</p>
          <p className="text-xl font-medium">
            Halaman yang Anda cari tidak ditemukan atau sedang dalam perbaikan,
            silahkan kunjungi halaman lain.
          </p>
        </div>
        <Button
          variant={"outline"}
          className="bg-transparent hover:bg-background duration-300 space-x-2 font-semibold uppercase"
          onClick={() => navigate("/")}
        >
          <FaHouse />
          <span className="tracking-[0.25rem] text-sm">
            Kembali Ke halaman utama
          </span>
        </Button>
      </div>
    </section>
  );
};

export default NotFound;
