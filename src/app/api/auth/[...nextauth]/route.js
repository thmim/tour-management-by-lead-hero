import NextAuth from "next-auth";
import FacebookProvider from "next-auth/providers/facebook";

// Configure NextAuth
const authOptions = {
  providers: [
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    }),
    // you can add more providers here
  ],
  secret: process.env.NEXTAUTH_SECRET,
};

// Create NextAuth handler
const handler = NextAuth(authOptions);

// Export handlers for HTTP methods
export { handler as GET, handler as POST };
