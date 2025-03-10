// pages/index.js - Main landing page with instructions
import Link from 'next/link';
import Head from 'next/head';
import styles from '../Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>The Maze Challenge</title>
        <meta name="description" content="Two identical mazes. Only one has the prize." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>The Maze Challenge</h1>
        
        <p className={styles.description}>
          Two nearly identical mazes. Only one contains the treasure.
        </p>
        
        <div className={styles.instructions}>
          <h2>Instructions:</h2>
          <ol>
            <li>Choose one of the two paths below.</li>
            <li>Navigate through the maze by clicking links.</li>
            <li>Both mazes look identical, but only one contains the real treasure.</li>
            <li>Be careful - there are loops and dead ends!</li>
            <li>Find the differences between the two mazes to discover which one leads to the prize.</li>
          </ol>
          
          <p>
            <strong>Hints:</strong> Pay attention to the source code, use browser developer tools, 
            and look for hidden clues. Sometimes the direct path isn't obvious!
          </p>
        </div>

        <div className={styles.grid}>
          <Link href="/clone1" className={styles.card}>
            <h2>Maze One &rarr;</h2>
            <p>Enter the first labyrinth.</p>
          </Link>

          <Link href="/clone2" className={styles.card}>
            <h2>Maze Two &rarr;</h2>
            <p>Enter the second labyrinth.</p>
          </Link>
        </div>
        
        {/* Hidden hint in HTML comment */}
        {/* <!-- Hint: One of these mazes contains hidden clues in the source code --> */}
      </main>

      <footer className={styles.footer}>
        <p>Can you find the true path?</p>
      </footer>
    </div>
  );
}