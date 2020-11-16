import galleryReducer from './Gallery'
import { combineReducers} from 'redux'

const allReducers=combineReducers({
    gallery:galleryReducer
})

export default allReducers