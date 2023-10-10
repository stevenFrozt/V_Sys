"use client";

import Image from "next/image";
import React, { useEffect } from "react";
import logo from "@/public/images/login/aclcLogo.jpg";
import { Avatar } from "@nextui-org/react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import cookieCutter from "cookie-cutter";
import { useRouter } from "next/navigation";
import { useAuthContext } from "@/app/providers/authProvider";

export default function Nav() {
  const { authData, display, setDisplay } = useAuthContext();
  const router = useRouter();
  useEffect(() => {
    setDisplay(JSON.parse(cookieCutter.get("userInfo")));
  }, []);

  const signOut = () => {
    // Delete a cookies
    cookieCutter.set("userInfo", "", { expires: new Date(0) });
    cookieCutter.set("voterAuthToken", "", { expires: new Date(0) });
    router.push("/signin");
  };

  return (
    <div className="bg-white">
      <div className="mx-auto flex w-full max-w-screen-2xl items-center justify-between px-4 lg:px-20">
        <Image
          src={logo}
          width={270}
          height={127}
          alt="aclc logo"
          className="h-16 w-auto"
        />
        {/* nav links */}
        <div className="hidden gap-6 lg:flex ">
          <NavLink path="/welcome" label="Welcome" />
          <NavLink path="/vote" label="Vote" />
          <NavLink path="/elected" label="Elected" />
        </div>

        <div className="flex items-center gap-4">
          <div className="text-right leading-none">
            <h5 className="text-sm leading-none">{display?.fullName}</h5>
            <button
              onClick={signOut}
              className="text-xs font-medium text-blue-500  "
            >
              <div className=" leading-none transition-all  duration-100 lg:hover:translate-y-1">
                Sign Out
              </div>
            </button>
          </div>
          <Avatar
            showFallback
            isBordered
            color="danger"
            // src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
            name={display?.nameInitial}
            className="h-9 w-9 "
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
      className={cn(
        `flex h-20 items-center border-b-3 px-2 text-slate-500/50`,
        {
          "border-red-500  font-medium text-user-primary": currentPath,
          "border-none lg:hover:text-black": !currentPath,
        },
      )}
    >
      <div className="transition-all duration-100 lg:hover:translate-y-1 ">
        {label}
      </div>
    </Link>
  );
}
