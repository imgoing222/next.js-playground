import Link from "next/link";
import { Post } from "../types/post";
import useSWR from "swr";

interface Props {
	post: Post;
	id: string;
}

function Preview() {
	const { data } = useSWR("getAllPosts");
	console.log(data);
	return (
		<>
			{/* <Link href="/[id]" as={`/${id}`}>
				<h1>{post.content.title}</h1>
			</Link>
			<p>{post.content.description}</p>
			<h4>{post.content.date}</h4> */}
		</>
	);
}

export default Preview;
