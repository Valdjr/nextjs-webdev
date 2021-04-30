import Nav from './Nav'
import Header from './Header'
import Styles from '../styles/Layout.module.css';
import Head from 'next/head'

export default function Layout({children}) {
    return (
        <>
        <Head>
            <title>WebDev</title>
        </Head>
        <Nav/>
        <div className={Styles.container}>
            <main className={Styles.main}>
                <Header/>
                {children}
            </main>
        </div>
        </>
    )
}
