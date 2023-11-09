import { Header } from "../components/Header";

import naturallyText from "../assets/Natur.ally.svg";
import spaLogo from "../assets/spa.svg";
import { Body } from "../components/Body";

export const Home = (): JSX.Element => {
  return (
    <div className="w-full h-full bg-[#f4f8fa] rounded-[5px] overflow-hidden">
      <div className="w-full h-[80px] bg-white sm:flex hidden">
        <div className="my-auto ml-[40px] flex h-8">
          <img src={spaLogo} className="logo" alt="Natur.ally logo" />
          <img
            src={naturallyText}
            className="logo h-[18.5px] ml-2 mt-auto"
            alt="Natur.ally logo"
          />
        </div>
      </div>
      <div className="flex flex-col sm:max-w-[600px] mx-auto sm:mt-16 min-h-screen sm:min-h-fit bg-white rounded-[5px] overflow-hidden shadow-level-4">
        <Header />
        <Body />
      </div>
    </div>
  );
};
