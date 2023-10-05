"use client";

import Layout from "@/components/admin/layout";
import React from "react";
import { motion } from "framer-motion";

export default function Dashboard() {
  return (
    <Layout>
      <div className="flex w-full flex-col gap-4 pt-4 lg:flex-row lg:gap-10 lg:pt-4">
        {/* OverAll Stats */}
        <div className="w-full">
          <CardTableAll />
        </div>
        {/* Each Stats */}
        <div className="flex-col space-y-4 pb-6 lg:max-h-[calc(650px-80px)] lg:w-[60%] lg:space-y-10 lg:overflow-y-auto">
          <CardTable position="President" />
          <CardTable position="Vice-President" />
          <CardTable position="Secretary" />
        </div>
      </div>
    </Layout>
  );
}

type tableItem = {
  position?: string;
  name?: string;
  votes?: number;
};

function CardTableAll() {
  return (
    <div className="w-full rounded-3xl  bg-white p-8 shadow-md ">
      <h5 className="text-md font-medium lg:text-base">OverAll</h5>
      <div className="flex gap-3 pb-4">
        <h3 className="text-3xl font-semibold">10,234</h3>
        <span className="self-end pb-[2px] text-sm text-slate-400/80">
          Total votes
        </span>
      </div>
      {/* Table */}

      <TableHeader />
      <div className="flex flex-col gap-4">
        <TableItem position="president" name="John Doe" votes={20} />
        <TableItem position="Vice President" name="John Paul" votes={20} />
        <TableItem position="Secretary" name="Redemple" votes={1050} />
        <TableItem position="Treasurer" name="Redemple" votes={1050} />
        <TableItem
          position="Public Relations Officer"
          name="Redemple"
          votes={1050}
        />
        <TableItem position="Committee Heads" name="Redemple" votes={1050} />
      </div>
    </div>
  );
}
type CardTableProps = {
  position: string;
};
function CardTable({ position }: CardTableProps) {
  return (
    <div className="w-full rounded-3xl  bg-white p-8 shadow-md ">
      <h5 className="font-medium">{position}</h5>
      <div className="flex gap-3 pb-4">
        <h3 className="text-3xl font-semibold">10,234</h3>
        <span className="self-end pb-[2px] text-sm text-slate-400/80">
          Total votes
        </span>
      </div>
      {/* Table */}
      <TableHeader position={false} />
      <div className="flex flex-col  gap-4">
        <TableItem name="John Doe" votes={20} />
        <TableItem name="John Paul" votes={20} />
        <TableItem name="Redemple" votes={1050} />
        <TableItem name="Redemple" votes={1050} />
        <TableItem name="Redemple" votes={1050} />
        <TableItem name="Redemple" votes={1050} />
      </div>
    </div>
  );
}

function TableItem({ position, name = "No Name", votes = 12 }: tableItem) {
  return (
    <div className="flex items-center justify-between gap-1 text-sm lg:gap-2 lg:text-base">
      {position ? (
        <h5 className="min-w-[4.5rem] max-w-[4.5rem] capitalize lg:min-w-[6rem]  lg:max-w-[6rem]">
          {position}
        </h5>
      ) : (
        ""
      )}

      <div className="w-full  rounded-lg  lg:mr-4 ">
        <motion.div
          className="relative h-7 rounded-lg bg-[#79FF63] text-black lg:h-10 "
          animate={{
            width: "100%",
          }}
          initial={{ width: "0%" }}
          transition={{
            ease: "backInOut",
            duration: 1,
          }}
        >
          <h5 className="absolute top-1/2 -translate-y-1/2 whitespace-nowrap pl-2 font-medium capitalize">
            {name}
          </h5>
        </motion.div>
      </div>
      <h5 className=" min-w-[2.5rem]  text-right">{votes}</h5>
    </div>
  );
}

function TableHeader({ position = true }) {
  return (
    <div className="flex items-center justify-between gap-2 py-2 text-sm text-slate-400/80 lg:text-base">
      {position ? <h5 className="min-w-[6rem] max-w-[6rem]">Position</h5> : ""}
      <div className="relative  mr-4 w-full rounded-lg">
        <h5 className=" whitespace-nowrap ">Candidates</h5>
      </div>
      <h5 className="w-[3.5rem] text-right">Votes</h5>
    </div>
  );
}
