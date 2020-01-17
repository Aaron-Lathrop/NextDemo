import { NextPage } from 'next';
import Link from 'next/link';

const NavBar: NextPage = () => (
    <div>
        <nav>
            <Link href="/">
                <a>Home</a>
            </Link>
            <Link href="/about">
                <a>About</a>
            </Link>
            <Link href="/blog">
                <a>Blog</a>
            </Link>
        </nav>
        <style jsx>{`
            a {
                text-decoration: none;
                color: blue;
                font-family: 'Arial';
            }
            
            a::after {
                content: " | ";
            }
    
            a:hover {
                opacity: 0.6;
            }
        `}</style>
    </div>
    
);

export default NavBar