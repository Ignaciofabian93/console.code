"use client";
import React from "react";
import Navbar from "@/components/navigation/Navbar";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="container h-screen text-content1">
      <Navbar />
      <div className="container h-[calc(100%_-_70px)] flex flex-col items-center justify-center p-[1rem]">
        {children}
      </div>
    </main>
  );
};

export default MainLayout;
