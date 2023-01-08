import { type } from "os";
import React from "react";

type BlogCardProps = {
  coverImage: string;
  title: string;
  desc: string;
  createdAt: string;
};

export default function BlogCard({
  title,
  coverImage,
  desc,
  createdAt,
}: BlogCardProps) {
  return (
    <div className="py-6 md:px-4">
      <div className="aspect-w-16 aspect-h-9">
        <img
          className="w-full h-full object-cover rounded-lg"
          src={coverImage}
          alt="cover-img"
        />
      </div>
      <div className="flex items-center space-x-2 pt-3">
        <div className="border-l-2 border-l-neutral-600 rounded-md h-6" />
        <span className="text-sm text-neutral-900">{createdAt}</span>
      </div>
      <div>
        <h2 className="text-lg line-clamp-2 font-medium text-neutral-900 pt-2">
          {title}
        </h2>
        <span className="text-sm line-clamp-2 font-normal text-neutral-600 pt-2">
          {desc}
        </span>
      </div>
    </div>
  );
}
