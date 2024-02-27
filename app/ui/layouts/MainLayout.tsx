"use client";
import React from "react";
import Navbar from "@/components/navigation/Navbar";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="w-full h-full text-content1 overflow-x-hidden">
      <Navbar />
      <div className="w-full max-w-[900px] h-full flex flex-col items-center justify-center pt-[2rem] pb-[5rem] mx-auto">
        {children}
      </div>
    </main>
  );
};

export default MainLayout;
