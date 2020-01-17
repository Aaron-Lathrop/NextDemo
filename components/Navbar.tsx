import { NextPage } from 'next';
import Link from 'next/link';

const NavBar: NextPage = () => (
    <div>
        <nav>
            <Link href="/">
                <a>Home</a>
            </Link>
            {' '}|{' '}
            <Link href="/about">
                <a>About</a>
            </Link>
            {' '}|{' '}
            <Link href="/blog">
                <a>Blog</a>
            </Link>
        </nav>
    </div>
    
);

export default NavBar