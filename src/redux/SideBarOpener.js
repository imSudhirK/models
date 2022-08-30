// Action Type
export const HANDLE_SIDEBAR = 'HANDLE_SIDEBAR'

// Action Creater
export const handle_sidebar = () => {
    return {
        type: HANDLE_SIDEBAR
    }
}

// Initial State
const initialState = {
    isOpened: ''
}

// Sidebar Reducer
const sidebarReducer = (state = initialState, action) => {
    switch (action.type) {
        case HANDLE_SIDEBAR:
            return {
                ...state,
                isOpened: (state.isOpened ? '' : 'open')
            }
        default: return state
    }
}

export default sidebarReducer;