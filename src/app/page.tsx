import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col lg:flex-row px-6 lg:px-24 gap-10 lg:gap-20 items-center bg-[#043873] py-16 lg:py-40 overflow-hidden">
      <div className="text-center lg:text-left">
        <h1 className="text-4xl lg:text-6xl font-bold text-white">
          Get More Done with Whitepace
        </h1>
        <p className="text-lg font-normal text-white py-5 lg:py-10">
          Project management software that enables your teams to collaborate,
          plan, analyze, and manage everyday tasks
        </p>
        <button className="bg-[#4F9CF9] px-8 py-4 rounded-lg text-white">
          Try Whitepace Free
        </button>
      </div>
      <div>
        <div className="w-[500px] h-[350px] bg-[#C4DEFD]"></div>
      </div>
    </div>
  );
}
