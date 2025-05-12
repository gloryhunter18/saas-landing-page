import { Sparkle, Search, Bell, Info, Bookmark } from "lucide-react";

function FeatureDisplay() {
  return (
    <section className="bg-purple-50 py-24 pb-16">
      <div className="max-w-sm sm:max-w-2xl lg:max-w-3xl mx-auto flex flex-col gap-4">
        <h2 className="tracking-tight font-bold text-center md:text-center text-3xl lg:text-5xl lg:leading-[3.5rem] text-blue-700">
          All you need to find the right event, faster
        </h2>
        <p className="font-semibold my-4 text-center md:text-center text-black">
          Discovering relevant conferences shouldn't take hours. With Conference
          Finder, you'll get the tools, insights, and notifications to stay
          ahead — without the overwhelm.
        </p>

        <div className="flex flex-wrap md:flex-nowrap items-center justify-center md:justify-between gap-8 md:gap-0 mt-4">
          <div className="flex flex-col items-center gap-2 group cursor-pointer">
            <Search
              color="#2563eb"
              className={`h-5 w-5 md:h-10 md:w-10 group-hover:text-gray-600 transition-colors duration-200`}
            />
            <p
              className={`text-sm font-semibold text-black group-hover:text-purple-600 transition-colors duration-200`}
            >
              Targeted Filters
            </p>
          </div>
          <div className="flex flex-col items-center gap-2 group cursor-pointer">
            <Bell
              color="#2563eb"
              className={`h-5 w-5 md:h-10 md:w-10 group-hover:text-gray-600 transition-colors duration-200`}
            />
            <p
              className={`text-sm font-semibold text-black group-hover:text-purple-600 transition-colors duration-200`}
            >
              Smart Alerts
            </p>
          </div>
          <div className="flex flex-col items-center gap-2 group cursor-pointer">
            <Info
              color="#2563eb"
              className={`h-5 w-5 md:h-10 md:w-10 group-hover:text-gray-600 transition-colors duration-200`}
            />
            <p
              className={`text-sm font-semibold text-black group-hover:text-purple-600 transition-colors duration-200`}
            >
              Event Details at a Glance
            </p>
          </div>
          <div className="flex flex-col items-center gap-2 group cursor-pointer">
            <Bookmark
              color="#2563eb"
              className={`h-5 w-5 md:h-10 md:w-10 group-hover:text-gray-600 transition-colors duration-200`}
            />
            <p
              className={`text-sm font-semibold text-black group-hover:text-purple-600 transition-colors duration-200`}
            >
              Save & Track Events
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeatureDisplay;
