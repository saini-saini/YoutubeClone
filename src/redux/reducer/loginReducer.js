import { LOGIN_SUCCESS, LOGIN_REQUEST, LOGIN_FAIL, LOAD_PROFILE, LOGOUT } from "../actionType"
const initialState = {
    accessToken: sessionStorage.getItem('accessToken') ? sessionStorage.getItem('accessToken') : null,
    user: sessionStorage.getItem('profile') ? JSON.parse(sessionStorage.getItem('profile')) : null,
    loading: false
}

export const loginrReducer = (state = initialState, action) => {
    const { type, payload } = action
    switch (type) {
        case LOGIN_REQUEST:
            return {
                ...state,
                loading: true
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                accessToken: payload.accessToken,
                user: payload.user,
                loading: false
            }
        case LOGIN_FAIL:
            return {
                ...state,
                loading: false,
                accessToken: null,
                error: payload
            }
        case LOAD_PROFILE:
            return {
                ...state,
                user: payload,
                // loading: false,
                // error: null,
                // accessToken: null
            }
        case LOGOUT:
            return {
                ...state,
                accessToken: null,
                user: null
            }
        default:
            return state
    }
}