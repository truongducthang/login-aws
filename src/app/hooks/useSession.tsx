'use client';

import { auth } from '@/app/auth';

type Props = {};

export default async function useSession() {
  const session = await auth();
  console.log('session', session);
  return session;
}
