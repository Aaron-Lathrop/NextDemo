import { NextPage } from 'next';
import Link from 'next/link';
import Layout from '../components/layouts/Layout';
import PostLink from '../components/PostLink';

import { Post } from '../interfaces/Post';

function getPosts(): Array<Post> {
    return [
      { id: 'hello-nextjs', title: 'Hello Next.js' },
      { id: 'learn-nextjs', title: 'Learn Next.js is awesome' },
      { id: 'deploy-nextjs', title: 'Deploy apps with ZEIT' }
    ];
}

const Blog: NextPage = () => (
    <Layout title="Blog - NextJS Demo">
        <h1>My Blog</h1>
        <ul>
            {getPosts().map(post => (
                <PostLink key={post.id} id={post.id} title={post.title} />
            ))}
        </ul>
        <style jsx>{`
            h1, a {
                font-family: 'Arial';
            }

            ul {
                padding: 0;
            }
        `}
        </style>
    </Layout>
);

export default Blog