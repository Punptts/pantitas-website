import * as React from "react";

type ButtonProps = {
  title: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
};

export default function Button({ title, leftIcon, rightIcon }: ButtonProps) {
  return (
    <button className="w-fit px-4 py-1.5 rounded-md bg-neutral-900 text-neutral-200">
      {leftIcon}
      <p>{title}</p>
      {rightIcon}
    </button>
  );
}
