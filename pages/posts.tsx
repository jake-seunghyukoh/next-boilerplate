import { Post } from "@prisma/client";
import { getAllPosts } from "@services/posts.service";

type PostsProps = {
	posts: Post[];
};

export default function Posts({ posts }: PostsProps) {
	return (
		<main>
			<section>
				{posts.map((post) => (
					<aside key={post.id}>{post.title}</aside>
				))}
			</section>
		</main>
	);
}

export async function getServerSideProps() {
	const posts = await getAllPosts();

	return { props: { posts: posts } };
}
