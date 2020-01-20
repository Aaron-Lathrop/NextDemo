import Link from 'next/link';

type PostLinkProps = {
    id: string,
    route: string,
    title: string,
}

const PostLink = ( props: PostLinkProps ) => (
    <li key={props.id}
        id={props.id} >
        <Link href={`/${props.route}/[id]`} as={`/${props.route}/${props.id}`}>
            <a>{props.title}</a>
        </Link>
        <style jsx>{`
            li {
                list-style: none;
                margin: 5px 0;
            }
        
            a {
                text-decoration: none;
                color: blue;
                font-family: 'Arial';
            }
    
            a:hover {
                opacity: 0.6;
            }
        `}</style>
    </li>
);

export default PostLink