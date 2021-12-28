import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaClient } from "@prisma/client";
import { PrismaAdapter } from "@next-auth/prisma-adapter";

const monthInSeconds = 30 * 24 * 60 * 60;

const prisma = new PrismaClient();

export default NextAuth({
	adapter: PrismaAdapter(prisma),
	secret: process.env.SECRET,
	providers: [
		// OAuth authentication providers
		GoogleProvider({
			clientId: process.env.GOOGLE_ID!,
			clientSecret: process.env.GOOGLE_SECRET!,
		}),
	],
	session: {
		// Seconds - How long until an idle session expires and is no longer valid.
		maxAge: monthInSeconds, // 30 days
	},
	pages: {
		signIn: "/auth/login",
	},
});
