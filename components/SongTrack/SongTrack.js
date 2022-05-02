import styles from './SongTrack.module.scss';

const SpotifyTrack = ({ recentlyPlayedSong }) => {
  console.log(recentlyPlayedSong.time);
  return (
    <>
      {Object.keys(recentlyPlayedSong).length > 0 && (
        <section className={styles.recentlyPlayedSongContainer}>
          <p>My most recently played song: </p>
          <div className={styles.songTrackContainer}>
            <img src={recentlyPlayedSong.albumImgUrl} />
            <div>
              <h3> {recentlyPlayedSong.trackName} </h3>

              <p>{recentlyPlayedSong.artistName}</p>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default SpotifyTrack;
