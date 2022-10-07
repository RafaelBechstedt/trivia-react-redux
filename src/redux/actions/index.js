// import md5 from 'crypto-js/md5';

export const GET_USER = 'GET_USER';
export const REQUEST_API = 'REQUEST_API';
export const requestApi = () => ({ type: REQUEST_API })
export const SET_TOKEN = 'SET_TOKEN';
export const setToken = (token) => ({type: SET_TOKEN, token})
export const fetchApi = () => async (dispatch) => {
    try {
        dispatch(requestApi())
        const response = await fetch('https://opentdb.com/api_token.php?command=request')
        const data = await response.json().token
        dispatch(setToken(data))
    } catch (error) {
        console.log(error)
    }
}