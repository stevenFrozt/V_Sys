"use client";
import React from "react";
import Layout from "@/components/user/layout";
import { Button } from "@nextui-org/react";
export default function Page() {
  return (
    <Layout>
      <div className="mx-auto min-h-[calc(100vh-64px)] max-w-screen-2xl overflow-hidden bg-[url('/images/welcome/voteBG.jpg')] bg-cover bg-top bg-no-repeat px-4  lg:min-h-[calc(100vh-80px)]  lg:bg-[center_-11rem] lg:px-20">
        <div className="flex min-h-[calc(100vh-80px)] items-center justify-center pb-20  text-center lg:justify-start lg:text-left">
          <div className="space-y-3  text-white lg:space-y-4">
            <h1 className="text-4xl font-semibold md:text-5xl lg:text-7xl">
              Welcome to ACLC <br />
              Voting System
            </h1>
            <div className="lg:pl-4">
              <p className="text-md leading-loose  md:text-lg">
                Start (5:00 PM | September 10, 2023 )<br /> End (5:00 PM |
                January 5, 2023)
              </p>

              <Button className="my-4 w-40 rounded-sm bg-user-primary py-6 text-lg text-white lg:hover:translate-y-1 lg:hover:bg-red-800">
                Vote Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
