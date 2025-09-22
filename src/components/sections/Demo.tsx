import Image from "next/image";

const Demo = () => {
  return (
    <div className="snap-section relative h-svh flex flex-col items-center justify-center gap-14 overflow-y-scroll">
      {/* Heading + small dash image */}
      <div className="relative">
        <h2 className="text-3xl text-center sm:text-5xl">
          Make your life way
          <br /> more <span className="font-bold">productive</span>
        </h2>
        <div className="absolute right-0 sm:w-[241px] sm:right-5 ">
          <Image
            src="/dash.png"
            width={176}
            height={25}
            alt="dash"
            className="w-auto h-auto sm:w-[241px]"
          />
        </div>
      </div>

      {/* App demo image */}
      <div className="relative w-[90%] max-w-[1228px] aspect-[1228/745]">
        <Image
          src="/app-demo.png"
          fill
          style={{ objectFit: "contain" }}
          alt="Demo of the App"
        />
      </div>
    </div>
  );
};

export default Demo;
