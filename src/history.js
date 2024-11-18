// Beispiel: Verlauf aus dem localStorage laden
const history = JSON.parse(localStorage.getItem('drinkHistory')) || [];

function renderHistory() {
  const historyList = document.getElementById('history-list');
  historyList.innerHTML = '';

  // Sortiere den Verlauf nach Datum (neueste zuerst)
  history.sort((a, b) => new Date(b.date) - new Date(a.date));

  // Zeige alle Einträge im Verlauf an
  history.forEach(entry => {
    const historyItem = document.createElement('li');
    historyItem.className = 'text-gray-100';
    historyItem.innerText = `${entry.date}: ${entry.text}`;
    historyList.appendChild(historyItem);
  });
}

// Initiale Darstellung des Verlaufs
renderHistory();
