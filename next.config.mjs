/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        AWS_ACCESS_KEY_ID: 'AWS_ACCESS_KEY_ID',
        AWS_SECRET_ACCESS_KEY: 'AWS_SECRET_ACCESS_KEY',
        COGNITO_REGION: 'COGNITO_REGION',
        
        AUTH_GITHUB_ID: '',
        AUTH_GITHUB_SECRET: '',

        NEXT_AUTH_SECRET:'NEXT_AUTH_SECRET',
        AUTH_SECRET: '',
        NEXTAUTH_URL: 'https://login-aws-tdt-1.vercel.app'
    },
    trailingSlash: false
};

export default nextConfig;
