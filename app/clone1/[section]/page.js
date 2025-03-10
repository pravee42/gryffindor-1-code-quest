'use client'
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import styles from '../../Clone1.module.css';
import { sections } from '../../../data/sections';
import { useParams, useRouter } from 'next/navigation';

export default function Section() {
  const params = useParams()
  const section = params?.section ? (params.section) : null;
//   const { section } = router.query;
  const [sectionData, setSectionData] = useState(null);

  
  useEffect(() => {
    if (section) {
      // Find the current section data
      const data = sections.find(s => s.id === section) || sections[0];
      setSectionData(data);
      
      // Easter egg: Console hint for specific sections
      if (section === 'loop3' || section === 'mysteriousLever') {
        console.log("Hint: Try adding 'secret-exit' to the URL to escape");
      }
    }
  }, [section]);
  
  if (!sectionData) {
    return <div className={styles.loading}>Loading...</div>;
  }

  const funImages = [
    "/decoys/funny.gif",
    "/decoys/emoji1.gif",
    "/decoys/cat.gif",
    "/decoys/dog.gif",
    "/decoys/surprised.gif",
  ];
  
  // Get a consistent but random image based on section
  const getRandomImage = (sectionId) => {
    const index = sectionId.charCodeAt(0) % funImages.length;
    return funImages[index];
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
            <h2>Congratulations! You found the winning path!</h2>
            <img src="/decoys/winner.gif" alt="Winner" className={styles.winnerImage} />
            <p>You've conquered the maze and found the true path!</p>
          </div>
        )}

        {!sectionData.isWinnerSection && Math.random() > 0.7 && (
          <div className={styles.funImageContainer}>
            <img 
              src={getRandomImage(section)} 
              alt="Fun decoration" 
              className={styles.smallFunImage} 
            />
          </div>
        )}
        
        <div className={styles.grid}>
          {sectionData.options.map(option => (
            <Link href={`/clone1/${option}`} key={option} className={styles.card}>
              <h2>{option} &rarr;</h2>
            </Link>
          ))}
        </div>
        
        {/* Hidden elements for specific sections */}
        {section === 'loop3' && (
          <div className={styles.secretHint}>
            Try adding "secret-exit" to the URL
          </div>
        )}
        
        {section === 'mysteriousLever' && (
          <div className={styles.interactiveElement} 
               onClick={() => router.push('/clone1/secretChamber')}>
            <span className={styles.lever}>⬇️</span>
            <span className={styles.leverCaption}>Pull the lever</span>
          </div>
        )}
        
        {/* Hidden link in certain sections */}
        {(section === 'treasuryChamber' || section === 'library') && (
          <a href="/clone1/winner" className={styles.hiddenLink}>
            <span className={styles.invisibleText}>Secret passage</span>
          </a>
        )}
      </main>
      
      {/* Conditional script for certain sections */}
      {(section === 'secretChamber' || section === 'ancientHall') && (
        <script dangerouslySetInnerHTML={{ __html: `
          // One key away from winner
          console.log("You're very close! Check nearby sections or try '/winner'");
        `}} />
      )}
    </div>
  );
}