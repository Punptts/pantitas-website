import { type } from "os";
import React from "react";

type BlogCardProps = {
  title: string;
  image: string;
  desc: string;
};

export default function BlogCard({ title, image, desc }: BlogCardProps) {
  return (
    <div className=" px-4">
      <div className=" w-auto h-44 bg-neutral-900">
        <img src={image} alt="" />
      </div>
      <div>
        <h2 className=" text-2xl font-medium text-neutral-900 pt-4">{title}</h2>
        <p className=" text-base font-normal text-neutral-600 pt-2">{desc}</p>
      </div>
    </div>
  );
}
