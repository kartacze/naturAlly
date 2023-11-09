import { ChangeEventHandler, useCallback, useMemo } from "react";
import dolarSign from "../assets/Dollar.svg";
import { moneyFormatter } from "../utils";

type InputProps = {
  value: string;
  onChange(i: string): void;
};

export const Input = ({ value, onChange }: InputProps): JSX.Element => {
  const handleChange: ChangeEventHandler<HTMLInputElement> = useCallback(
    (e) => {
      e.preventDefault();
      const newValue = e.currentTarget.value.replaceAll(",", "");
      if (!isNaN(Number(newValue))) {
        onChange(newValue);
      }
    },
    [onChange],
  );

  const displayedValue = useMemo(() => {
    if (value) {
      const [full, decy] = value.split(".");
      return (
        moneyFormatter.format(Number(full)) +
        (decy !== undefined ? "." + decy.slice(0, 2) : "")
      );
    }
    return undefined;
  }, [value]);

  return (
    <div className="flex flex-col gap-[6px] flex-1">
      <div className="text-midnight-gray text-[14px] leading-[18px] relative [font-family:'Work_Sans'] font-medium tracking-[0]">
        I can donate
      </div>
      <div className="relative inline-flex  bg-neutralwhite  w-full">
        <img
          src={dolarSign}
          className="absolute inset-y-0 left-2 top-[18px] flex items-center w-6 h-6"
          alt="dolar sign"
        />
        <input
          className="max-w-full w-full pl-8 py-4 [font-family:'Rubik'] font-medium text-purple-gray text-[24px] tracking-[0] leading-[28px] whitespace-nowrap border border-solid border-bluegray-50 focus:border-midnight-purple rounded outline-0"
          placeholder="0.00"
          value={displayedValue}
          onChange={handleChange}
        >
        </input>
      </div>
    </div>
  );
};
