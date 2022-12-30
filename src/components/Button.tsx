import * as React from "react";

type ButtonProps = {
  title: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
};

export default function Button({ title, leftIcon, rightIcon }: ButtonProps) {
  return (
    <button class="w-fit px-4 py-1.5 rounded-lg bg-neutral-900 text-neutral-200">
      {leftIcon}
      <p>{title}</p>
      {rightIcon}
    </button>
  );
}
