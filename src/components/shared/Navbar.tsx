"use client";

import { toggleNavbar } from "@/lib/features/theme/themeSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import Image from "next/image";
import Link from "next/link";
import PrimaryButton from "./PrimaryButton";
import { useGetUserQuery } from "@/lib/features/user/userApi";
import { deleteCookie, getCookie } from "cookies-next";
import { setUser } from "@/lib/features/user/userSlice";

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
  {
    label: "Users",
    path: "/users",
  },
];
const Navbar = () => {
  const { navbarOpen } = useAppSelector((state) => state.theme);
  const { user } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  const {} = useGetUserQuery(
    {},
    {
      skip: getCookie("accessToken") ? false : true,
    }
  );

  const handleLogOut = () => {
    deleteCookie("accessToken");
    dispatch(setUser(null));
  };

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
        {user ? (
          <div className="bg-gray-50 shadow rounded flex items-center gap-3 px-3 py-2">
            <Image
              src="/images/user.png"
              alt="user"
              width={36}
              height={36}
              priority
              className="rounded-full "
            />

            <div>
              <p className="text-sm font-medium">{user?.name}</p>
              <p className="text-xs text-neutral-500">{user?.email}</p>
            </div>

            <button
              className="ml-4 rounded-full w-9 h-9 bg-gray-200 grid place-items-center"
              onClick={handleLogOut}
            >
              <Image
                src="/images/logout.png"
                alt="logout"
                width={28}
                height={28}
                priority
              />
            </button>
          </div>
        ) : (
          <Link href="/login" className="hidden md:block">
            <PrimaryButton>Get Started</PrimaryButton>
          </Link>
        )}

        {/* Menu Button */}
        <button className="md:hidden" onClick={() => dispatch(toggleNavbar())}>
          <Image
            src="/images/menu.svg"
            alt="menu"
            width={24}
            height={24}
            priority
          />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
