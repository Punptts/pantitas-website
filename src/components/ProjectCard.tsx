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
    <div className="py-6 md:px-4">
      <div className="md:flex md:flex-row p-4 border border-neutral-500 rounded-lg">
        <div className="relative md:w-3/4 h-full">
          <div className="aspect-w-16 aspect-h-9">
            <img
              className="w-full h-full object-cover rounded-lg"
              src={image}
              alt="project-image"
            />
          </div>
        </div>
        <div className="flex flex-col justify-center md:w-5/6 md:pl-8">
          <h2 className="text-xl line-clamp-2 pt-6 lg:text-2xl md:pt-0 lg:pb-4 font-bold text-neutral-900">
            {title}
          </h2>
          <span className="text-base line-clamp-3 pt-4 lg:text-lg md:pt-2 lg:pb-4 font-normal text-neutral-600">
            {desc}
          </span>
          <p className="text-base font-normal text-neutral-600 pt-4 md:pt-2">
            {timeline}
          </p>
        </div>
      </div>
    </div>
  );
}
