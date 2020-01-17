import Layout from '../../components/layouts/Layout';
import { Post } from '../../interfaces/Post';

const BlogPost = ({ id, title, route }: Post) => (
    <Layout title={title}>
        <h1>{title}</h1>
        <p>{route}</p>
    </Layout>
);

BlogPost.getInitialProps = (context: {query: {id: string}}) => {
    const posts: Array<Post> = [
        { id: 'hello-nextjs', title: 'Hello Next.js', route: 'blog' },
        { id: 'learn-nextjs', title: 'Learn Next.js is awesome', route: 'blog' },
        { id: 'deploy-nextjs', title: 'Deploy apps with ZEIT', route: 'blog' }
      ];
    return posts.find(post => post.id === context.query.id);
}

export default BlogPost