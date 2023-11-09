import { ReactNode } from "react";

interface Props {
  type: "filled" | "stroked";
  className?: string;
  children?: ReactNode;
}

export const Button = ({ type, className, children }: Props): JSX.Element => {
  return (
    <button
      className={`inline-flex items-center w-full gap-2 px-6 py-4 rounded-[5px] justify-center relative before:inset-0 before:absolute  ${
        type === "stroked"
          ? " border border-solid border-midnight-gray hover:before:bg-[#B2A7F41A] active:before:bg-[#B2A7F440] "
          : ""
      } ${
        type === "filled"
          ? "bg-midnight-purple hover:bg-[#645D93] active:bg-[#241E47]"
          : ""
      } ${className || ""}`}
      type="button"
    >
      <div
        className={`[font-family:'Work_Sans'] w-fit mt-[-1.00px] tracking-[0] text-[16px] font-semibold text-center whitespace-nowrap leading-[20px] ${
          type === "filled" ? "text-white" : "text-purple-gray"
        }`}
      >
        {children}
      </div>
    </button>
  );
};
