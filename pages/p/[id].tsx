import { NextPage } from 'next';
import { useRouter } from 'next/router';
import Layout from '../../components/layouts/Layout';

const BlogPost: NextPage = () => {
    const router = useRouter();

    return (
        <Layout title={router.query.id as string}>
            <h1>{router.query.id}</h1>
            <p>This is the blog post content</p>
        </Layout>
    );
};

export default BlogPost