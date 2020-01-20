import * as React from 'react';
import Head from 'next/head';
import NavBar from '../Navbar';
import SideBar from '../SideBar';

type Props = {
    title?: String
}

const Layout: React.FunctionComponent<Props> = ({
    children,
    title = 'This is the default title',
}) => (
    <div style={{backgroundColor: '#fff'}}>
        <div className='body'>
            <Head>
                <title>{title}</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <header>
                <SideBar />
            </header>
            <div style={{marginLeft: '15%'}}>
                {children}
            </div>
        </div>
        <footer style={{marginLeft: '15%'}}>
            <hr/>
            <span>Copyright { new Date().getFullYear()} - Aaron LM</span>
        </footer>
        <style jsx>{`
            .body {
                margin: 15px;
                min-height: 100vh;
            }
        `}
        </style>
    </div>

)

export default Layout