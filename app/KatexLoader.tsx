"use client";

import Script from "next/script";

export default function KatexLoader() {
  return (
    <>
      <Script
        src="https://cdn.jsdelivr.net/npm/katex@0.16.27/dist/katex.min.js"
        integrity="sha384-2B8pfmZZ6JlVoScJm/5hQfNS2TI/6hPqDZInzzPc8oHpN5SgeNOf4LzREO6p5YtZ"
        crossOrigin="anonymous"
        strategy="lazyOnload"
      />
      <Script
        src="https://cdn.jsdelivr.net/npm/katex@0.16.27/dist/contrib/auto-render.min.js"
        integrity="sha384-hCXGrW6PitJEwbkoStFjeJxv+fSOOQKOPbJxSfM6G5sWZjAyWhXiTIIAmQqnlLlh"
        crossOrigin="anonymous"
        strategy="lazyOnload"
        onReady={() => {
          (window as any).renderMathInElement(document.body);
        }}
      />
    </>
  );
}
