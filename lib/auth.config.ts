import Credentials from 'next-auth/providers/credentials'
import type { NextAuthConfig } from 'next-auth'

export default {
  providers: [
    Credentials({
      async authorize() {
        return null
      },
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      if (session.user && token.sub) {
        session.user.id = token.sub
      }
      return session
    },
    async jwt({ token, user }) {
      if (user) {
        token.sub = user.id
        token.email = user.email
        token.name = user.name
      }
      return token
    },
  },
} satisfies NextAuthConfig
