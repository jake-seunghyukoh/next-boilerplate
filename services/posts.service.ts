import { Post, PrismaClient } from "@prisma/client";

export async function getAllPosts(): Promise<Post[]> {
	const prisma = new PrismaClient();
	return prisma.post.findMany();
}
