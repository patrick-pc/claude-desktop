"use client";

import { useEffect } from "react";
import * as seline from "@seline-analytics/web";

export function SelineAnalytics(): null {
  useEffect(() => {
    seline.init({
      token: process.env.NEXT_PUBLIC_SELINE_TOKEN,
    });
  }, []);

  return null; // This component doesn't render anything
}
