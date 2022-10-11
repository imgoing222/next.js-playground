import path from "path";
import fs from "fs";
import matter from "gray-matter";
import { convertMarkdownToHtml } from "./convertMarkdownToHtml";

const postsDirectory = path.join(process.cwd(), "__posts");
const filename = fs.readdirSync(postsDirectory);

export function getAllPosts() {
	const posts = filename.map((filename) => {
		const id = filename.replace(/\.md$/, "");
		const filePath = path.join(postsDirectory, filename);
		const content = fs.readFileSync(filePath, "utf-8");

		const matterData = matter(content);

		return {
			id,
			filename,
			content: matterData.data,
		};
	});

	return posts;
}

export async function getPostDetail(id: string) {
	const detailPath = path.join(postsDirectory, `${id}.md`);
	const content = fs.readFileSync(detailPath, "utf-8");

	const matterData = matter(content);

	const htmlContent = await convertMarkdownToHtml(matterData.content);

	return {
		id,
		htmlContent,
		...matterData.data,
	};
}

export function getAllPostIds() {
	return filename.map((filename) => {
		return {
			params: {
				id: filename.replace(/\.md$/, ""),
			},
		};
	});
}
