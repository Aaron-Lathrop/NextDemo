import * as React from 'react';
import Head from 'next/head';
import NavBar from '../Navbar';
import Link from 'next/link';

type Props = {
    title?: String
}

const Layout: React.FunctionComponent<Props> = ({
    children,
    title = 'This is the default title',
}) => (
    <div>
        <Head>
            <title>{title}</title>
            <meta charSet="utf-8" />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <header>
            <NavBar />
        </header>
        <body>
            {children}
        </body>
        <footer>
            <hr/>
            <span>Copyright { new Date().getFullYear()} - Aaron LM</span>
        </footer>
    </div>
)

export default Layout