import NextAuth from 'next-auth';
import Cognito from 'next-auth/providers/cognito';
import GitHub from 'next-auth/providers/github';
import type { Provider } from 'next-auth/providers';

const providers: Provider[] = [
  // Cognito,
  GitHub,
];

export const { auth, handlers, signIn, signOut } = NextAuth({
  providers: providers,
  // basePath: '/auth',
  // pages: {
  //   signIn: '/signin',
  // },
  // callbacks: {
  //   authorized({ request, auth }) {
  //     const { pathname } = request.nextUrl
  //     if (pathname === "/middleware-example") return !!auth
  //     return true
  //   },
  //   jwt({ token, trigger, session, account }) {
  //     if (trigger === "update") token.name = session.user.name
  //     if (account?.provider === "keycloak") {
  //       return { ...token, accessToken: account.access_token }
  //     }
  //     return token
  //   },
  //   async session({ session, token }) {
  //     if (token?.accessToken) {
  //       session.accessToken = token.accessToken
  //     }
  //     return session
  //   },
  // },
  // experimental: {
  //   enableWebAuthn: true,
  // },
  // debug: process.env.NODE_ENV !== 'production' ? true : false,
});

export const providerMap = providers.map((provider) => {
  if (typeof provider === 'function') {
    const providerData = provider();
    return { id: providerData.id, name: providerData.name };
  } else {
    return { id: provider.id, name: provider.name };
  }
});
