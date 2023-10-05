"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Avatar } from "@nextui-org/react";
import { useRouter, usePathname } from "next/navigation";

export default function Nav() {
  const router = useRouter();

  return (
    <div className=" flex  min-h-[4rem] w-full items-center bg-white shadow-md">
      <div className="mx-auto flex w-full max-w-screen-2xl items-center justify-between px-4 lg:px-10">
        {/* Logo */}
        <h1 className="font-bold">Voting System</h1>
        {/* Nav Links */}
        <div className="hidden items-center gap-8 lg:flex ">
          <NavLink label="Dashboard" path="/admin/dashboard" />
          <NavLink label="Candidates" path="/admin/candidates" />
        </div>
        <div></div>
        <div></div>
        {/* Profile */}
        <div className="flex items-center gap-4">
          <div className="text-right ">
            <h5 className="text-sm leading-none">John Doe</h5>
            <Link href={"/"} className="text-xs font-medium text-blue-500  ">
              <div className="py-1 leading-none transition-all  duration-100 lg:hover:translate-y-1">
                Sign Out
              </div>
            </Link>
          </div>
          <Avatar
            isBordered
            color="default"
            src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
            className="h-9 w-9"
          />
        </div>
      </div>
    </div>
  );
}

type NavLinkProps = {
  path: string;
  label: string;
};
function NavLink({ path, label = "Link" }: NavLinkProps) {
  const urlPath = usePathname();
  const currentPath = urlPath.includes(path.toLowerCase());
  return (
    <Link
      href={path}
      className={`flex h-20 items-center border-b-3 ${
        currentPath ? " border-black" : "border-none text-slate-400/80"
      }  px-2`}
    >
      <div className="transition-all duration-100 lg:hover:translate-y-1 lg:hover:text-green-400">
        {label}
      </div>
    </Link>
  );
}
