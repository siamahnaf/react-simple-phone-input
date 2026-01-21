"use client";
import { ReactNode, useMemo, useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneLight } from "react-syntax-highlighter/dist/esm/styles/prism";

//Interface
interface Props {
    code: string;
    title: string;
    children: ReactNode;
    language?: string;
    showLineNumbers?: boolean;
    maxHeight?: number;
}

const CodeBlock = ({
    code,
    title = "Example",
    children,
    language = "tsx",
    showLineNumbers = true,
    maxHeight = 360,
}: Props) => {
    const [copied, setCopied] = useState(false);

    const onCopy = async () => {
        try {
            await navigator.clipboard.writeText(code);
            setCopied(true);
            window.setTimeout(() => setCopied(false), 1200);
        } catch { }
    };
    const cleanedCode = useMemo(() => code.replace(/^\s*\n|\n\s*$/g, ""), [code]);

    return (
        <div>
            <h4 className="text-xl font-semibold mb-3">{title}</h4>

            {children}

            <div className="mt-3 overflow-hidden rounded-xl border border-gray-200/60 bg-white">
                <div className="flex items-center justify-between border-b border-gray-200/60 bg-black/3 px-3 py-2">
                    <span className="text-xs font-medium text-black/60">{language.toUpperCase()}</span>
                    <button
                        type="button"
                        onClick={onCopy}
                        className="rounded-lg px-2 py-1 text-xs font-medium text-black/70 hover:bg-black/5 active:scale-[0.98] cursor-pointer"
                    >
                        {copied ? "Copied" : "Copy"}
                    </button>
                </div>
                <div className="overflow-auto" style={{ maxHeight }}>
                    <SyntaxHighlighter
                        language={language}
                        style={oneLight}
                        showLineNumbers={showLineNumbers}
                        wrapLongLines
                        wrapLines
                        PreTag="div"
                        customStyle={{
                            margin: 0,
                            background: "transparent",
                            padding: "14px 14px",
                            fontSize: 13,
                            lineHeight: 1.7,
                        }}
                        lineNumberStyle={{
                            minWidth: "2.5em",
                            paddingRight: "1em",
                            opacity: 0.45,
                        }}
                        codeTagProps={{
                            style: {
                                fontFamily:
                                    'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
                            },
                        }}
                    >
                        {cleanedCode}
                    </SyntaxHighlighter>
                </div>
            </div>
        </div>
    );
};

export default CodeBlock;
