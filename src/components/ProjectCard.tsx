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
        <div className="aspect-w-1 aspect-h-1 md:aspect-w-16 md:aspect-h-9">
          <img
            className="w-full h-full object-cover rounded-lg"
            src={image}
            alt="project-image"
          />
        </div>
      </div>
      <div className="flex flex-col justify-center pl-4 w-5/6 md:pl-8">
        <h2 className="text-lg line-clamp-2 pb-2 md:text-2xl md:pb-4 font-medium text-neutral-900">
          {title}
        </h2>
        <span className="text-sm line-clamp-2 md:line-clamp-2 md:text-base md:pb-4 font-normal text-neutral-600">
          {desc}
        </span>
        <p className="text-sm font-normal text-neutral-900 pt-4 md:pt-0">
          {timeline}
        </p>
      </div>
    </div>
  );
}
