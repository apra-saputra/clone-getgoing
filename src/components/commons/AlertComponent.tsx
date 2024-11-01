import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { FaCircleExclamation, FaSquareCheck } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import { memo } from "react";
import { useAlertDialog } from "@/contexts/AlertDialogContext";
import DownloadAppButton from "./DownloadAppButton";

interface AlertDialogComponentProps {}

const AlertDialogComponent: React.FC<AlertDialogComponentProps> = memo(() => {
  const { isOpen, setIsOpen } = useAlertDialog();
  return (
    <AlertDialog open={isOpen} onOpenChange={(value) => setIsOpen(value)}>
      <AlertDialogContent>
        <div className="w-full overflow-hidden">
          <AlertDialogHeader className="bg-primary rounded-t-2xl text-foreground w-full px-6 py-8">
            <AlertDialogTitle className="uppercase text-center text-2xl">
              Aplikasi GetGoing
            </AlertDialogTitle>
          </AlertDialogHeader>
          <div className="w-full flex justify-start items-start px-4 py-6 gap-x-4">
            <FaCircleExclamation className="text-yellow-400" size={"1.5rem"} />
            <div className="flex flex-col gap-y-2">
              <span className="font-medium">Fitur Aplikasi</span>
              <span className="text-muted text-sm">
                Untuk sementara ini, fitur yang kamu pilih hanya tersedia di
                aplikasi GetGoing.
              </span>
            </div>
          </div>
          <div className="w-full flex justify-start items-start p-4 gap-x-4">
            <FaSquareCheck className="text-green-600" size={"1.5rem"} />
            <div className="flex flex-col gap-y-2">
              <span className="font-semibold text-lg">DOWNLOAD APLIKASI</span>
              <span className="text-muted text-sm">
                Langsung download aplikasi GetGoing untuk bisa menggunakan
                layanan dan fitur lengkap GetGoing.
              </span>
            </div>
          </div>
          <DownloadAppButton />
        </div>
        <div className="absolute right-0 -bottom-[3rem]">
          <Button
            className="rounded-full px-8 font-semibold uppercase tracking-widest"
            onClick={() => {
              setIsOpen(false);
            }}
          >
            Tutup
          </Button>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
});

export default AlertDialogComponent;
