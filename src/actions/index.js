import Axios from "axios"

export const GETPICS = 'Get all pics'
export const GET_ERROR = 'Get error'
export const GET_DATA_REQUEST = 'Get Data Request'

export const getPics=()=>{
    return async dispatch => {
        dispatch({
            type: 'GET_DATA_REQUEST'
        })
        const url = "https://images-api.nasa.gov/search?q=lunar"
        await Axios.get(url).then((res)=>{
            dispatch({
                type: GETPICS,
                payload: res.data.collection.items
            });
        }).catch((e)=>{
        dispatch({
            type: GET_ERROR,
            payload: ''
        });
        });
    }

}