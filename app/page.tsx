"use client";

import { useState } from "react";
import Preview from "./katex/Preview";
import LatexEditor from "./katex/LatexEditor";

export default function Home() {
  const [input, setInput] = useState("");

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col gap-8 py-32 px-16 bg-white dark:bg-black">
        <LatexEditor setInput={setInput} />
        <Preview input={input} />
      </main>
    </div>
  );
}
