export interface Post {
	content: Omit<PostContent, "htmlContent" | "id">;
	filename: string;
	id: string;
}

export interface PostContent {
	categories: string[];
	date: string;
	description: string;
	slug: string;
	tags: string[];
	title: string;
	id: string;
	htmlContent: string;
}
