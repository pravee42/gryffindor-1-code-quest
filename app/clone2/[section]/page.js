'use client'
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import styles from '../../Clone2.module.css'; // Slightly different CSS module
import { sections } from '../../../data/sections';
import { useParams, useRouter } from 'next/navigation';

export default function Section() {
    const params = useParams()
    const section = params?.section ? (params.section) : null;
  const [sectionData, setSectionData] = useState(null);
  
  // Random fun images to display in various sections
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
  
  useEffect(() => {
    if (section) {
      // Find the current section data
      const data = sections.find(s => s.id === section) || sections[0];
      setSectionData(data);
    }
  }, [section]);
  
  if (!sectionData) {
    return <div className={styles.loading}>Loading...</div>;
  }
  
  return (
    <div className={styles.container}>
      <Head>
        <title>{sectionData.title} | Maze Challenge</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>{sectionData.title}</h1>
        <p className={styles.description}>{sectionData.content}</p>
        
        {/* Show a funny image instead of the winner image */}
        {sectionData.isWinnerSection && (
          <div className={styles.funContainer}>
            <h2>You found something, but not the real prize!</h2>
            <img 
              src="/decoys/not-winner.webp" 
              alt="Not the winner" 
              className={styles.funImage} 
            />
            <p>Try the other clone! 😉</p>
          </div>
        )}
        
        {/* Show a random fun image in some sections */}
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
            <Link href={`/clone2/${option}`} key={option} className={styles.card}>
              <h2>{option} &rarr;</h2>
            </Link>
          ))}
        </div>
        
        {/* Add emojis in some places */}
        {section === 'loop3' && (
          <div className={styles.emojiContainer}>
            <span className={styles.emoji}>🔄</span>
            <span className={styles.emoji}>😵‍💫</span>
            <span className={styles.emoji}>🌀</span>
          </div>
        )}
        
        {section === 'mysteriousLever' && (
          <div className={styles.interactiveElement} 
               onClick={() => router.push('/clone2/trapRoom')}>
            <span className={styles.lever}>⬇️</span>
            <span className={styles.leverCaption}>Pull the lever</span>
          </div>
        )}
      </main>
    </div>
  );
}