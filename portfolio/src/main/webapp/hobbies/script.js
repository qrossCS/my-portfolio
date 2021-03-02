// TODO: Change to work with links

function addRandomSong() {
  
    const songs =
      ['Good Days - SZA (R&B)', 'Pavane - Gabriel Faure (Classical)', 
      'On Me - Lil Baby (Rap/Hip-Hop)', 'Eden - Brent Fiyaz (R&B)',
      'Smerf Made This - G.T. (Rap/Hip-Hop)', 'Higher - Tems (R&B)'];

  // Pick a random greeting.
  const song = songs[Math.floor(Math.random() * songs.length)];

  // Add it to the page.
  const greetingContainer = document.getElementById('greeting-container');
  greetingContainer.innerText = song;
  
}