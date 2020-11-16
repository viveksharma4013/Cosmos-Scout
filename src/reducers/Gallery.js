import { GETPICS, GET_ERROR, GET_DATA_REQUEST } from '../actions/index'
let initialState={
    data:[],
    loading:true,
    error:false

}
const galleryReducer=(state=initialState,action)=>{
    if(action.payload){
        state={
            data:action.payload,
            loading:false,
            error:false
        }
    }
    switch(action.type){
        case GETPICS:
            return {
                ...state,
                data: action.payload,
                loading: false,
                error: false
            };
        case GET_DATA_REQUEST:
            return{
                ...state,
                data:[],
                loading: true,
                error: false
            }
        case GET_ERROR:
            return {
                ...state,
                data:[],
                loading:false,
                error:true
            }
        default:
            return state;
    }
}

export default galleryReducer;