import { providerMap, signIn } from '@/app/auth';
import { Button } from 'antd';

type Props = {};

export default async function SignInButton({}: Props) {
  return (
    <div className="flex flex-col gap-2">
      {Object.values(providerMap).map((provider) => (
        <form
          key={provider.id}
          action={async () => {
            'use server';
            await signIn(provider.id);
          }}
        >
          <Button htmlType="submit">
            <span>Sign in with {provider.name}</span>{' '}
          </Button>
        </form>
      ))}
    </div>
  );
}
