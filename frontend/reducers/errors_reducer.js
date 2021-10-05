import { combineReducers } from "redux";
import videoErrorsReducer from "../components/videos/video_errors_reducer";
import sessionErrorsReducer from "./session_errors_reducer";


const errorsReducer = combineReducers({
    session: sessionErrorsReducer,
    videos: videoErrorsReducer
}); 

export default errorsReducer;