import type { NextPage } from "next";
import { PathParams } from "../types/global";
import { PostContent } from "../types/post";
import { getAllPostIds, getPostDetail } from "../utils/getPosts";

interface Props {
	postData: PostContent;
}

const PostDetail: NextPage<Props> = ({ postData }) => {
	return (
		<>
			<h1>{postData.title}</h1>
			<p>{postData.date}</p>
			<div dangerouslySetInnerHTML={{ __html: postData.htmlContent }} />
		</>
	);
};

export async function getStaticProps({ params }: PathParams) {
	const postData = await getPostDetail(params.id);
	return {
		props: {
			postData,
		},
	};
}

export async function getStaticPaths() {
	const paths = getAllPostIds();
	return {
		paths,
		fallback: false,
	};
}

export default PostDetail;
