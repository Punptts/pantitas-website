import { type } from "os";
import React from "react";

type ProjectCardProps = {
  title: string;
  image: string;
  desc: string;
  timeline: string;
};

export default function ProjectCard({
  title,
  image,
  desc,
  timeline,
}: ProjectCardProps) {
  return (
    <div className="flex flex-row py-4">
      <div className="w-1/2 h-52 bg-neutral-900">
        <img src={image} alt="" />
      </div>
      <div className="flex flex-col justify-center pl-8">
        <h2 className=" text-2xl font-medium text-neutral-900">{title}</h2>
        <p className=" text-base font-normal text-neutral-600 py-4">{desc}</p>
        <hr className="text-neutral-900 pt-2" />
        <p className=" text-base font-normal text-neutral-900 pt-2">
          Icon: {timeline}
        </p>
      </div>
    </div>
  );
}
