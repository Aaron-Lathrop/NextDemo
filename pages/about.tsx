import { NextPage } from 'next';
import Layout from '../components/layouts/Layout';

const About: NextPage = () => (
    <Layout title="About - NextJS Demo">
        <h1>About</h1>
        <hr />
        <p>This is a sample about page for the NextJS demo site.</p>
    </Layout>
);

export default About