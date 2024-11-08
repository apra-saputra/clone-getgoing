import DatePicker from "@/features/shared/components/commons/DatePicker";
import SelectComponent from "@/features/shared/components/commons/SelectComponent";
import { Button } from "@/features/shared/components/ui/button";
import { Label } from "@/features/shared/components/ui/label";
import { Guide } from "@/utils/data/guide";
import { formatToK } from "@/utils/functions/formatToK";
import React, { memo, useState } from "react";

type FormTicketType = {
  adult: number;
  kid: number;
  duration: number;
};

interface FormBookingProps {
  data: Guide;
  setOpenDialog: React.Dispatch<React.SetStateAction<boolean>>;
}

const FormBooking: React.FC<FormBookingProps> = memo(
  ({ data, setOpenDialog }) => {
    const [formPayload, setFormPayload] = useState<FormTicketType>({
      adult: 1,
      kid: 0,
      duration: 5,
    });
    const [date, setDate] = useState<Date | undefined>(new Date());
    const [time, setTime] = useState<string>("");

    const handleChangeNumber = (
      name: keyof FormTicketType,
      change: "plus" | "minus",
      min = 0
    ) => {
      setFormPayload((state) => {
        const value = state[name];

        if (typeof value === "number") {
          return {
            ...state,
            [name]: Math.max(min, value + (change === "plus" ? 1 : -1)),
          };
        }

        return state;
      });
    };

    const timeOptions = Array.from({ length: 24 }, (_, i) => {
      const hours = String(i).padStart(2, "0"); 
      return { value: `${hours}:00`, text: `${hours}:00` };
    });

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      setOpenDialog((prev) => !prev);
    };

    return (
      <div className="px-4 py-6 rounded drop-shadow-xl bg-foreground sticky top-32 space-y-2 w-5/6">
        <h2 className="text-3xl font-semibold capitalize">pesan guide</h2>
        <form onSubmit={handleSubmit} className="flex flex-col w-full gap-y-6">
          <div className="w-full flex items-center justify-between">
            <Label className="text-muted uppercase tracking-widest">Kota</Label>
            <span className="capitalize">
              {data.city}, {data.country}
            </span>
          </div>
          <div className="w-full flex items-center justify-between">
            <Label className="text-muted uppercase tracking-widest flex gap-x-1">
              Tanggal <span className="text-primary">*</span>
            </Label>
            <DatePicker date={date} setDate={setDate} />
          </div>
          <div className="flex flex-col gap-y-4">
            <Label className="text-muted uppercase tracking-widest flex gap-x-1">
              Jumlah Peserta <span className="text-primary">*</span>
            </Label>
            <div className="w-full flex items-center justify-between">
              <Label>Dewasa</Label>
              <div className="flex items-center gap-x-4">
                <ButtonIncrements
                  handleChangeNumber={() =>
                    handleChangeNumber("adult", "minus")
                  }
                  disabled={formPayload.adult === 0}
                >
                  -
                </ButtonIncrements>
                <span>{formPayload.adult}</span>
                <ButtonIncrements
                  handleChangeNumber={() => handleChangeNumber("adult", "plus")}
                >
                  +
                </ButtonIncrements>
              </div>
            </div>
            <div className="w-full flex items-center justify-between">
              <Label>Anak dibawah 3 tahun</Label>
              <div className="flex items-center gap-x-4">
                <ButtonIncrements
                  handleChangeNumber={() => handleChangeNumber("kid", "minus")}
                  disabled={formPayload.kid === 0}
                >
                  -
                </ButtonIncrements>
                <span>{formPayload.kid}</span>
                <ButtonIncrements
                  handleChangeNumber={() => handleChangeNumber("kid", "plus")}
                >
                  +
                </ButtonIncrements>
              </div>
            </div>
          </div>
          <div className="w-full flex items-center justify-between">
            <Label className="text-muted uppercase tracking-widest flex gap-x-1">
              Waktu Mulai <span className="text-primary">*</span>
            </Label>
            <SelectComponent
              value={time}
              setValue={setTime}
              placeholder="Pilih waktu"
              data={timeOptions}
            />
          </div>
          <div className="w-full flex items-center justify-between">
            <Label className="text-muted uppercase tracking-widest flex gap-x-1">
              Durasi <span className="text-primary">*</span>
            </Label>
            <div className="flex items-center gap-x-4">
              <ButtonIncrements
                handleChangeNumber={() =>
                  handleChangeNumber("duration", "minus")
                }
                disabled={formPayload.duration === 5}
              >
                -
              </ButtonIncrements>
              <span>{formPayload.duration}</span>
              <ButtonIncrements
                handleChangeNumber={() =>
                  handleChangeNumber("duration", "plus")
                }
              >
                +
              </ButtonIncrements>
            </div>
          </div>
          <div>
            <span>Harga untuk 5 jam:</span>
            <p className="text-xl font-semibold">
              <span className="text-green-600">Rp. {formatToK(data.rate)}</span>{" "}
              / group
            </p>
            <span>Harga sudah termasuk PPN</span>
          </div>

          <Button className="tracking-[0.2rem] text-sm mt-12 uppercase bg-primary/50" type="submit">
            Cek Ketersidiaan
          </Button>
        </form>
      </div>
    );
  }
);

const ButtonIncrements: React.FC<{
  children: React.ReactNode;
  handleChangeNumber: () => void;
  disabled?: boolean;
}> = ({ children, handleChangeNumber, disabled }) => {
  return (
    <Button
      onClick={() => handleChangeNumber()}
      type="button"
      variant={"outline"}
      className={`rounded-full text-accent font-bold ${
        disabled
          ? "cursor-none border-none"
          : "hover:text-background hover:ring-accent hover:ring-offset-4"
      }`}
      disabled={disabled}
    >
      {children}
    </Button>
  );
};

export default FormBooking;
