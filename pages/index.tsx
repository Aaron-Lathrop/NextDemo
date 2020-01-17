import { NextPage } from 'next';
import Layout from '../components/layouts/Layout';

const Home: NextPage<{ userAgent: string }> = ({ userAgent }) => (
    <Layout title="NextJS Demo">
        <div>Welcome to Next.js - { userAgent }!</div>
    </Layout>
);

Home.getInitialProps = async ({ req }) => {
    const userAgent = req ? req.headers['user-agent'] || '' : navigator.userAgent;
    return {userAgent};
}

export default Home