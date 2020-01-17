import { NextPage, NextPageContext } from 'next';
import Layout from '../components/layouts/Layout';
import { TVMazeShowList, TVMazeShow } from '../interfaces/TVMazeShow';

import fetch from 'isomorphic-unfetch';
import PostLink from '../components/PostLink';

const Index: NextPage<TVMazeShowList> = ({ shows }: TVMazeShowList) => (
    <Layout title="NextJS Demo">
        <h1>Batman</h1>
        <ul>
            {shows.map( (item: TVMazeShow) => (
                <PostLink key={item.show.id} 
                            id={`${item.show.id}`} 
                            title={item.show.name} 
                            route='p' />
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

Index.getInitialProps = async function() {
    const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
    const data = await res.json();

    return {
        shows: data
    }
}

// Example showing how to use an express-like server endpoint from a component
// Index.getInitialProps = async ({ req }) => {
//     const userAgent = req ? req.headers['user-agent'] || '' : navigator.userAgent;
//     return {userAgent};
//}

export default Index