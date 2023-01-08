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
    <div className="flex flex-row py-4 w-full">
      <div className="relative w-1/2 h-full">
        <div className="aspect-w-4 aspect-h-3 md:aspect-w-16 md:aspect-h-9">
          <img
            className="w-full h-full object-cover rounded-lg"
            src={image}
            alt="project-image"
          />
        </div>
      </div>
      <div className="flex flex-col justify-center pl-4 w-2/3 md:pl-8">
        <h2 className="text-lg line-clamp-2 md:text-2xl font-medium text-neutral-900">
          {title}
        </h2>
        <span className="text-sm line-clamp-1 md:line-clamp-2 md:text-base font-normal text-neutral-600 py-4">
          {desc}
        </span>
        <hr className=" text-neutral-900 pt-2" />
        <p className="text-sm font-normal text-neutral-900 pt-2">{timeline}</p>
      </div>
    </div>
  );
}
