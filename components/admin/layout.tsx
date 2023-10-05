import React, { Children } from "react";
import Nav from "./nav";
import NavBottom from "./navBottom";

type Props = { children: React.ReactNode };

export default function Layout({ children }: Props) {
  return (
    <div className="min-h-screen bg-[#F9FAFB]">
      <Nav />
      <div className="mx-auto w-full max-w-screen-2xl px-4 pb-14 lg:p-4 lg:px-10 ">
        {children}
      </div>
      <NavBottom />
    </div>
  );
}
