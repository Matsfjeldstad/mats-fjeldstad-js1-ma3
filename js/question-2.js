const topGames = document.querySelector('.top-games');

const Rawg_API = `https://api.rawg.io/api/games?dates=2021-01-01,2021-12-31&ordering=-rating&key=07d8164699e544d697fb867d719fa22d`;
(async function getApi() {
  try {
    const response = await fetch(Rawg_API);
    const rawgData = await response.json();
    const gameResults = rawgData.results;
    topGames.innerHTML = ``;
    topGames.classList.remove('centered');
    topGames.classList.add('game-list');
    for (let i = 0; i < gameResults.length; i++) {
      if (i === 8) {
        break;
      }
      console.log(gameResults[i].name);
      topGames.innerHTML += `
      <div class="game-container"  style="background-image: url('${gameResults[i].background_image}');">
      <div class="game-name"> ${gameResults[i].name}</div>
      <div class="game-rating"><i class="fa-solid fa-star"></i>${gameResults[i].rating}</div>
      <div class ="game-tags-number">Tags (${gameResults[i].tags.length})</div>
      </div>
      `;
    }
  } catch (error) {
    topGames.innerHTML = `<div class="error">Oh no something wrong happend! ${error}</div>}`;
  }
})();
