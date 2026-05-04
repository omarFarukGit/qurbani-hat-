"use client";
import { authClient } from "@/lib/auth-client";
import { Avatar } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { redirect, usePathname } from "next/navigation";
import React from "react";
import { toast } from "react-toastify";
import logo from "@/assets/logo.png";

const Navbar = () => {
  const currentPth = usePathname();
  console.log(currentPth);
  const userData = authClient.useSession();
  const user = userData.data?.user;
  const handleSignOut = async () => {
    await authClient.signOut();
    toast.success("log out successfully");
    redirect("/signin");
  };

  const link = (
    <>
      <li>
        <Link
          className={`${currentPth === "/" ? "bg-red-300" : ""}`}
          href={"/"}
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          className={`${currentPth === "/all-animals" ? "bg-red-300" : ""}`}
          href={"/all-animals"}
        >
          all-animals
        </Link>
      </li>
      <li>
        <Link
          className={`${currentPth === "/profile" ? "bg-red-300" : ""}`}
          href={"/profile"}
        >
          Profile
        </Link>
      </li>
    </>
  );
  return (
    <div className=" sticky top-0 z-50">
      <div className="navbar  shadow-sm backdrop-blur-lg bg-white/10 border border-white/20  ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {link}
            </ul>
          </div>
          <div className=" flex justify-center items-center gap-1">
            <Image
              src={logo}
              alt={"logo.png"}
              width={50}
              height={50}
              className=" rounded-full"
            />
            <Link href={"/"} className=" text-3xl text-blue-700">
              QurBani<span className="text-red-400">Hat</span>
            </Link>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{link}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <div className=" navbar-end gap-2">
              <Avatar>
                <Image
                  src={user?.image}
                  alt={user?.name}
                  width={200}
                  height={200}
                />
              </Avatar>
              <a className="btn" onClick={handleSignOut}>
                Log Out
              </a>
            </div>
          ) : (
            <div className=" flex gap-4">
              <Link className="btn" href={"/signin"}>
                Sign In
              </Link>
              <Link className="btn" href={"/signup"}>
                Sign up
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
