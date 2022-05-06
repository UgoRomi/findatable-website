import NextAuth from 'next-auth';
import AppleProvider from 'next-auth/providers/apple';
export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    AppleProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    // ...add more providers here
  ],
});
