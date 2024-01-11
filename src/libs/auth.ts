import { NextAuthOptions } from "next-auth";
import { SanityAdapter, SanityCredentials } from "next-auth-sanity";
import GoogleProvider from "next-auth/providers/google";
import sanityClient from "./sanityClient";

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    SanityCredentials(sanityClient)
  ],
  session: {
    strategy: "jwt"
  },
  adapter: SanityAdapter(sanityClient),
  debug: process.env.NODE_ENV === "development",
  secret: process.env.NEXT_AUTH_SECRET,
  callbacks: {
    session: async ({ session, token }) => {
      const userEmail = token.email;
      const userIdObject = await sanityClient.fetch<{ _id: string }>(
        `*[_type == "user" && email == "${userEmail}"] {
          _id
        }`,
        { email: userEmail } 
      );
      return {
        ...session,
        user: {
          ...session.user,
          id: userIdObject._id,
        }
      }
    }
  },
}