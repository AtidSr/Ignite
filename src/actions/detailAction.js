import axios from 'axios'
import {gameDetailURL, gameScreenShotURL} from '../api'

export const loadDetail = (id) => async (dispatch) => {
    const detailData = await axios.get(gameDetailURL(id))
    const gameScreenShotData = await axios.get(gameScreenShotURL(id))

    dispatch({
        type: 'GET_DETAIL',
        payload: {
            game: detailData.data,
            screen: gameScreenShotData.data
        }
    })
}
