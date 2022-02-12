// Question 1
// Convert the function below to an arrow function:
// function getRemainder(a,b) {
// return a % b;
// }
// Question 2

const getRemainder = (a, b) => {
  return a % b;
};

const topGames = document.querySelector(".top-games");
const documentDody = document.querySelector("body");

const Rawg_API = `https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=07d8164699e544d697fb867d719fa22d`;
(async function getApi() {
  try {
    const response = await fetch(Rawg_API);
    const rawgData = await response.json();
    const gameResults = rawgData.results;
    topGames.innerHTML = ``;
    topGames.classList.remove("centered");
    topGames.classList.add("game-list");
    console.log(gameResults);
    for (let i = 0; i < gameResults.length; i++) {
      if (i === 8) {
        break;
      }
      console.log(gameResults[i].name);
      topGames.innerHTML += `
      <div class="game-container">
      <div class="game-name"> ${gameResults[i].name}</div>
      <div class="game-rating"><i class="fa-solid fa-star"></i>${gameResults[i].rating}</div>
      </div>
      `;
    }
  } catch {}
})();
