"use client";

import { useState, useEffect } from "react";
import katex from "katex";
import "katex/dist/katex.min.css";

export default function Home() {
  const [input, setInput] = useState("c = \\pm\\sqrt{a^2 + b^2}");
  const [html, setHtml] = useState("");

  useEffect(() => {
    try {
      const cleanedInput = input.replace(/<\/?katex>/gi, "");

      const rendered = katex.renderToString(cleanedInput, {
        throwOnError: false,
        displayMode: true,
      });
      setHtml(rendered);
    } catch (error) {
      setHtml('<span style="color: red;">Invalid LaTeX</span>');
    }
  }, [input]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col gap-8 py-32 px-16 bg-white dark:bg-black">
        <div className="flex flex-col gap-4">
          <label htmlFor="latex-input" className="text-lg font-semibold">
            Enter LaTeX:
          </label>
          <textarea
            id="latex-input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="w-full h-32 p-4 border border-gray-300 rounded-lg font-mono text-sm resize-y focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-zinc-900 dark:border-zinc-700 dark:text-white"
            placeholder="Enter LaTeX expression..."
          />
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="text-lg font-semibold">Preview:</h2>
          <div
            className="p-6 border border-gray-200 rounded-lg bg-zinc-50 dark:bg-zinc-900 dark:border-zinc-700 min-h-24 flex items-center justify-center"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </main>
    </div>
  );
}
