import Head from 'next/head' 
import styles from '../styles/Home.module.css' 
import Menu from '../components/menu'
import Structure from '../components/Structure'
export default function Home() {
  return (
    <>
    <div className={styles.container}>
  
      <Head>
        <title>HRI</title>
        <meta name="description" content="Integral Project" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Structure comp={Menu} />
    </div>
    </>
  )
}
