// TODO: Change to work with links

function addRandomSong() {
  
    const songs =
      ["https://open.spotify.com/embed/track/3YJJjQPAbDT7mGpX3WtQ9A", 
      "https://open.spotify.com/embed/track/4DLkSDc0HJ4i4jxjKq3Kuk",
      "https://open.spotify.com/embed/track/4nCArjFjYyIioI6NGOSonr",
      "https://open.spotify.com/embed/track/61gjdUMePfAOD5p0gnGvfv",
      "https://open.spotify.com/embed/track/2QdSb68BzZGMgCbsrFmSLc"];

  // Pick a random greeting.
  const song = songs[Math.floor(Math.random() * songs.length)];

  // Add it to the page.
  const SongContainer = document.getElementById('song-container');
  SongContainer.src = song;
  
}