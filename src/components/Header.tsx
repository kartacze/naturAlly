import givingBlock from "../assets/GivingBlock_64.svg";
import closeButton from "../assets/close btn.svg";

export const Header = (): JSX.Element => {
  return (
    <header className="relative flex sm:flex-row flex-col sm:text-left text-center items-center sm:gap-[20px] gap-4 sm:pt-8 pt-6 sm:px-10 px-6 sm:pb-6 pb-[28px] self-stretch w-full bg-salmon">
      <img
        src={closeButton}
        className="absolute top-4 right-6 cursor-pointer sm:hidden block"
        alt="Giving logo"
      />
      <img src={givingBlock} className="logo" alt="Giving logo" />
      <div className="flex flex-col items-start gap-1 flex-1 grow">
        <h1 className="self-stretch mt-[-1.00px] [font-family:'Work_Sans'] font-semibold text-midnight-purple text-[24px] sm:text-[32px] tracking-[0] leading-[38.4px]">
          The giving block
        </h1>
        <p className="self-stretch [font-family:'Inter'] font-normal text-purple-gray text-[16px] tracking-[0] leading-[20px]">
          Set up your donation goal!
        </p>
      </div>
    </header>
  );
};
