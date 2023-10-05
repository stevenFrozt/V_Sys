import { cn } from "@/lib/utils";
import { BarChart2, Users2 } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function NavBottom() {
  const path = ["/dashboard", "/candidates"];

  return (
    <div className=" fixed bottom-0  w-full border-t-1 border-gray-200/60 bg-white shadow-lg lg:hidden">
      <div className="flex items-center justify-center gap-4">
        <NavLink path="/dashboard" title="dashboard" icon={<BarChart2 />} />

        <NavLink path="/candidates" title="Candidates" icon={<Users2 />} />
      </div>
    </div>
  );
}

type NavLinkProps = {
  path: string;
  icon?: React.ReactNode;
  title: string;
};

function NavLink({ path, icon, title }: NavLinkProps) {
  const urlPath = usePathname();
  const currentPath = urlPath.includes(path.toLowerCase());

  return (
    <button className="relative">
      <Link
        href={path}
        className={cn(
          "flex flex-col items-center  px-1 py-3 after:absolute after:bottom-[1px] after:h-[2px] after:w-full after:rounded-full  after:content-[''] ",
          {
            " after:bg-black ": currentPath,
          },
        )}
      >
        {icon}
        <p className="text-xs">{title}</p>
      </Link>
    </button>
  );
}
