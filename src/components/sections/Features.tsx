import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import Image from "next/image";
import TemplateN from "../svg/TemplateN";

const GRID_ITEM_CLASSNAME =
  "w-full  rounded-xl shadow-[1px_0_2px_rgba(0,0,0,0.25),-1px_0_2px_rgba(0,0,0,0.25),0_1px_2px_rgba(0,0,0,0.25),0_-1px_2px_rgba(0,0,0,0.25)]";

const Features = () => {
  return (
    <div className="snap-section relative h-svh flex flex-col items-center justify-center gap-14">
      <div className="w-full grid grid-cols-2 grid-rows-3 gap-4 sm:grid-cols-3 sm:grid-rows-2">
        <div
          className={cn(
            GRID_ITEM_CLASSNAME,
            "h-[210px] col-start-1 col-end-3 row-start-1 row-end-2 flex justify-between items-center pl-6 sm:row-start-2 sm:row-end-3 lg:h-[320px]"
          )}
        >
          <div>
            <h4 className="font-semibold lg:text-3xl">
              Advanced task tracking
            </h4>
            <p className="text-muted-foreground text-sm lg:text-base">
              Manage projects smarter. Start now.
            </p>
          </div>

          {/* wrapper: height fixed by parent, width grows naturally */}
          <div className="relative h-full aspect-[490/361] max-w-[60%] max-h-[95%]">
            <Image
              src="/tracking.png"
              alt="Advanced Task Tracking"
              width={490}
              height={361}
              className="object-contain"
              priority
            />
          </div>
        </div>
        <div
          className={cn(
            GRID_ITEM_CLASSNAME,
            "h-[205px] col-start-1 col-end-3 row-start-2 row-end-3 flex flex-col justify-between items-center sm:col-start-2 sm:col-end-4 sm:row-start-1 sm:row-end-2 lg:h-[320px]"
          )}
        >
          <div className="relative max-w-[374px] h-[140px] lg:max-w-[600px] lg:h-[230px]">
            <Image
              src="/optimize.png"
              alt="Advanced Task Tracking"
              width={773}
              height={289}
              className="object-contain"
              priority
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent"></div>
              <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent"></div>
            </div>
          </div>

          <div className="text-center mb-2">
            <h4 className="font-semibold lg:text-3xl">Time Management Tools</h4>
            <p className="text-muted-foreground text-sm lg:text-base">
              Manage projects smarter. Start now.
            </p>
          </div>
        </div>
        <div
          className={cn(
            GRID_ITEM_CLASSNAME,
            "h-[210px] col-start-1 col-end-2 row-start-3 row-end-4 flex flex-col justify-between items-center sm:row-start-1 sm:row-end-2 lg:h-[320px]"
          )}
        >
          <div className="text-center px-2 py-1 lg:px-6">
            <h4 className="font-semibold lg:text-3xl">AI Integration</h4>
            <p className="text-muted-foreground text-sm lg:text-base">
              AI knows your schedule even better than you do!
            </p>
          </div>
          <div className="relative max-w-[168px] h-[140px] lg:max-w-[250px] lg:h-[210px]">
            <Image
              src="/ai.png"
              alt="AI assistant image"
              width={381}
              height={321}
              className="object-contain"
              priority
            />
          </div>
        </div>
        <div
          className={cn(
            GRID_ITEM_CLASSNAME,
            "h-[210px] col-start-2 col-end-3 row-start-3 row-end-4 flex flex-col justify-center items-center gap-3 sm:row-start-2 sm:row-end-3 sm:col-start-3 sm:col-end-4 lg:h-[320px]"
          )}
        >
          <h3 className="font-bold text-2xl text-center lg:text-5xl">
            Grab your <br />
            favourite
          </h3>
          <TemplateN className="lg:hidden" width={158} height={61} />
          <TemplateN className="hidden lg:block" width={316} height={122} />
          <Button className="py-4 px-6 cursor-pointer lg:text-xl lg:py-6 lg:px-12 lg:rounded-xl ">
            Get Started!
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Features;
