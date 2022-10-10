interface Props {
	post: {
		content: {
			categories: string[];
			date: string;
			description: string;
			slug: string;
			tags: string[];
			title: string;
		};
	};
}

function Preview({ post }: Props) {
	return (
		<>
			<h1>{post.content.title}</h1>
			<h3>{post.content.description}</h3>
			<p>{post.content.date}</p>
		</>
	);
}

export default Preview;
