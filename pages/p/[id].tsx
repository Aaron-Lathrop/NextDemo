import Link from 'next/link';
import Layout from '../../components/layouts/Layout';
import fetch from 'isomorphic-unfetch';
import { TVMazeShow } from '../../interfaces/TVMazeShow';


const Post = (props: TVMazeShow) => {
  return (
    <Layout title={props.show.name}>
      <Link href={`/?search=${props.search}`}>
        <a>{`<<< Back to results`}</a>
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
};

Post.getInitialProps = async function(context: { query: { id: number}, asPath: string; }) {
  const { id } = context.query;
  const search = context.asPath.substring(context.asPath.indexOf("search=") + "search=".length);
  const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
  const show = await res.json();

  return { show, search };
};

export default Post;
