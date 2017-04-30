import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function messageReducer(state = initialState.messages,
action){
    switch (action.type) {
        case types.LOAD_MESSAGES_SUCCESS:
            return action.messages;
        case types.POLL_MESSAGES_SUCCESS:
            var new_state; 
            action.messages.forEach(function (value) {
                new_state = [...state, value];
            });
            if(new_state) {
                return new_state;
            }else{ return state; }

        case types.POST_MESSAGE_SUCCESS:
           var new_state; 
            action.messages.forEach(function (value) {
                new_state = [...state, value];
            });
            if(new_state) {
                return new_state;
            }else{ return state; }
        default:
            return state;
    }
}