import { useMemo } from "react";
import katex from "katex";

import "katex/dist/katex.min.css";

type Props = {
    input: string
    className: string
}

export default function Katex({ input, className }: Props) {
    const html = useMemo(() => {
        const cleanedInput = input.replace(/<\/?katex>/gi, "");
        return katex.renderToString(cleanedInput, {
            throwOnError: false,
            displayMode: false,
            output: "htmlAndMathml",
        });
    }, [input]);

    return (
        <div className={className} dangerouslySetInnerHTML={{ __html: html }} />
    )
}
