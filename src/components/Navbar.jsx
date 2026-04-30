"use client";
import { authClient } from "@/lib/auth-client";
import { Avatar } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { toast } from "react-toastify";

const Navbar = () => {
  const userData = authClient.useSession();
  const user = userData.data?.user;
  const handleSignOut = async () => {
    await authClient.signOut();
    toast.success("log out successfully");
  };
  const link = (
    <>
      <li>
        <Link href={"/"}>Home</Link>
      </li>
      <li>
        <Link href={"/all-animals"}>all-animals</Link>
      </li>
      <li>
        <Link href={"/profile"}>Profile</Link>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar  shadow-sm backdrop-blur-lg bg-white/10 border border-white/20 sticky top-0 ">
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
          <a className="btn btn-ghost text-xl">QurBaniHat</a>
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
            <Link className="btn" href={"/signin"}>
              Sign In
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
