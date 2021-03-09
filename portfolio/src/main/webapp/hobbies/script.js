// TODO: Change to work with links

function addRandomSong() {
  
    const songs =
      ['<iframe src="https://open.spotify.com/embed/track/3YJJjQPAbDT7mGpX3WtQ9A" width="300" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>', 
      '<iframe src="https://open.spotify.com/embed/track/4DLkSDc0HJ4i4jxjKq3Kuk" width="300" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>',
      '<iframe src="https://open.spotify.com/embed/track/4nCArjFjYyIioI6NGOSonr" width="300" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>',
      '<iframe src="https://open.spotify.com/embed/track/61gjdUMePfAOD5p0gnGvfv" width="300" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>',
      '<iframe src="https://open.spotify.com/embed/track/2QdSb68BzZGMgCbsrFmSLc" width="300" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>'];

  // Pick a random greeting.
  const song = songs[Math.floor(Math.random() * songs.length)];

  // Add it to the page.
  const SongContainer = document.getElementById('song-container');
  SongContainer.innerHTML = song;
  
}