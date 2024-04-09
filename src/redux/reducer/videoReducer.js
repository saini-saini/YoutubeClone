import { HOME_VIDEOS_SUCCESS, HOME_VIDEOS_FAIL, HOME_VIDEOS_REQUEST, SELECTED_VIDEO_REQUEST, SELECTED_VIDEO_SUCCESS, SELECTED_VIDEO_FAIL } from "../actionType"

export const homeVideosReducer = (
    state = {
        videos: [],
        loading: false,
        nextPageToken: null,
        activeCategory: 'All'
    },
    action
) => {
    const { type, payload } = action

    switch (type) {
        case HOME_VIDEOS_SUCCESS:
            return {
                ...state,
                loading: false,
                videos:
                    state.activeCategory === payload.category
                        ? [...state.videos, ...payload.videos]
                        : payload.videos,
                nextPageToken: payload.nextPageToken,
                activeCategory: payload.activeCategory
            }
        case HOME_VIDEOS_FAIL:
            return {
                ...state,
                loading: false,
                error: payload
            }
        case HOME_VIDEOS_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            }
        default:
            return state

    }
}


export const selectedVideoReducer = (
    state = {
        loading: true,
        video: null,
    },
    action
) => {
    const { payload, type } = action

    switch (type) {
        case SELECTED_VIDEO_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case SELECTED_VIDEO_SUCCESS:
            return {
                ...state,
                video: payload,
                loading: false,
            }
        case SELECTED_VIDEO_FAIL:
            return {
                ...state,
                video: null,
                loading: false,
                error: payload,
            }

        default:
            return state
    }
}
