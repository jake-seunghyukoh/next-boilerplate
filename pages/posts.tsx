import { Post, PrismaClient } from "@prisma/client";

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
	const prisma = new PrismaClient();
	const posts = await prisma.post.findMany();

	return { props: { posts: posts } };
}
