const players = JSON.parse(localStorage.getItem('playersData')) || [
  { name: "Johann", drinks: 0 },
  { name: "Julien", drinks: 0 },
  { name: "Thies", drinks: 0 },
  { name: "Tobi", drinks: 0 },
  { name: "Jonas", drinks: 0 },
  { name: "Maurice", drinks: 0 },
  { name: "Lars", drinks: 0 },
  { name: "Marcel", drinks: 0 },
  { name: "Simon", drinks: 0 },
  { name: "Bennet", drinks: 0 },
  { name: "Lion", drinks: 0 },
  { name: "Erik", drinks: 0 },
  { name: "Leon", drinks: 0 },
  { name: "Lukas", drinks: 0 },
  { name: "Martin G.", drinks: 0 },
  { name: "Paul", drinks: 0 },
  { name: "Colja", drinks: 0 },
  { name: "Chris", drinks: 0 },
  { name: "Martin T.", drinks: 0 },

];



const history = JSON.parse(localStorage.getItem('drinkHistory')) || []; // Lade den Verlauf aus dem localStorage

function renderPlayers() {
  const playersList = document.getElementById('players-list');
  playersList.innerHTML = '';

  players.forEach((player, index) => {
    const playerDiv = document.createElement('div');
    playerDiv.className = 'flex items-center justify-between bg-slate-800 p-3 rounded-lg shadow-md';

    const playerName = document.createElement('span');
    playerName.className = 'font-medium text-gray-100';
    playerName.innerText = player.name;

    // Container für die Zähler und Buttons in einer Reihe
    const controlsContainer = document.createElement('div');
    controlsContainer.className = 'flex items-center space-x-2';

    const drinkCount = document.createElement('span');
    drinkCount.className = 'text-xl font-bold text-gray-100 pr-3';
    drinkCount.innerText = player.drinks;

    const minusButton = document.createElement('button');
    minusButton.className = 'bg-red-600 text-white px-3 py-1 rounded-md hover:bg-red-500';
    minusButton.innerText = '-';
    minusButton.onclick = () => {
      player.drinks--; // Anzahl kann jetzt in den Minusbereich gehen
      addToHistory(player.name, -1);
      savePlayersData();
      renderPlayers();
    };

    const plusButton = document.createElement('button');
    plusButton.className = 'bg-green-500 text-white px-3 py-1 rounded-md hover:bg-teal-400';
    plusButton.innerText = '+';
    plusButton.onclick = () => {
      player.drinks++;
      addToHistory(player.name, 1);
      savePlayersData();
      renderPlayers();
    };

    // Füge den Zähler und die Buttons in einer Reihe zum Container hinzu
    controlsContainer.appendChild(drinkCount);
    controlsContainer.appendChild(minusButton);
    controlsContainer.appendChild(plusButton);

    // Füge den Namen und den Container mit den Bedienelementen zur Spielerzeile hinzu
    playerDiv.appendChild(playerName);
    playerDiv.appendChild(controlsContainer);

    playersList.appendChild(playerDiv);
  });
}

function addToHistory(playerName, change) {
  const action = change > 0 ? `+${change}` : `${change}`;
  const date = new Date().toLocaleString();
  history.unshift({ text: `${playerName}: ${action} Getränk`, date: date });

  // Speichere den Verlauf im localStorage
  localStorage.setItem('drinkHistory', JSON.stringify(history));
}

function savePlayersData() {
  // Speichere die Spieler-Daten im localStorage
  localStorage.setItem('playersData', JSON.stringify(players));
}
// Initiale Darstellung der Spieler
renderPlayers();

self.addEventListener('install', (event) => {
  event.waitUntil(
      caches.open('pwa-cache').then((cache) => {
          return cache.addAll([
              'src/assets/fonts/poppins/Poppins-Medium.ttf',
              
              // Weitere Dateien hinzufügen
          ]);
      })
  );
});
