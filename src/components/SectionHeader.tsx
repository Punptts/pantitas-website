import { type } from "os";
import React from "react";

type HeaderProps = {
  title: string;
  textClassName?: string;
};

export default function SectionHeader({ title, textClassName }: HeaderProps) {
  return (
    <div>
      <h2 className="flex justify-center text-2xl font-bold">{title}</h2>
    </div>
  );
}
