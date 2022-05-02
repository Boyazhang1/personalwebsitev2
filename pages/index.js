import SpotifyTrack from '../components/SongTrack/SongTrack';
import styles from './index.module.scss';

export default function Home({ recentlyPlayedSong }) {
  return (
    <div>
      <h1>Hi</h1>
      <p>Yo</p>
      <SpotifyTrack recentlyPlayedSong={recentlyPlayedSong} />
    </div>
  );
}

export async function getStaticProps() {
  const lastFMUrl = `http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${process.env.LAST_FM_USERNAME}&api_key=${process.env.LAST_FM_API_KEY}&format=json&limit=10`;

  const res = await fetch(lastFMUrl);

  const lastFMData = await res.json();

  console.log(lastFMData.recenttracks.track[0].artist['#text']);

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
