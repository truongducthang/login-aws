
import React from 'react';
import { Button, FormProps, Typography, Checkbox, Form, Input } from 'antd';
import { signIn, auth, providerMap } from "@/app/auth"
import { AuthError } from "next-auth"

type Props = {};

type FieldType = {
  username?: string;
  password?: string;
};

const onFinish: FormProps<FieldType>['onFinish'] = async ({
  username,
  password,
}) => {
  console.log('Success:', { username, password });
  const response = await signIn('credentials', {
    username: username,
    password: password,
    redirect: false,
  });
  console.log('response sign in:>>', response);
  if (response?.ok) {
  }
};

const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

export default function LoginPage({}: Props) {
    console.log(11,process.env.AUTH_GITHUB_ID)
  return (
    <div className="flex items-center justify-center min-h-screen">
      {/* <Form
        name="basic"
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        layout="vertical"
      >
        <Form.Item<FieldType>
          label="Username"
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<FieldType>
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form> */}

      <div className="flex flex-col gap-2">
      {Object.values(providerMap).map((provider) => (
        <form
          action={async () => {
            "use server"
            try {
              await signIn(provider.id)
            } catch (error) {
              // Signin can fail for a number of reasons, such as the user
              // not existing, or the user not having the correct role.
              // In some cases, you may want to redirect to a custom error
              if (error instanceof AuthError) {
                // return redirect(`${SIGNIN_ERROR_URL}?error=${error.type}`)
              }
 
              // Otherwise if a redirects happens NextJS can handle it
              // so you can just re-thrown the error and let NextJS handle it.
              // Docs:
              // https://nextjs.org/docs/app/api-reference/functions/redirect#server-component
              throw error
            }
          }}
        >
          <button type="submit">
            <span>Sign in with {provider.name}</span>
          </button>
        </form>
      ))}
    </div>
    </div>
  );
}
