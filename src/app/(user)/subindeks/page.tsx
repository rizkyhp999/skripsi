"use client";
import React from "react";

import SubIndeks from "@/components/pages/subIndeks";
import useSWR from "swr";
async function fetcher(url: string) {
  const res = await fetch(url);
  const data = await res.json();
  return data.data;
}
export default function Page() {
  const {
    data: vitalitasData,
    error: vitalitasError,
    isLoading: vitalitasLoading,
  } = useSWR("/api/vitalitas", fetcher);

  return <SubIndeks data={vitalitasData}></SubIndeks>;
}
