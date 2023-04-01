import { useState } from "react";
import NextAuth, { NextAuthOptions } from "next-auth";
// import Providers from "next-auth/providers";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";
import { useApi } from "@/apis/api";
const $api = useApi;

const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      type: "credentials",
      credentials: {},
      authorize(credentials, req) {
        const { email, password } = credentials as {
          email: String;
          password: string;
        };
        if (email !== "giang@gmail.com" || password !== "1234") {
          throw new Error("invalid credentials");
        }
        return { id: "1234", name: "giang", email: "giang@gmail.com" };
      },
    }),
  ],
  pages: {
    signIn: "/auth/signin",
  },
};

export default NextAuth(authOptions);
