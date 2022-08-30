import { combineReducers } from "redux";

import sidebarReducer from "./SideBarOpener";

const RootReducer = combineReducers({
    rh_sidebar: sidebarReducer
})

export default RootReducer;