import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkFrontmatter from "remark-frontmatter";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";

export const convertMarkdownToHtml = async (markdown: string) => {
	const file = await unified()
		.use(remarkParse)
		.use(remarkFrontmatter)
		.use(remarkRehype)
		.use(rehypeStringify)
		.process(markdown);

	console.log(String(file));
	return String(file);
};
