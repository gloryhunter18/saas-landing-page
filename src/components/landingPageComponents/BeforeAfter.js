import MaxWidthWrapper from "../MaxWidthWrapper";
import { Check, Star, X } from "lucide-react";

function BeforeAfter() {
  return (
    <section className="bg-white/80">
      <MaxWidthWrapper className="pb-10 pt-20">
        <div className="max-w-3xl mx-auto tracking-tight flex flex-col items-center justify-center gap-5">
          {/* <div className="flex items-center justify-center gap-1.5">
            <X className="w-8 h-8 sm:w-6 sm:h-6 text-red-600" />
            <h2 className="font-bold text-xl md:text-3xl text-center">
              Insert reason for not using other bad alternatives
            </h2>
          </div> */}

          {/* <div className="flex items-center justify-center gap-1.5">
            <Check className="w-8 h-8 sm:w-6 sm:h-6 text-green-600" />
            <h2 className="font-bold text-xl md:text-3xl text-center text-balance">
              Insert reason for why using your product is better
            </h2>
          </div> */}
        </div>

        <div className="flex flex-col gap-10 lg:flex-row lg:max-w-4xl lg:mx-auto items-center justify-center lg:gap-14 my-16">
          <div className="flex w-full sm:flex-1 flex-col items-center bg-primary-foreground rounded-2xl shadow-md py-8 px-6">
            <ul className="text-left font-medium flex flex-col items-center sm:items-start">
              <div className="space-y-2 tracking-wide text-xl">
                <h3 className="font-bold"> Before (Old Way)</h3>

                <li className="flex gap-1.5 items-center text-left">
                  <X className="h-4 w-4 shrink-0 text-red-500" />
                  Spent hours googling "top conferences in [industry]"
                </li>
                <li className="flex gap-1.5 items-center text-left">
                  <X className="h-4 w-4 shrink-0 text-red-500" />
                  Outdated directories with irrelevant or paid listings
                </li>
                <li className="flex gap-1.5 items-center text-left">
                  <X className="h-4 w-4 shrink-0 text-red-500" />
                  Missed deadlines for sponsorship and stalls
                </li>
                <li className="flex gap-1.5 items-center text-left">
                  <X className="h-4 w-4 shrink-0 text-red-500" />
                  No easy way to track which events actually mattered
                </li>
              </div>
            </ul>
          </div>

          <div className="flex w-full sm:flex-1 flex-col items-center bg-primary/10 rounded-2xl shadow-md py-8 px-6">
            <ul className="text-left font-medium flex flex-col items-center sm:items-start">
              <div className="space-y-2 tracking-wide text-xl">
                <h3 className="font-bold"> After (With Conference Finder):</h3>

                <li className="flex gap-1.5 items-center text-left">
                  <Check className="h-4 w-4 shrink-0 text-green-600" />
                  Instantly see upcoming conferences in your exact industry
                </li>
                <li className="flex gap-1.5 items-center text-left">
                  <Check className="h-4 w-4 shrink-0 text-green-600" />
                  Filter by format, location, and sponsor availability
                </li>
                <li className="flex gap-1.5 items-center text-left">
                  <Check className="h-4 w-4 shrink-0 text-green-600" />
                  Get real-time email alerts when new events go live
                </li>
                <li className="flex gap-1.5 items-center text-left">
                  <Check className="h-4 w-4 shrink-0 text-green-600" />
                  Spend more time selling, not searching
                </li>
              </div>
            </ul>
          </div>
        </div>

        {/* user testimonial */}
        <div className="max-w-lg mx-auto my-20 flex flex-col items-center sm:items-start">
          <div className="mx-auto flex items-center justify-center gap-1 mb-4">
            {Array(5)
              .fill()
              .map((_, i) => (
                <Star
                  key={i}
                  className="h-5 w-5 text-yellow-500 fill-yellow-500"
                />
              ))}
          </div>

          <div className="text-center font-semibold text-balance text-gray-800">
            Before Conference Finder, I was{" "}
            <span className="bg-yellow-200">spending hours every month</span>{" "}
            scouring the internet for relevant events—we're in a niche space, so
            it wasn't easy. Now I just set my filters and get notified the
            moment something worthwhile pops up. It's saved me time, uncovered
            events I would've missed, and even helped us line up a new
            partnership. Game-changer.
          </div>

          <div className="flex mx-auto items-center justify-center gap-4 my-6">
            <img
              src="/users/Harrison.jpeg"
              alt="user"
              className="inline-block pointer-events-none object-cover h-12 w-12 rounded-full ring-2 ring-gray-300"
            />
            <div className="flex flex-col">
              <p className="font-semibold">Harrison Crowe-Maxwell</p>
              <p className="text-sm">CEO of Puralink</p>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}

export default BeforeAfter;
