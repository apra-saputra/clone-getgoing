import * as React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/features/shared/components/ui/select";
import { cn } from "@/libs/utils";

type Data = {
  value: string;
  text: string;
};

interface SelectComponentProps {
  data: Data[];
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  className?: string;
  placeholder?: string;
}

const SelectComponent: React.FC<SelectComponentProps> = React.memo(
  ({ data, value, setValue, className, placeholder }) => {
    return (
      <Select onValueChange={(e) => setValue(e)} value={value}>
        <SelectTrigger className={cn("w-[200px] text-center", className)}>
          <SelectValue placeholder={placeholder || "Select a item"} />
        </SelectTrigger>
        <SelectContent className="justify-center">
          <SelectGroup>
            <SelectLabel>{placeholder || "Select a item"}</SelectLabel>
            {data.map((el) => (
              <SelectItem value={el.value} key={el.value}>
                {el.text}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    );
  }
);

export default SelectComponent;
