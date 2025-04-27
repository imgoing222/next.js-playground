import type { NextPage } from "next";
import { PathParams } from "../types/global";
import { PostContent } from "../types/post";
import { getAllPostIds, getPostDetail } from "../utils/getPosts";
import useSWR from "swr";
import { SWRConfig } from "swr";

interface Props {
	fallback: {
		postData: PostContent;
	};
}

const PostDetail: NextPage<Props> = ({ fallback }) => {
	const { data } = useSWR("getPostDetail", { fallbackData: fallback });

	return (
		<SWRConfig value={{ fallback }}>
			{data && (
				<>
					<h1>{data.postData.title}</h1>
					<p>{data.postData.date}</p>
					<div
						dangerouslySetInnerHTML={{ __html: data.postData.htmlContent }}
					/>
				</>
			)}
		</SWRConfig>
	);
};

export async function getStaticProps({ params }: PathParams) {
	const postData = await getPostDetail(params.id);
	return {
		props: {
			fallback: {
				postData,
			},
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
