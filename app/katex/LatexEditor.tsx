type Props = {
    setInput: (input: string) => void
}

export default function LatexEditor({ setInput }: Props) {
    return (
        <div className="flex flex-col gap-4">
            <label htmlFor="latex-input" className="text-lg font-semibold">
                Enter LaTeX:
            </label>
            <textarea
                id="latex-input"
                onChange={(e) => setInput(e.target.value)}
                className="w-full h-32 p-4 border border-gray-300 rounded-lg font-mono text-sm resize-y focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-zinc-900 dark:border-zinc-700 dark:text-white"
                placeholder="Enter LaTeX expression..."
            />
        </div>
    )
}
