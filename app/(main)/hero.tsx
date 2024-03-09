import { ChevronDown, Search } from "lucide-react";

export const Hero = () => {
  return (
    <div className="h-[427px] flex items-center justify-center bg-[#FCFCFF]">
      <div className="max-w-[652px] w-full flex flex-col gap-y-[38px] items-center justify-center">
        <div className="text-center space-y-4 max-w-[580px]">
          <h1 className="font-bold text-[22px]">
            Free UI resources for everyone
          </h1>
          <p>
            The largest database of 100% free UI components and designs available in the formats popular by UI designers.
          </p>
        </div>
        <div className="w-full bg-white rounded-[10px] border-indigo-50 border drop-shadow-md p-2 flex">
          <button className="flex items-center gap-x-2 px-[15px] py-[11px] border-r border-indigo-50 flex-shrink-0">
            Free Designs
            <ChevronDown className="h-6 w-6" /> 
          </button>
          <div className="relative w-full">
            <Search
              className="absolute top-2 left-[15px] text-muted-foreground"
            />
            <input
              placeholder="Search"
              className="h-full w-full pl-[45px] px-[15px] outline-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
