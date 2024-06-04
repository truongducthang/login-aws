/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        AWS_ACCESS_KEY_ID: 'AWS_ACCESS_KEY_ID',
        AWS_SECRET_ACCESS_KEY: 'AWS_SECRET_ACCESS_KEY',
        COGNITO_REGION: 'COGNITO_REGION'
    },
};

export default nextConfig;
