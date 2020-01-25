import Link from 'next/link';

type TVMazeLinkProps = {
    id: string,
    route: string,
    search: string,
    title: string,
    getId: Function,
    clearId: Function
}

const TVMazeLink = ( props: TVMazeLinkProps ) => (
    <li key={props.id}
        id={props.id}
        onMouseOver={(e) => props.getId(e.currentTarget)}
        onMouseLeave={(e) => props.clearId()} >
        <Link href={`/${props.route}/[id]`} as={`/${props.route}/${props.id}?searchTerm=${props.search}`}>
            <a>{props.title}</a>
        </Link>
        <style jsx>{`
            li {
                display: block;
                list-style: none;
            }
        
            a {
                text-decoration: none;
                color: blue;
                font-family: 'Arial';
                display: block;
                padding: .5em 1em;
                margin: 0;
            }

            a:hover {
                opacity: 0.8;
                background-color: #ccc;
            }
        `}</style>
    </li>
);

export default TVMazeLink