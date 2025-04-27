import type { NextPage } from "next";
import Preview from "../components/Preview";
import { Post } from "../types/post";
import { getAllPosts } from "../utils/getPosts";
import { SWRConfig } from "swr";

interface Props {
	fallback: {
		posts: Post[];
	};
}

const Posts: NextPage<Props> = ({ fallback }) => {
	return (
		<SWRConfig value={{ fallback }}>
			<Preview />
		</SWRConfig>
	);
};

export async function getStaticProps() {
	const posts = getAllPosts();
	return {
		props: {
			fallback: {
				posts,
			},
		},
	};
}

export default Posts;
