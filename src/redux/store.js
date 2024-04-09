import { applyMiddleware, createStore, combineReducers } from 'redux'
import { composeWithDevTools } from "redux-devtools-extension"
import {thunk} from 'redux-thunk'
import { loginrReducer } from './reducer/loginReducer'
import { homeVideosReducer } from './reducer/videoReducer'
import { selectedVideoReducer } from './reducer/videoReducer'
import { channelDetailsReducer } from './reducer/channelReducer'

const rootReducer = combineReducers({
    login: loginrReducer,
    homeVideos : homeVideosReducer,
    selectedVideo : selectedVideoReducer,
    channelDetails : channelDetailsReducer
})

const store = createStore(
    rootReducer,
    {},
    composeWithDevTools(applyMiddleware(thunk))
)

export default store;