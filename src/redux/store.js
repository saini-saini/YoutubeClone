import { applyMiddleware, createStore, combineReducers } from 'redux'
import { composeWithDevTools } from "redux-devtools-extension"
import {thunk} from 'redux-thunk'
import { loginrReducer } from './reducer/loginReducer'



const rootReducer = combineReducers({
    login: loginrReducer
})

const store = createStore(
    rootReducer,
    {},
    composeWithDevTools(applyMiddleware(thunk))
)

export default store;