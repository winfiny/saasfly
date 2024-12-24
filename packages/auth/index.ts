import type {
  GetServerSidePropsContext,
  NextApiRequest,
  NextApiResponse,
} from "next";
import { FirestoreAdapter } from "@auth/firebase-adapter";
import { getAuth, signInWithEmailAndPassword } from "@firebase/auth";
import { cert } from "firebase-admin/app";
import { getServerSession, type NextAuthOptions, type User } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

import { db } from "./db";
import { env } from "./env.mjs";
import firebase_app from "./firebase_config";

type UserId = string;
type IsAdmin = boolean;

declare module "next-auth" {
  interface Session {
    user: User & {
      id: UserId;
      isAdmin: IsAdmin;
    };
  }
}

declare module "next-auth" {
  interface JWT {
    isAdmin: IsAdmin;
  }
}

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login",
  },
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  adapter: FirestoreAdapter({
    credential: cert({
      projectId: process.env.AUTH_FIREBASE_PROJECT_ID,
      clientEmail: process.env.AUTH_FIREBASE_CLIENT_EMAIL,
      privateKey: process.env.AUTH_FIREBASE_PRIVATE_KEY,
    }),
  }),

  providers: [
    // GitHubProvider({
    //   clientId: env.GITHUB_CLIENT_ID,
    //   clientSecret: env.GITHUB_CLIENT_SECRET,
    //   httpOptions: { timeout: 15000 },
    // }),
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "e-mail", type: "email", required: true },
        password: { label: "password", type: "password", required: true },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;

        const user = await signInWithEmailAndPassword(
          getAuth(firebase_app),
          credentials.email,
          credentials.password,
        );
        console.log(user);
        if (user) {
          return { id: user.user.uid, email: user.user.email };
        } else {
          return null;
        }
      },
    }),
  ],
  // callbacks: {
  //   session({ token, session }) {
  //     if (token) {
  //       if (session.user) {
  //         session.user.id = token.id as string;
  //         session.user.name = token.name;
  //         session.user.email = token.email;
  //         session.user.image = token.picture;
  //         session.user.isAdmin = token.isAdmin as boolean;
  //       }
  //     }
  //     return session;
  //   },
  //   async jwt({ token, user }) {
  //     const email = token?.email ?? "";
  //     const dbUser = await db
  //       .selectFrom("User")
  //       .where("email", "=", email)
  //       .selectAll()
  //       .executeTakeFirst();
  //     if (!dbUser) {
  //       if (user) {
  //         token.id = user?.id;
  //       }
  //       return token;
  //     }
  //     let isAdmin = false;
  //     if (env.ADMIN_EMAIL) {
  //       const adminEmails = env.ADMIN_EMAIL.split(",");
  //       if (email) {
  //         isAdmin = adminEmails.includes(email);
  //       }
  //     }
  //     return {
  //       id: dbUser.id,
  //       name: dbUser.name,
  //       email: dbUser.email,
  //       picture: dbUser.image,
  //       isAdmin: isAdmin,
  //     };
  //   },
  // },
  debug: env.IS_DEBUG === "true",
};

// Use it in server contexts
export function auth(
  ...args:
    | [GetServerSidePropsContext["req"], GetServerSidePropsContext["res"]]
    | [NextApiRequest, NextApiResponse]
    | []
) {
  return getServerSession(...args, authOptions);
}

export async function getCurrentUser() {
  const session = await getServerSession(authOptions);
  return session?.user;
}
