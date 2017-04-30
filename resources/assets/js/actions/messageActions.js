import MessageApi from "../api/messageApi";
import * as types from "./actionTypes";

export function loadMessages() {
    return function(dispatch){
        return MessageApi.getAllMessages().then(function(messages){
            dispatch(loadMessagesSuccess(messages));
        }).catch(function(error){
            throw(error);
        });
    };
}

export function pollMessages() {
    return function(dispatch){
        return MessageApi.pollMessages().then(function(messages){
            dispatch(pollMessagesSuccess(messages));
        }).catch(function(error){
            throw(error);
        });
    };
}

export function postMessage(message){
    return function(dispatch){
        return MessageApi.postMessage(message).then(function(response){
            dispatch(postMessageSuccess(response));
        }).catch(function(error){
            throw(error);
        });
    };
}
export function loadMessagesSuccess(messages){
    return {type: types.LOAD_MESSAGES_SUCCESS, messages};
}
export function postMessageSuccess(messages){
    return {type: types.POST_MESSAGE_SUCCESS, messages};
}
export function pollMessagesSuccess(messages){
    return {type: types.POLL_MESSAGES_SUCCESS, messages};
}