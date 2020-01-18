import { useState } from 'react';
import { NextPage, NextPageContext } from 'next';
import Layout from '../components/layouts/Layout';
import { TVMazeShowList, TVMazeShow } from '../interfaces/TVMazeShow';

import fetch from 'isomorphic-unfetch';
import PostLink from '../components/PostLink';

const Index: NextPage<TVMazeShowList> = ({ query, shows }: TVMazeShowList) => {
    const [searchQuery, setSearchQuery] = useState(query);
    const [tvshows, setTvShows] = useState(shows)

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        const res = await fetch(`https://api.tvmaze.com/search/shows?q=${searchQuery}`);
        const data = await res.json();
        setTvShows(data);
    }

    return (
        <Layout title="NextJS Demo">
            <form onSubmit={e => handleSubmit(e)}
                  className="tv-search-box">
                <label>Search for a show</label>
                <input onChange={e => setSearchQuery(e.target.value)}
                       type="text" 
                       placeholder="Search..."/>
            </form>
            <h1>{searchQuery}</h1>
            <ul>
                {tvshows.map( (item: TVMazeShow) => (
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

                .tv-search-box {
                    margin-top: 20px;
                }

                .tv-search-box label {
                    display: block;
                    margin-bottom: 5px;
                }

                .tv-search-box input {
                    border: 1px solid #aaa;
                    padding: 7px 10px;
                }

                .tv-search-box input:hover,
                .tv-search-box input:focus {
                    border: 1px solid blue;
                    box-shadow: 2px solid black;
                }
            `}
            </style>
        </Layout>
    );
}
    

Index.getInitialProps = async function(context: any) {
    let initialQuery = context.query.search || 'Batman';
    initialQuery = initialQuery.replace("-", " ");
    const res = await fetch(`https://api.tvmaze.com/search/shows?q=${initialQuery}`);
    const data = await res.json();

    return {
        query: initialQuery,
        shows: data
    }
}

// Example showing how to use an express-like server endpoint from a component
// Index.getInitialProps = async ({ req }) => {
//     const userAgent = req ? req.headers['user-agent'] || '' : navigator.userAgent;
//     return {userAgent};
//}

export default Index