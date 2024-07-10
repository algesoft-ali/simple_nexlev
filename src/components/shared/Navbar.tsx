import Image from "next/image";
import Link from "next/link";
import PrimaryButton from "./PrimaryButton";

const navLinks = [
  {
    label: "Pricing",
    path: "/",
  },
  {
    label: "Affiliate",
    path: "/",
  },
  {
    label: "Tutorials",
    path: "/",
  },
  {
    label: "Course",
    path: "/",
  },
];
const Navbar = () => {
  return (
    <nav className="sticky w-full left-0 top-0 z-[99] p-4 bg-white/50 backdrop-blur-md">
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/images/logo.svg"
            alt="logo"
            priority
            width={160}
            height={46}
          />
        </Link>

        {/* Menu */}
        <div className="hidden md:flex md:gap-7 lg:gap-14 items-center">
          {navLinks.map((item, i) => (
            <Link
              href={item.path}
              key={i}
              className="text-black hover:text-primary font-medium leading-6 transition-all duration-200"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Button */}
        <Link href="/login">
          <PrimaryButton>Get Started</PrimaryButton>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
