import NextAuth from 'next-auth';
import Cognito from 'next-auth/providers/cognito';
import GitHub from 'next-auth/providers/github';
import type { Provider } from 'next-auth/providers';

const useSecureCookies = ((process.env.NEXTAUTH_URL as any) ?? '').startsWith(
  'https://'
);
const cookiePrefix = useSecureCookies ? '__Secure-' : '';
// const hostName = 'localhost'
// const hostName = process.env.NEXTAUTH_URL ? new URL(process.env.NEXTAUTH_URL).hostname : 'localhost';
const rootDomain = "vercel.app";

const providers: Provider[] = [
  // Cognito,
  GitHub,
];

export const { auth, handlers, signIn, signOut } = NextAuth({
  providers: providers,
  session: {
    strategy: 'jwt',
  },

  secret: process.env.NEXT_AUTH_SECRET,
  cookies: {
    sessionToken: {
      name: `${useSecureCookies ? '__Secure-' : ''}next-auth.session-token`,
      options: {
        httpOnly: true,
        sameSite: 'lax',
        path: '/',
        secure: useSecureCookies,
        // domain: hostName == 'localhost' ? hostName : '.' + rootDomain, // add a . in front so that subdomains are included,
        domain: '.' + rootDomain, // add a . in front so that subdomains are included
      },
    },
  },
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

  // callbacks: {
  //   async signIn({ user, account, profile, email, credentials }) {
  //     return true
  //   },
  //   async redirect({ url, baseUrl }) {
  //     return baseUrl
  //   },
  //   async session({ session, token, user }) {
  //     return session
  //   },
  //   async jwt({ token, user, account, profile, isNewUser }) {
  //     return token
  //   }
  // }

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
