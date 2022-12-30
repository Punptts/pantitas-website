import * as React from "react";

type Title = {
  children: any;
};

export default function Button() {
  return (
    <button class="w-fit px-4 py-2 bg-neutral-900 text-neutral-200">
      About Me
    </button>
  );
}
