import type { MetaFunction } from "@remix-run/node";
import { useState } from "react";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  const [numclicks, setNumclicks] = useState(0)
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex flex-col items-center gap-16">
        <header className="flex flex-col items-center gap-9">
          <h1 className="leading text-2xl font-bold text-gray-800 dark:text-gray-100">
            Click image for random image
          </h1>
          <div className="h-[144px] w-[434px]">
            <img
              onClick={() => setNumclicks(numclicks + 1)}
              src={`https://loremflickr.com/200/200?random=${Math.floor(numclicks / 3)}`}
              alt="Remix"
              className="block w-full"
            />
          </div>
        </header>

      </div>
    </div>
  );
}
