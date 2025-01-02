import type { MetaFunction } from "@remix-run/node";
import { useEffect, useState } from "react";
import { generate } from "random-words";
export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  const [numclicks, setNumclicks] = useState(0);
  const numclicks3 = Math.floor(numclicks / 3);

  const [imgurl, setImgurl] = useState(`https://pollinations.ai/prompt/${generate()}`)
  useEffect(() => { setImgurl(`https://pollinations.ai/prompt/${generate()}`) }, [numclicks3])
  return (
    <div className="flex h-screen items-center justify-center" onClick={() => setNumclicks(numclicks + 1)}>
      <div className="flex flex-col items-center gap-16">
        <header className="flex flex-col items-center gap-9">
          <h1 className="leading text-2xl font-bold text-gray-800 dark:text-gray-100">
            Click anywhere three times for random image
          </h1>
          <div className="h-[144px] w-[434px]">
            <img

              src={imgurl}
              alt="Remix"
              className="block w-full"
            />
          </div>
        </header>

      </div>
    </div>
  );
}
