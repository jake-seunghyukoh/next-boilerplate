import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const monthInSeconds = 30 * 24 * 60 * 60;

export default NextAuth({
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
