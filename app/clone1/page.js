import Link from 'next/link';
import Head from 'next/head';
import styles from '../Clone1.module.css';

export default function Clone1Start() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Maze Challenge - Clone 1</title>
        <meta name="description" content="Can you find the treasure?" />
        <meta name="puzzle-solution" content="Check section 'winner'" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>The Mysterious Labyrinth</h1>
        <p className={styles.description}>
          You stand at the entrance, unsure of what lies ahead...
        </p>

        <div className={styles.grid}>
          <Link href="/clone1/start" className={styles.card}>
            <h2>Enter the Maze &rarr;</h2>
            <p>Begin your journey into the unknown.</p>
          </Link>
        </div>
        
        {/* Hidden elements that provide clues */}
        <div style={{display:'none'}}>
          Try adding "winner" to the URL
        </div>
        
        <a href="/clone1/winner" style={{ display: 'none' }}>Secret Winner Link</a>
        
        {/* HTML Comment with hint */}
        {/* <!-- Hint: The true path can be found at section 'winner' --> */}
      </main>

      {/* Hidden script that logs hints to console */}
      <script dangerouslySetInnerHTML={{ __html: `
        console.log("Developer hint: Use cheat code 'winnerpath' like you do in GTA to unlock the game");
        
        // Secret key sequence detector
        let keys = [];
        const secretCode = 'winnerpath';
        window.addEventListener('keydown', (e) => {
          keys.push(e.key);
          keys = keys.slice(-10);
          if (keys.join('').includes(secretCode)) {
            alert('Secret path unlocked! Go to /clone1/winner');
          }
        });
      `}} />
    </div>
  );
}