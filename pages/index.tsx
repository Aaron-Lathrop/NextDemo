import { useState, useEffect, useRef, useCallback, RefObject } from 'react';
import { NextPage, NextPageContext } from 'next';
import Layout from '../components/layouts/Layout';
import { TVMazeShowList, TVMazeShow } from '../types/TVMazeShow';

import fetch from 'isomorphic-unfetch';
import TVMazeLink from '../components/TVMazeLink';

import TextUtil from '../utils/text';

const Index: NextPage<TVMazeShowList> = ({ query, shows }: TVMazeShowList) => {
    const [searchQuery, setSearchQuery] = useState(query);
    const [tvshows, setTvShows] = useState(shows);
    const [hoverItem, setHoverItem] = useState('');
    const [dropDownOptions, setDropDownOptions] = useState([]);
    const [title, setTitle] = useState(TextUtil.toTitleCase(query));

    const searchFormRef = useRef<HTMLFormElement>(null);
    const searchRef = useRef<HTMLInputElement>(null);
    const searchOptionList = useCallback((searchInput: RefObject<HTMLInputElement>) => {
        if(searchInput !== null) {
            getSearchOptions(searchInput.current?.value)
                .then((options: any) => {
                    setDropDownOptions(options);
                })
                .then((res) => searchInput.current?.value && setSearchQuery(searchInput.current?.value))
                .catch((error: any) => console.log(error));
        }
    }, []);

    const cache: any = {};
    let isSumbitting = false;

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        if (isSumbitting == true) setTimeout(() => {}, 500); // throttles requests
        
        if (isSumbitting == false && searchQuery != '')
        {
            isSumbitting = true;
            const res = await fetch(`https://api.tvmaze.com/search/shows?q=${searchQuery}`);
            const data = await res.json();
            setTitle(TextUtil.toTitleCase(searchQuery))
            setTvShows(data);
        }
        isSumbitting = false;
    }

    const getSearchOptions = async (seachQuery: string | undefined) => {
        if (isSumbitting == true) setTimeout(() => {}, 200); // throttles requests

        let showList: any = [];
        if(searchQuery)
        {
            isSumbitting = true;
            const res = await fetch(`https://api.tvmaze.com/search/shows?q=${seachQuery}`);
            const data = await res.json();
            showList = data.map((item: TVMazeShow) => {
                return (
                <option key={item.show.id} 
                        value={item.show.name}
                >
                    {item.show.name}
                </option>)
            });
        }
        isSumbitting = false;
        return showList;
    }

    function getId(element: HTMLElement) {
        setHoverItem(element.id);
    }

    function clearId() {
        setHoverItem('');
    }

    const getHoveredItemImage = () => {
        const currentHoveredItem = cache[hoverItem] || tvshows.find(item => item.show.id == hoverItem);
        return currentHoveredItem && currentHoveredItem.show && currentHoveredItem.show.image && currentHoveredItem.show.image.medium || '';
    }

    return (
        <Layout title="NextJS Demo">
            <div style={{maxWidth: '80vw'}}>
                <form onSubmit={e => handleSubmit(e)}
                      ref={searchFormRef}
                      className="tv-search-box">
                    <label>Search for a show</label>
                    
                    <datalist id="searchTerm" 
                              className="input-dropdown"
                    >
                        <select>
                        {
                            dropDownOptions
                        }
                        </select>
                        
                    </datalist>
                    <input name="searchTerm"
                           list="searchTerm"
                           ref={searchRef}
                           autoComplete='off'
                           onChange={e => {
                                    searchOptionList(searchRef);
                                } 
                            }
                           type="text" 
                           placeholder="Search..."/>
                    <input type="submit" value="Search" />
                </form>
                <h1>{title}</h1>
                <ul>
                    {tvshows.map( (item: TVMazeShow) => {
                        if(!cache[item.show.id]){
                            cache[item.show.id] = item
                        }
                        return (
                            <TVMazeLink key={item.show.id} 
                                id={`${item.show.id}`} 
                                title={item.show.name} 
                                route='tvmazeshows'
                                search={title}
                                getId={getId}
                                clearId={clearId} />
                        )
                        }
                    )
                    }
                </ul>
                {
                    hoverItem != '' ?
                        <img className="float-right" src={`${getHoveredItemImage()}`}></img> :
                        ''
                }
            </div>
            <style jsx>{`
                h1, a {
                    font-family: 'Arial';
                }

                ul {
                    display: inline-block;
                    padding: 0;
                }

                .float-right {
                    float: right;
                }

                .tv-search-box {
                    margin-top: 20px;
                }

                .tv-search-box label {
                    display: block;
                    margin-bottom: 5px;
                }

                .tv-search-box input,
                .input-dropdown {
                    border: 1px solid #aaa;
                    padding: 7px 10px;
                }

                .tv-search-box input:hover,
                .tv-search-box input:focus,
                .input-dropdown:hover,
                .input-dropdown:focus {
                    border: 1px solid blue;
                    box-shadow: .5px .5px #aaa;
                    transition: all .2s ease-in-out .2s;
                }
            `}
            </style>
        </Layout>
    );
}
    

Index.getInitialProps = async function(context: NextPageContext): Promise<TVMazeShowList> {
    let initialQuery: string = context.query.searchTerm as string || 'Batman';
    initialQuery = initialQuery.replace("-", " ");
    const res: Response = await fetch(`https://api.tvmaze.com/search/shows?q=${initialQuery}`);
    const data: TVMazeShow[] = await res.json() as TVMazeShow[];

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