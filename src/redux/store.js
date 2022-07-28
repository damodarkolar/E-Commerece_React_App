import { AuthReducer } from "./Auth/authReducer";
import { legacy_createStore as createStore ,combineReducers} from "redux";

const rootReducer =combineReducers({
    Auth:AuthReducer
})

export const store= createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__  && window.__REDUX_DEVTOOLS_EXTENSION__())