import Link from 'next/link';
import Layout from '../../components/layouts/Layout';
import fetch from 'isomorphic-unfetch';
import { TVMazeShow } from '../../interfaces/TVMazeShow';


const Post = (props: TVMazeShow) => (
  <Layout title={props.show.name}>
    <Link href="/">
      {`<<< Back to results`}
    </Link>
    <h1>{props.show.name}</h1>
    <p>Premired: {props.show.premiered}</p>
    <p>Current Status: {props.show.status}</p>
    <p>{props.show.summary && props.show.summary.replace(/<[/]?[pb]>/g, '')}</p>
    {props.show.image ? <img src={props.show.image.medium} /> : null}
    <div>
        <a href={props.show.url} target="_blank" rel="noopener">{props.show.url}</a>
    </div>
  </Layout>
);

Post.getInitialProps = async function(context: { query: { id: number; }; }) {
  const { id } = context.query;
  const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
  const show = await res.json();

  return { show };
};

export default Post;
