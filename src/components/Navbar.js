import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { ArrowRight, Menu } from "lucide-react";
import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";

function Navbar() {
  return (
    <nav className="sticky h-16 inset-x-0 top-0 z-30 w-full border-b border-blue-100 bg-blue-50/90 backdrop-blur-sm transition-all">
      <MaxWidthWrapper>
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center justify-center gap-14">
            <Link
              href="/"
              className="flex z-40 font-bold text-lg items-center gap-2"
            >
              <img
                src="/brand-logos/conferencefinderapplogo.png"
                alt="Conference Finder Logo"
                height={36}
                width={36}
                className="h-9 w-9 object-contain"
              />
              <span className="ml-2 text-blue-700">Conference Finder</span>
            </Link>

            <div className="hidden md:flex items-center justify-center gap-8 lg:gap-14">
              <Link
                href="#pricing"
                className="font-semibold text-blue-700 hover:text-purple-600 hover:underline hover:underline-offset-1"
              >
                Pricing
              </Link>
              <Link
                href="#demo"
                className="font-semibold text-blue-700 hover:text-purple-600 hover:underline hover:underline-offset-1"
              >
                Demo
              </Link>
              <Link
                href="#faq"
                className="font-semibold text-blue-700 hover:text-purple-600 hover:underline hover:underline-offset-1"
              >
                FAQ
              </Link>
              <Link
                href="#about"
                className="font-semibold text-blue-700 hover:text-purple-600 hover:underline hover:underline-offset-1"
              >
                About
              </Link>
            </div>
          </div>

          {/* TODO: Add mobile menu */}
          <div className="md:hidden">
            <Menu className="h-6 w-6 cursor-pointer" />
          </div>

          <div className="hidden md:flex items-center space-x-1.5">
            <a
              href="http://localhost:3000"
              className={cn(
                buttonVariants({ size: "sm" }),
                "flex items-center justify-center group px-4"
              )}
            >
              <span>Sign in</span>
              <ArrowRight className="ml-1.5 transform h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
}

export default Navbar;
