import NextAuth, { NextAuthOptions } from "next-auth";
// import Providers from "next-auth/providers";
import CredentialsProvider from "next-auth/providers/credentials";
import React, { useEffect, useState } from "react";
import axios from "axios";

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
    // error: "/auth/error",
    // signOut: "/auth/signout",
  },
};

export default NextAuth(authOptions);
