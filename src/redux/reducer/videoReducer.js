import { HOME_VIDEOS_SUCCESS, HOME_VIDEOS_FAIL, HOME_VIDEOS_REQUEST } from "../actionType"

export const homeVideosReducer = (
    state = {
        videos: [],
        loading: true,
        nextPageToken: null,
    },
    action
) => {
    const { type, payload } = action

    switch (type) {
        case HOME_VIDEOS_SUCCESS:
            return {
                ...state,
                loading: true,
                videos:payload.videos,
                nextPageToken: payload.nextPageToken
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