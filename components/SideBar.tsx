import { NextPage } from 'next';
import Link from 'next/link';

const NavBar: NextPage = () => (
    <div className="side-nav">
        <Link href="/">
            <a>Home</a>
        </Link>
        <Link href="/about">
            <a>About</a>
        </Link>
        <Link href="/blog">
            <a>Blog</a>
        </Link>
        <style jsx>{`
            a {
                display: block;
                padding: 25px 10px;
                text-align: center;
                text-decoration: none;
                color: white;
                font-family: 'Arial';
            }

            a:hover {
                opacity: 0.6;
                background-color: #333;
            }

            .side-nav {
                position: fixed;
                padding-top: 15px;
                min-width: 100px;
                width: 15%;
                height: 100vh;
                background-color: #222;
                top: 0;
                left: 0;
            }
        `}</style>
    </div>
    
);

export default NavBar