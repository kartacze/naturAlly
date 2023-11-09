import { useCallback } from "react";
import chevronLeft from "../assets/chevron_left.svg";
import chevronRight from "../assets/chevron_right.svg";

type DateProps = {
  date: Date;
  onChange(d: Date): void;
};

const firstAllowedPayment = new Date();
firstAllowedPayment.setMonth(firstAllowedPayment.getMonth() + 1);

export const DateSelect = ({ date, onChange }: DateProps): JSX.Element => {
  const handleChange = useCallback(
    (change: "+1" | "-1") => {
      if (change === "+1") {
        onChange(new Date(date.setMonth(date.getMonth() + 1)));
      } else {
        if (
          date.getFullYear() === firstAllowedPayment.getFullYear() &&
          date.getMonth() === firstAllowedPayment.getMonth()
        ) {
          return;
        }
        onChange(new Date(date.setMonth(date.getMonth() - 1)));
      }
    },
    [onChange],
  );

  return (
    <div className="flex flex-col gap-[6px] flex-1">
      <div className="w-fit mt-[-1.00px] text-midnight-gray text-[14px] leading-[18px] whitespace-nowrap relative [font-family:'Work_Sans',Helvetica] font-medium tracking-[0]">
        Every month until
      </div>
      <div className="items-center justify-center gap-4 p-3 self-stretch bg-neutralwhite rounded-sm border border-solid border-bluegray-50 flex relative">
        <button
          type="button"
          className="w-6 h-6 hover:bg-[#f3f5fd] active:bg-[#e8e9f2] rounded-[5px]"
          onClick={() => handleChange("-1")}
        >
          <img src={chevronLeft} alt="Chevron left" />
        </button>
        <div className="flex-col items-start flex-1 grow flex relative">
          <div className="relative self-stretch mt-[-1.00px] [font-family:'Rubik',Helvetica] font-medium text-purple-gray text-[16px] text-center tracking-[0] leading-[20px]">
            {date.toLocaleString("default", { month: "long" })}
          </div>
          <div className="relative self-stretch [font-family:'Work_Sans',Helvetica] font-normal text-purple-gray text-[12px] text-center tracking-[0] leading-[16px]">
            {date.getFullYear()}
          </div>
        </div>
        <button
          type="button"
          className="w-6 h-6 hover:bg-[#f3f5fd] active:bg-[#e8e9f2] rounded-[5px]"
          onClick={() => handleChange("+1")}
        >
          <img
            src={chevronRight}
            className="w-6 h-6"
            alt="Chevron right"
          />
        </button>
      </div>
    </div>
  );
};
