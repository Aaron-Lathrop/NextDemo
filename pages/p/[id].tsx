import Layout from '../../components/layouts/Layout';
import fetch from 'isomorphic-unfetch';
import { TVMazeShow } from '../../interfaces/TVMazeShow';


const Post = (props: any) => (
  <Layout>
    <h1>{props.show.name}</h1>
    <p>{props.show.summary.replace(/<[/]?[pb]>/g, '')}</p>
    {props.show.image ? <img src={props.show.image.medium} /> : null}
  </Layout>
);

Post.getInitialProps = async function(context: { query: { id: any; }; }) {
  const { id } = context.query;
  const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
  const show = await res.json();

  console.log(`Fetched show: ${show.name}`);

  return { show };
};

export default Post;
