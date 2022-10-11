import Link from "next/link";
import { Post } from "../types/post";

interface Props {
	post: Post;
	id: string;
}

function Preview({ post, id }: Props) {
	return (
		<>
			<Link href="/[id]" as={`/${id}`}>
				<h1>{post.content.title}</h1>
			</Link>
			<p>{post.content.description}</p>
			<h4>{post.content.date}</h4>
		</>
	);
}

export default Preview;
