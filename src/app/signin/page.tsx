'use server';

import React from 'react';
import { Button, FormProps, Typography, Checkbox, Form, Input } from 'antd';
import { signIn, auth, providerMap } from '@/app/auth';
import { AuthError } from 'next-auth';
import useSession from '../hooks/useSession';
import SignInButton from '../common/SignInButton';

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

export default async function LoginPage({}: Props) {
  const session = await auth();
  console.log('session', session?.user);
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
      <SignInButton />
    </div>
  );
}
