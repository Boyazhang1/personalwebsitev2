import RedirectIconsNav from '../components/RedirectIconsNav/RedirectIconsNav';
import SpotifyTrack from '../components/SongTrack/SongTrack';
import styles from './index.module.scss';

export default function Home({ recentlyPlayedSong }) {
  return (
    <div className={styles.outerContainer}>
      <div className={styles.homepageContainer}>
        <h1>Boya Zhang</h1>
        <p>Hello, nice to meet you and thanks for stopping by! </p>
        <p>
          I'm a first year student at the University of Waterloo studying{' '}
          <a
            rel="noreferrer"
            target="blank"
            href="https://uwaterloo.ca/systems-design-engineering/about-systems-design-engineering/what-systems-design-engineering"
          >
            Systems Design Engineering
          </a>
          . In my free time, I like to explore different hiking trails, read
          non-fiction, and sell limited sneakers. Check out some of my work
          here. Always happy to chat!
        </p>
        <p></p>
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
