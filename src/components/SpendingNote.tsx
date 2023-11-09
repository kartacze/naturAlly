export const SpendingNote = ({
  amount,
  date,
}: {
  amount: string;
  date: Date;
}): JSX.Element => {
  return (
    <div className="inline-flex flex-col items-start gap-2 relative ">
      <div className="flex flex-col items-start gap-2 px-4 py-6 relative bg-[#f4f8fa] rounded-[5px] w-full">
        <p className="relative self-stretch mt-[-1.00px] [font-family:'Work_Sans'] font-normal text-bluegray-900 text-[12px] tracking-[0] leading-[16.8px] sm:text-left text-center">
          <span className="[font-family:'Work_Sans'] font-normal text-[#1e2a32] text-[12px] tracking-[0] leading-[16.8px]">
            You will be sending{" "}
          </span>
          <span className="[font-family:'Inter'] font-bold">${amount}</span>
          <span className="[font-family:'Work_Sans'] font-normal text-[#1e2a32] text-[12px] tracking-[0] leading-[16.8px]">
            {" "}
            every month, until{" "}
          </span>
          <span className="[font-family:'Inter'] font-bold">
            {date.toLocaleString("default", { month: "long", year: "numeric" })}
          </span>
          <span className="[font-family:'Inter']">.</span>
          <span className="[font-family:'Inter'] font-bold">&nbsp;</span>
          <span className="[font-family:'Work_Sans'] font-normal text-[#1e2a32] text-[12px] tracking-[0] leading-[16.8px]">
            Thank you!
          </span>
        </p>
      </div>
    </div>
  );
};
