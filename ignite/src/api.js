require("dotenv").config();

const base_url = `https://api.rawg.io/api/`;

const getDate = () => {
  return new Date().toISOString().slice(0, 10);
};

// Get previous year
const lastYear = new Date().getFullYear() - 1;
console.log(lastYear);

// Get next Year
const nextYear = new Date().getFullYear() + 1;
console.log(nextYear);

// Get Current Year
const currentYear = new Date().getFullYear();
console.log(currentYear);

// Get Todays current date
const currentDate = getDate();
console.log(currentDate);

// Get all popular games from last year up to now and order them by the highest rating
const popular_games = `games?key=${process.env.REACT_APP_RAWG_API}&dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;

// Creates the URL which will be used to find all popular game from last year up to today
export const popularGameUrl = () => `${base_url}${popular_games}`;
