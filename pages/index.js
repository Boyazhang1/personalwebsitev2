import styles from './index.module.scss';

export default function Home() {
  return (
    <div>
      <h1 class>Hi</h1>
      <p>Yo</p>
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


  const artists = spotifyData.items[0].track
  console.log(spotifyData.items[0].track);
  return {
    props: {},
    revalidate: 120,
  };
}
