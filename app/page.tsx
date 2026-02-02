"use client";

import { useState } from "react";
import Preview from "./katex/Preview";
import LatexEditor from "./katex/LatexEditor";

export default function Home() {
  const [input, setInput] = useState("");

  return (
    <div className="flex flex-1 items-start justify-center bg-zinc-100 pt-16 font-sans dark:bg-black">
      <main className="flex w-full max-w-5xl flex-col gap-8 rounded-2xl bg-white/95 px-12 py-16 shadow-lg dark:bg-zinc-950">
        <LatexEditor setInput={setInput} />
        <Preview input={input} />
      </main>
    </div>
  );
}
