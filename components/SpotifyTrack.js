const SpotifyTrack = ({ recentlyPlayedSong }) => {
  return (
    <a href={recentlyPlayedSong.spotifyRedirectUrl}>
      <div>
        <img src={recentlyPlayedSong.albumImgUrl} />
        <div>
          <h1>
            {' '}
            <a
              href={recentlyPlayedSong.spotifyRedirectUrl}
              target="_blank"
              rel="noreferrer"
            >
              {recentlyPlayedSong.trackName}{' '}
            </a>
          </h1>

          <p>{recentlyPlayedSong.artists.join(', ')}</p>
        </div>
      </div>
    </a>
  );
};

export default SpotifyTrack;
