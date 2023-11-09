import { useState } from "react";
import { DateSelect } from "./DateSelect";
import { FormButtons } from "./FormButtons";
import { Input } from "./Input";
import { SpendingNote } from "./SpendingNote";
import { TotalInfo } from "./TotalInfo";
import { moneyFormatter } from "../utils";

export const firstAllowedPayment = new Date();
firstAllowedPayment.setMonth(firstAllowedPayment.getMonth() + 1);

const calculateNumberOfMonths = (endDate: Date) => {
  return (
    (endDate.getFullYear() - firstAllowedPayment.getFullYear()) * 12 +
    endDate.getMonth() -
    firstAllowedPayment.getMonth() +
    1
  );
};

export const Body = (): JSX.Element => {
  const [value, setValue] = useState("");
  const [date, setDate] = useState(new Date(firstAllowedPayment));
  const paymentMonths = calculateNumberOfMonths(date);

  console.log("value", value);

  return (
    <form className="mx-10 my-8 flex flex-col flex-1">
      <div className="grid grid-cols-2 sm:gap-8 gap-4 w-full">
        <div className="sm:col-span-1 col-span-2">
          <Input value={value} onChange={setValue} />
        </div>
        <div className="sm:col-span-1 col-span-2">
          <DateSelect date={date} onChange={setDate} />
        </div>
        <div className="flex flex-col col-span-2 gap-6 sm:border-0 rounded-[5px] border border-[#E9EEF2]">
          <TotalInfo
            amount={moneyFormatter.format(Number(value) * paymentMonths)}
          />
          <SpendingNote
            amount={moneyFormatter.format(Number(value))}
            date={date}
          />
        </div>
      </div>
      <div className="sm:mt-0 mt-auto pt-8">
        <FormButtons />
      </div>
    </form>
  );
};
