//Base URL
const base_url = 'https://api.rawg.io/api/'
// eslint-disable-next-line no-undef
const key = process.env.REACT_APP_API_KEY;

//Getting the date
const getCurrentMonth = () => {
     const month = new Date().getMonth() + 1
     if(month < 10) {
         return `0${month}`
     } else {
         return month
     }
}

const getCurrentDay = () => {
    const day = new Date().getDate() + 1
    if(day < 10) {
        return `0${day}`
    } else {
        return day
    }
}
const currentYear = new Date().getFullYear()
const currentMonth = getCurrentMonth()
const currentDay = getCurrentDay()
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`
const apiKey = `key=${key}`
//popular Games
const popular_games = `games?${apiKey}&dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`
const upcoming_games = `games?${apiKey}&dates=${currentDate},${nextYear}&ordering=-added&page_size=10`
const newGames = `games?${apiKey}&dates=${lastYear},${currentDate}&ordering=-released&page_size=10`

export const popularGamesURL = () => `${base_url}${popular_games}`
export const upcomingGamesURL = () => `${base_url}${upcoming_games}`
export const newGamesURL = () => `${base_url}${newGames}`
//Game details
export const gameDetailURL = (game_id) => `${base_url}games/${game_id}?${apiKey}`
//Game screenshots
export const gameScreenShotURL = (game_id) => `${base_url}games/${game_id}/screenshots?${apiKey}`
//Search Game
export const searchGameURL = (game_name) => `${base_url}games?${apiKey}&search=${game_name}&page_size=9`