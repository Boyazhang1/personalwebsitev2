import Link from 'next/link';

import RedirectIconsNav from '../components/RedirectIconsNav/RedirectIconsNav';
import SpotifyTrack from '../components/SongTrack/SongTrack';
import styles from './index.module.scss';

export default function Home({ recentlyPlayedSong }) {
  return (
    <div className={styles.outerContainer}>
      <div className={styles.pageContainer}>
        <h1>Boya Zhang</h1>
        <p>Hi, nice to meet you and thanks for stopping by! </p>
        <p>
          I&apos;m a first year student at the University of Waterloo studying{' '}
          <Link
            href="https://uwaterloo.ca/systems-design-engineering/about-systems-design-engineering/what-systems-design-engineering"
            passHref
          >
            <a rel="noreferrer" target="_blank" style={{ color: '#AB46D2' }}>
              Systems Design Engineering
            </a>
          </Link>
          . In my free time, I like to explore different hiking trails, read
          non-fiction, and sell limited sneakers. Check out some of my work{' '}
          <Link href="/projects" style={{ color: '#55D8C1' }}>
            here
          </Link>
          . Always happy to chat!
        </p>
        <SpotifyTrack recentlyPlayedSong={recentlyPlayedSong} />
        <RedirectIconsNav />
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const lastFMUrl = `http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${process.env.LAST_FM_USERNAME}&api_key=${process.env.LAST_FM_API_KEY}&format=json&limit=10`;

  const res = await fetch(lastFMUrl);

  const lastFMData = await res.json();

  const recentlyPlayedSong = {
    artistName: lastFMData.recenttracks.track[0].artist['#text'],
    trackName: lastFMData.recenttracks.track[0].name,
    albumImgUrl: lastFMData.recenttracks.track[0].image[3]['#text'],
  };

  return {
    props: {
      recentlyPlayedSong,
    },
    revalidate: 120,
  };
}
