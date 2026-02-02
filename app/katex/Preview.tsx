import Katex from './Katex'

type Props = {
    input: string
}

export default function Preview({ input }: Props) {
    return (
        <div className="flex flex-col gap-4">
            <h2 className="text-lg font-semibold">Preview:</h2>
            <Katex
                className="p-12 border border-gray-200 rounded-lg bg-zinc-50 dark:bg-zinc-900 dark:border-zinc-700 min-h-24 flex items-center justify-center"
                input={input}
            />
        </div>
    )
}
