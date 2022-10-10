import type { NextPage } from "next";
import path from "path";
import { promises as fs } from "fs";
import matter from "gray-matter";
import Preview from "../components/Preview";
interface Props {
	posts: {
		content: {
			categories: string[];
			date: string;
			description: string;
			slug: string;
			tags: string[];
			title: string;
		};
		filename: string;
	}[];
}

const Posts: NextPage<Props> = ({ posts }) => {
	console.log(posts);

	return (
		<div>
			{posts.map((post) => (
				<Preview key={post.filename} post={post} />
			))}
		</div>
	);
};

export async function getStaticProps() {
	const postsDirectory = path.join(process.cwd(), "__posts");
	const filenames = await fs.readdir(postsDirectory);

	const posts = filenames.map(async (filename) => {
		const filePath = path.join(postsDirectory, filename);
		const content = await fs.readFile(filePath, "utf8");

		const matterData = matter(content);

		return {
			filename,
			content: matterData.data,
		};
	});

	return {
		props: {
			posts: await Promise.all(posts),
		},
	};
}

export default Posts;
