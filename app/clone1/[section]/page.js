'use client'
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import styles from '../../Clone1.module.css';
import { sections } from '../../../data/sections';
import { useParams, useRouter } from 'next/navigation';

export default function Section() {
  const params = useParams();
  const section = params?.section ? params.section : null;
  const router = useRouter();
  const [sectionData, setSectionData] = useState(null);
  const [spellInput, setSpellInput] = useState('');
  const [spellMessage, setSpellMessage] = useState('');

  useEffect(() => {
    if (section) {
      const data = sections.find(s => s.id === section) || sections[0];
      setSectionData(data);

      // Console hints for easter eggs
      if (['loop3', 'mysteriousLever'].includes(section)) {
        console.log("Hint: Try adding 'secret-exit' to the URL to escape");
      }
      if (section === 'library') {
        console.log("Hint: Use the spell 'Lumos' to reveal a hidden clue.");
      }
      if (section === 'vaultOfSecrets') {
        console.log("Hint: Try the spell 'Incendio' on cursed objects to reveal a path.");
      }
    }
  }, [section]);

  if (!sectionData) {
    return <div className={styles.loading}>Loading...</div>;
  }

  // Handle spell input logic
  const handleSpellSubmit = (e) => {
    e.preventDefault();

    const spellActions = {
      "lumos": () => setSpellMessage("🔦 Lumos! A glowing scroll reveals a hidden clue!"),
      "alohomora": () => router.push('/clone1/secretChamber'),
      "incendio": () => setSpellMessage("🔥 Incendio! The cursed object is destroyed, revealing a path."),
      "expecto patronum": () => setSpellMessage("🦌 A glowing Patronus wards off dark forces and opens a new path!"),
      "revelio": () => setSpellMessage("🪄 Revelio! Hidden symbols glow along the wall."),
      "sectumsempra": () => setSpellMessage("⚔️ Uh oh... that was powerful... Be cautious!"),
      "ictus fortunam": () => {
        (Math.random() * 100 < 30 )? router.push('/clone1/winner') : router.push('/clone2/grandStaircase')
      },
    };

    const normalizedSpell = spellInput.toLowerCase().trim();
    
    if (spellActions[normalizedSpell]) {
      spellActions[normalizedSpell]();
    } else {
      setSpellMessage("❌ Nothing happened... Maybe try another spell?");
    }

    setSpellInput('');
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>{sectionData.title} | Maze Challenge</title>
        {section === 'start' && (
          <meta name="puzzle-key" content="Look for differences between the clones" />
        )}
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>{sectionData.title}</h1>
        <p className={styles.description}>{sectionData.content}</p>

        {/* Show the winner image if this is the winner section */}
        {sectionData.isWinnerSection && (
          <div className={styles.winnerContainer}>
            <h2>🎉 Congratulations! You found the winning path! 🎉</h2>
            <img src="/decoys/winner.gif" alt="Winner" className={styles.winnerImage} />
            <p>You’ve conquered the maze and claimed the Triwizard Cup!</p>
          </div>
        )}

        {/* Spell Input Section */}
        {!sectionData.isWinnerSection && (
          <div className={styles.spellInputContainer}>
            <form onSubmit={handleSpellSubmit}>
              <label htmlFor="spellInput">🧙‍♂️ Cast a Spell:</label>
              <input
                id="spellInput"
                type="text"
                value={spellInput}
                onChange={e => setSpellInput(e.target.value)}
                placeholder="e.g., Lumos"
                className={styles.spellInput}
              />
              <button type="submit" className={styles.spellButton}>
                Cast
              </button>
            </form>
            {spellMessage && (
              <p className={styles.spellMessage}>{spellMessage}</p>
            )}
          </div>
        )}

        {/* Navigation Links */}
        <div className={styles.grid}>
          {sectionData.options.map(option => (
            <Link href={`/clone1/${option}`} key={option} className={styles.card}>
              <h2>{option} &rarr;</h2>
            </Link>
          ))}
        </div>

        {/* Special Hints for Puzzle Sections */}
        {section === 'loop3' && (
          <div className={styles.secretHint}>
            🧙 Try adding <b>"secret-exit"</b> to the URL for a magical escape!
          </div>
        )}

        {section === 'mysteriousLever' && (
          <div className={styles.interactiveElement} 
               onClick={() => router.push('/clone1/secretChamber')}>
            <span className={styles.lever}>⬇️</span>
            <span className={styles.leverCaption}>Pull the lever (Careful!)</span>
          </div>
        )}

        {/* Hidden Link */}
        {(section === 'treasuryChamber' || section === 'library') && (
          <a href="/clone1/winner" style={{display:'none'}}>
            <span className={styles.invisibleText}>🔎 Secret passage</span>
          </a>
        )}

        {/* Late-Stage Puzzle Hints */}
        {(section === 'secretChamber' || section === 'ancientHall') && (
          <script dangerouslySetInnerHTML={{ __html: `
            console.log("You're very close! Try '/winner' or follow the glowing path.");
          `}} />
        )}
      </main>
    </div>
  );
}
