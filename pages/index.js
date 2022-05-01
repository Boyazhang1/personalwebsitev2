import SpotifyTrack from '../components/spotifyTrack';
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
  const res = await fetch(
    '	https://api.spotify.com/v1/me/player/recently-played',
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${process.env.SPOTIFY_ACCESS_TOKEN}`,
      },
    }
  );

  const spotifyData = await res.json();

  const recentlyPlayedSong = {
    artists: spotifyData.items[0].track.artists.map((artist) => artist.name),
    spotifyRedirectUrl: spotifyData.items[0].track.external_urls.spotify,
    trackName: spotifyData.items[0].track.name,
    // returns array of 3 images, last image has dimensions 64x64
    albumImgUrl: spotifyData.items[0].track.album.images[2].url,
  };

  return {
    props: {
      recentlyPlayedSong,
    },
    revalidate: 120,
  };
}
