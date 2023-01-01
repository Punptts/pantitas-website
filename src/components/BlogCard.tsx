import { type } from "os";
import React from "react";

type BlogCardProps = {
  coverImage: string;
  title: string;
  desc: string;
};

export default function BlogCard({ title, coverImage, desc }: BlogCardProps) {
  return (
    <div className="px-4">
      <img src={coverImage} className="rounded-lg" alt="cover-img" />
      <div>
        <h2 className=" text-2xl font-medium text-neutral-900 pt-4">{title}</h2>
        <p className=" text-base font-normal text-neutral-600 pt-2">{desc}</p>
      </div>
    </div>
  );
}
