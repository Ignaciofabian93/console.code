"use client";
import {
  Api,
  AsyncAwait,
  Conditionals,
  Functions,
  Variables,
} from "@/app/ui/javascript";
import MainLayout from "@/app/ui/layouts/MainLayout";
import { usePathname } from "next/navigation";
import React from "react";

const Lessons = () => {
  const path = usePathname();

  const pathInit = "/sections/javascript";

  return (
    <MainLayout>
      {path === `${pathInit}/variables` && <Variables />}
      {path === `${pathInit}/conditionals` && <Conditionals />}
      {path === `${pathInit}/functions` && <Functions />}
      {path === `${pathInit}/asyncAwait` && <AsyncAwait />}
      {path === `${pathInit}/api` && <Api />}
    </MainLayout>
  );
};

export default Lessons;
