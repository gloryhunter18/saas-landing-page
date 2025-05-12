"use client";
import { Building2, CircleCheck } from "lucide-react";
import MaxWidthWrapper from "../MaxWidthWrapper";
import Link from "next/link";

function PricingSection() {
  return (
    <section className="bg-blue-50" id="pricing">
      <MaxWidthWrapper className="py-20">
        <div className="flex flex-col items-center justify-center">
          <div className="bg-purple-100 rounded-full px-4 py-2">
            <p className="text-purple-600 text-xs font-medium tracking-wide">
              PRICING
            </p>
          </div>

          <div className="max-w-lg text-center mt-4">
            <p className="text-blue-600 text-lg">
              Choose the perfect plan for your conference discovery needs
            </p>
          </div>
        </div>

        {/* price chart */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 my-4 md:my-10 text-black">
          {/* free plan */}
          <div className="bg-white p-8 rounded-xl shadow-sm flex flex-col h-full relative border border-blue-100">
            <div className="absolute top-[-1rem] left-1/2 transform -translate-x-1/2 bg-transparent px-3 py-1 rounded-full text-sm font-semibold">
              &nbsp;
            </div>
            <h3 className="text-2xl font-bold mb-4 text-center text-black">
              Starter (Free)
            </h3>

            <p className="font-bold mb-6 text-center">
              <span className="text-6xl text-blue-600">$0 </span>
              <span className="text-xs text-blue-400">/ forever</span>
            </p>

            <p className="text-center font-bold text-black">
              Perfect for anyone who wants to discover upcoming conferences.
            </p>

            <div className="bg-blue-50 w-full py-2 rounded-sm flex items-center justify-center font-medium my-4">
              <p className="text-xs text-black px-4">
                I believe visibility shouldn't come with a paywall
              </p>
            </div>

            <div className="px-6">
              <Link
                href="/"
                className="flex items-center justify-center cursor-pointer border-2 border-blue-600 px-5 py-[0.45rem] rounded-full bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors duration-200 ease-out border-none"
              >
                Start for Free
              </Link>
            </div>

            <p className="font-medium mt-6 mb-4 text-black">Includes:</p>

            <ul className="text-left text-black font-medium space-y-4 mb-8">
              <li className="flex gap-1.5 items-center text-left">
                <CircleCheck className="h-5 w-5 shrink-0 fill-blue-200 text-blue-600" />
                Full access to all conference listings
              </li>
              <li className="flex gap-1.5 items-center text-left">
                <CircleCheck className="h-5 w-5 shrink-0 fill-blue-200 text-blue-600" />
                Search and filter by industry, format, date, and location
              </li>
              <li className="flex gap-1.5 items-center text-left">
                <CircleCheck className="h-5 w-5 shrink-0 fill-blue-200 text-blue-600" />
                View event details and links
              </li>
              <li className="flex gap-1.5 items-center text-left">
                <CircleCheck className="h-5 w-5 shrink-0 fill-blue-200 text-blue-600" />
                Save events to your personal dashboard
              </li>
            </ul>

            <p className="text-center text-sm text-black italic mt-auto px-6 py-4 bg-blue-50 rounded-lg">
              "We built Conference Finder to level the playing field — whether
              you're a solo marketer or a fast-growing startup, you deserve to
              know what's happening in your space."
            </p>
          </div>

          {/* pro plan */}
          <div className="relative bg-white p-8 rounded-xl shadow-sm border-2 md:border-4 border-purple-700 flex flex-col h-full">
            <div className="absolute top-[-1rem] left-1/2 transform -translate-x-1/2 bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm font-semibold">
              Coming Soon
            </div>
            <h3 className="text-2xl font-bold mb-4 text-center text-black">
              Pro
            </h3>

            <p className="font-bold mb-6 text-center">
              <span className="text-6xl text-blue-600">$6 </span>
              <span className="text-xs text-blue-400">/ month</span>
            </p>

            <p className="text-center font-bold text-black">
              For teams who want to move faster and stay ahead of the curve.
            </p>

            <div className="bg-blue-50 w-full py-2 rounded-sm flex items-center justify-center font-medium my-4">
              <p className="text-xs text-black px-4">
                Includes everything in Free, plus:
              </p>
            </div>

            <div className="px-6 mb-6">
              <div className="flex items-center justify-center cursor-pointer px-5 py-[0.5rem] rounded-full bg-purple-100 font-medium text-purple-600 border border-purple-700">
                Coming Soon
              </div>
            </div>

            <p className="font-medium mt-6 mb-4 text-black">Includes:</p>

            <ul className="text-left text-black font-medium space-y-4 mb-8">
              <li className="flex gap-1.5 items-center text-left">
                <CircleCheck className="h-5 w-5 shrink-0 fill-blue-200 text-blue-600" />
                Real-time email notifications for your selected industries
              </li>
              <li className="flex gap-1.5 items-center text-left">
                <CircleCheck className="h-5 w-5 shrink-0 fill-blue-200 text-blue-600" />
                Advanced filtering and saved search alerts
              </li>
              <li className="flex gap-1.5 items-center text-left">
                <CircleCheck className="h-5 w-5 shrink-0 fill-blue-200 text-blue-600" />
                Early access to newly added conferences
              </li>
              <li className="flex gap-1.5 items-center text-left">
                <CircleCheck className="h-5 w-5 shrink-0 fill-blue-200 text-blue-600" />
                Tools for sponsor targeting & outbound planning
              </li>
            </ul>

            <p className="text-center text-sm text-black mt-auto px-6 py-4 bg-blue-50 rounded-lg">
              💡 Paid email alerts are our first premium feature — designed to
              save you hours of manual research while helping you hit your sales
              or sponsorship goals.
            </p>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}

export default PricingSection;
