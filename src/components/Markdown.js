import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import remarkRehype from "remark-rehype";
import remarkImages from "remark-images";
import rehypeKatex from "rehype-katex";
import rehypeRaw from "rehype-raw";
import 'katex/dist/katex.min.css'

export function Markdown(props) {
    return (
        <ReactMarkdown
            remarkPlugins={[remarkGfm, remarkMath, remarkRehype, remarkImages]}
            rehypePlugins={[rehypeKatex, rehypeRaw]}>{props.markdown}
        </ReactMarkdown>
    )
}