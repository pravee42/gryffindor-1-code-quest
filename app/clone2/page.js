import Link from 'next/link';
import Head from 'next/head';
import styles from '../Clone2.module.css'; // Slightly different CSS module

export default function Clone2Start() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Maze Challenge - Clone 2</title>
        <meta name="description" content="Can you find the treasure?" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>The Mysterious Labyrinth</h1>
        <p className={styles.description}>
          You stand at the entrance, unsure of what lies ahead...
        </p>

        <div className={styles.grid}>
          <Link href="/clone2/start" className={styles.card}>
            <h2>Enter the Maze &rarr;</h2>
            <p>Begin your journey into the unknown.</p>
          </Link>
        </div>
        
        {/* No hidden elements or hints in Clone2 */}
      </main>

      {/* No helpful console logs in Clone2 */}
      <script dangerouslySetInnerHTML={{ __html: `
        // Just a decoy script that doesn't do anything useful
        console.log("Welcome to the maze!");
      `}} />
    </div>
  );
}