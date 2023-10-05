import React from "react";
import Nav from "./nav";

type LayoutProps = { children?: React.ReactNode };
export default function Layout({ children }: LayoutProps) {
  return (
    <div className=" min-h-screen w-full bg-[#F7F7F7]">
      <Nav />
      {children}
    </div>
  );
}
