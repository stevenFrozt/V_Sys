"use client";

import Image from "next/image";
import React, { useState } from "react";
import logo from "@/public/images/login/aclcLogo.jpg";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@nextui-org/react";
import { ScanLine } from "lucide-react";
import axios from "axios";
import jwt from "jsonwebtoken";
import { useRouter } from "next/navigation";

type tokenData = {
  account: {
    timestamp: string;
    _id: string;
    student_id: string;
    first_name: string;
    last_name: string;
    birth_date: string;
    strand: string;
    block: string;
    grade_lvl: string;
    password: string;
  };
  iat: number;
  exp: number;
};
export default function Page() {
  const [form, setForm] = useState({ student_id: "", password: "" });
  const [validationMessage, setValidationMessage] = useState("");
  const router = useRouter();

  async function Submit(e: React.FormEvent<HTMLFormElement>) {
    setValidationMessage("");
    e.preventDefault();
    console.table(form);

    // try {
    //   const response = await axios.post("http://localhost:5000/auth", form);
    //   const token = jwt.decode(response.data.token) as tokenData;
    // } catch (error: any) {
    //   console.error(error);
    //   setValidationMessage(error.response?.data?.message);
    // }
  }

  return (
    <div
      className="bg-login flex
     min-h-screen w-full items-center justify-center overflow-hidden bg-no-repeat lg:bg-[url('/images/login/loginBG.jpg')] "
    >
      {/* form */}
      <div className="h-screen w-full  rounded-2xl bg-white shadow-large filter-none lg:h-[80vh] lg:w-[25%] lg:min-w-[400px]">
        <div>
          {/* LOGO */}
          <div className="mx-auto w-fit pb-5 pt-6">
            <Image
              src={logo}
              width={270}
              height={127}
              alt="aclc logo"
              className="h-24 w-auto"
            />
          </div>

          <form onSubmit={Submit} className="  px-10 md:px-24 lg:px-10">
            <div className="grid w-full  items-center gap-1.5">
              <Label htmlFor="email">Account ID</Label>
              <Input
                type="text"
                id="email"
                placeholder="Enter Account ID"
                autoComplete="new-password"
                className=" focus-visible:ring-blue-500"
                onChange={(e) =>
                  setForm({ ...form, student_id: e.target.value })
                }
                required
              />
            </div>
            <div className="mt-5 grid w-full  items-center gap-1.5">
              <Label htmlFor="password">Password</Label>
              <Input
                type="password"
                id="password"
                placeholder="Enter Password"
                className="focus-visible:ring-blue-500"
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                required
              />
            </div>
            <div className="mb-6 mt-2 flex w-full justify-end ">
              <button
                type="button"
                className="text-xs text-blue-500 transition-all duration-150 focus-visible:outline-blue-500 lg:hover:translate-y-1"
              >
                forgot password?
              </button>
            </div>
            <div className="relative h-4 w-full ">
              <h5
                className={`absolute -top-6  w-full py-2 text-center text-sm ${
                  validationMessage ? "" : "hidden"
                } text-red-500`}
              >
                {validationMessage}
              </h5>
            </div>
            <Button
              color="primary"
              className="w-full rounded-md bg-[#FF0D13]"
              type="submit"
            >
              Sign In
            </Button>

            <div className="mt-6 flex items-center">
              <span className="h-[1px] w-full bg-gray-500/20" />
              <p className="px-6 text-slate-400">or</p>
              <span className="h-[1px] w-full bg-gray-500/20" />
            </div>

            <Button
              variant="bordered"
              className="mb-12 mt-6 w-full rounded-md border-[#FF0D13] text-[#FF0D13]"
            >
              Scan QR Code <ScanLine className="h-5" />
            </Button>

            <p className="text-center text-sm">
              Don’t have an Account?{" "}
              <span className="text-blue-500">Register</span>.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
