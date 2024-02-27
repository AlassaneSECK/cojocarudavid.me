// This is where the studio component is mounted.
"use client";

import config from "@/sanity.config";
import { NextStudio } from "next-sanity/studio";

export default function Studio() {
  return <NextStudio config={config} />;
}

export const runtime = "server";