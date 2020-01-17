import { NextPage } from 'next';
import Link from 'next/link';
import Layout from '../components/layouts/Layout';

import fetch from 'isomorphic-unfetch';

const Index: NextPage<{ userAgent: string }> = ({ userAgent }) => (
    <Layout title="NextJS Demo">
        <div>Welcome to Next.js - { userAgent }!</div>
    </Layout>
);

Index.getInitialProps = async ({ req }) => {
    const userAgent = req ? req.headers['user-agent'] || '' : navigator.userAgent;
    return {userAgent};
}

export default Index