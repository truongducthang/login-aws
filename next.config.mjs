/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        AWS_ACCESS_KEY_ID: 'AWS_ACCESS_KEY_ID',
        AWS_SECRET_ACCESS_KEY: 'AWS_SECRET_ACCESS_KEY',
        COGNITO_REGION: 'COGNITO_REGION',
        AUTH_SECRET: 'DcRsIz4wAM573UYcwVby5E8PYmY7ravWTEAt9+Rc6dY=',
        AUTH_GITHUB_ID: 'Ov23li8hMFB1hxf3MSlG',
        AUTH_GITHUB_SECRET: '4bd10c5ec17c3733949fd90c2d91b2b770c93d80',

        NEXT_AUTH_SECRET:'NEXT_AUTH_SECRET',
        NEXTAUTH_URL: 'login-aws-tdt-1.vercel.app'
    },
    trailingSlash: false
};

export default nextConfig;
