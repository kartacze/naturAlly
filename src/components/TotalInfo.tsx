export const TotalInfo = ({ amount }: { amount: string }): JSX.Element => {
  return (
    <div className="flex max-w-full w-full items-center gap-2 px-4 pt-6 sm:py-0">
      <div className="flex-1 text-bluegray-900 sm:text-[20px] text-4 sm:leading-[24.0px] leading-[19.2px] relative [font-family:'Work_Sans'] font-medium tracking-[0]">
        Total amount
      </div>
      <div className="relative flex-1 mt-[-1.00px] [font-family:'Inter'] font-bold text-purple-gray sm:text-[32px] text-[24px] text-right tracking-[0] leading-[38.4px]">
        ${amount || "0"}
      </div>
    </div>
  );
};
