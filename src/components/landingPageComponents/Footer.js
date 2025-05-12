import MaxWidthWrapper from "../MaxWidthWrapper";
import Link from "next/link";

function Footer() {
  return (
    <footer className="bg-purple-50 border-t border-blue-100">
      <MaxWidthWrapper className="py-14 pb-20 flex flex-col items-center justify-center md:items-start md:justify-between md:flex-row">
        <div className="max-w-[16rem] flex flex-col space-y-4 items-center justify-center md:items-start md:justify-normal">
          <Link href="/" className="flex items-center z-40 font-bold text-lg">
            <img
              src="/brand-logos/conferencefinderapplogo.png"
              alt="Conference Finder Logo"
              height={36}
              width={36}
              className="h-9 w-9 object-contain mr-2"
            />
            <span className="ml-2 text-blue-700">Conference Finder</span>
          </Link>

          <p className="text-blue-600 md:text-[0.975rem] font-medium text-center md:text-left">
            Discover, track, and never miss a conference again.
          </p>

          <small className="mb-2 block text-blue-400 select-none">
            Conference Finder &copy; {new Date().getFullYear()} - All rights
            reserved
          </small>
        </div>

        <div className="flex flex-col md:flex-row gap-10 md:gap-24 mt-10 md:mt-0">
          <div className="flex flex-col items-center md:items-start px-4">
            <h3 className="font-semibold text-purple-600 mb-2">LINKS</h3>
            <ul className="space-y-2 text-blue-700 text-sm text-center md:text-left">
              <li className="hover:underline hover:underline-offset-1">
                <a href="#" className="hover:text-purple-600">
                  Support
                </a>
              </li>
              <li className="hover:underline hover:underline-offset-1">
                <Link href="#faq" className="hover:text-purple-600">
                  FAQ
                </Link>
              </li>
              <li className="hover:underline hover:underline-offset-1">
                <Link
                  href="#pricing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-purple-600"
                >
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-center md:items-start px-4">
            <h3 className="font-semibold text-purple-600 mb-2">LEGAL</h3>
            <ul className="space-y-2 text-blue-700 text-sm text-center md:text-left">
              <li className="hover:underline hover:underline-offset-1">
                <Link href="/" className="hover:text-purple-600">
                  Privacy Policy
                </Link>
              </li>
              <li className="hover:underline hover:underline-offset-1">
                <Link href="/" className="hover:text-purple-600">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </MaxWidthWrapper>
    </footer>
  );
}

export default Footer;
