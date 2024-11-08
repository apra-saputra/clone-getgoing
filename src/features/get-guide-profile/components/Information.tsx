import { Separator } from "@/features/shared/components/ui/separator";
import { Guide } from "@/utils/data/guide";
import React, { memo } from "react";
import FormBooking from "./FormBooking";
import { useAlertDialog } from "@/features/shared/contexts/AlertDialogContext";

interface InformationProps {
  data?: Guide;
}

const Information: React.FC<InformationProps> = memo(({ data }) => {
  if (!data) {
    return (
      <div>
        <h1>data not found</h1>
      </div>
    );
  }

  const { setIsOpen } = useAlertDialog();

  return (
    <div className="container mx-auto pt-12 w-full grid grid-cols-2 gap-x-24 w-full min-h-[80vh] px-24">
      <div className="col-span-1 space-y-4">
        <h1 className="font-bold text-2xl">
          #Get<span className="text-primary">Guide</span>
        </h1>
        <h3 className="font-bold text-3xl">{data?.name}</h3>
        <p>
          saya berbicara:{" "}
          <span className="capitalize font-semibold">
            {data?.languages.join(", ")}
          </span>
        </p>
        <Separator className="my-4" />
        <h2 className="font-semibold text-xl">Tentang Guide</h2>
        {data?.about && <p>{data.about}</p>}
        <Separator className="my-4" />
      </div>
      <div className="col-span-1 px-6 relative place-items-end">
        <FormBooking data={data} setOpenDialog={setIsOpen} />
      </div>
    </div>
  );
});

export default Information;
