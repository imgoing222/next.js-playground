import type { NextPage } from "next";
import Preview from "../components/Preview";
import { Post } from "../types/post";
import { getAllPosts } from "../utils/getPosts";

interface Props {
	posts: Post[];
}

const Posts: NextPage<Props> = ({ posts }) => {
	return (
		<div>
			{posts.map((post) => (
				<Preview key={post.filename} post={post} id={post.id} />
			))}
		</div>
	);
};

export async function getStaticProps() {
	const posts = getAllPosts();
	return {
		props: {
			posts,
		},
	};
}

export default Posts;
