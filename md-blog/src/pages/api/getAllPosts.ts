import { getAllPosts } from "../../utils/getPosts";

export default function handler(req: any, res: any) {
	return getAllPosts();
}
