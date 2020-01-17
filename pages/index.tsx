import { NextPage, NextPageContext } from 'next';
import Link from 'next/link';
import Layout from '../components/layouts/Layout';
import { TVMazeRes, TVMazeShowList, TVMazeShow } from '../interfaces/TVMazeShow';

import fetch from 'isomorphic-unfetch';

const Index: NextPage<TVMazeShowList> = (props: TVMazeShowList) => (
    <Layout title="NextJS Demo">
        <h1>Welcome to NextJS!</h1>
        <ul>
            {props.shows.map( (item: TVMazeShow) => (
                <li key={item.show.id}>
                    <Link href="/p/[id]" as={`/p/${item.show.id}`}>
                        <a>{item.show.name}</a>
                    </Link>
                </li>
            ))}
        </ul>
    </Layout>
);

Index.getInitialProps = async function() {
    const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
    const data = await res.json();

    console.log(`Show data fetched. Count: ${data.length}`);

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