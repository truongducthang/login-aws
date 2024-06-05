import { signOut } from '@/app/auth';
import { Button } from 'antd';
export function SignOutButton() {
  return (
    <form
      action={async () => {
        'use server';
        await signOut();
      }}
    >
      <Button htmlType="submit">Sign Out</Button>
    </form>
  );
}
