require("dotenv").config();

const base_url = `https://api.rawg.io/api/`;

const getDate = () => {
  return new Date().toISOString().slice(0, 10);
};

const lastYear = new Date().getFullYear() - 1;
const currentYear = new Date().getFullYear();
const nextYear = new Date().getFullYear() + 1;
const currentDate = getDate();
console.log(lastYear);
console.log(currentYear);
console.log(nextYear);
console.log(currentDate);

const popular_games = `games?key=${process.env.REACT_APP_RAWG_API}&dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;

export const popularGamesUrl = () => `${base_url}${popular_games}`;
