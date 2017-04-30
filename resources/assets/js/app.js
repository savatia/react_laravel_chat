import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, browserHistory } from "react-router";
import Welcome from "./layouts/Welcome";
import Chat from "./layouts/Chat";
import Messages from "./components/Messages";
import { Provider } from 'react-redux'; 
import configureStore from "./store/configureStore";
import {postMessage, pollMessages, loadMessages} from "./actions/messageActions";


global.jQuery = require('jquery');
require('bootstrap');

const store = configureStore();
const $root = document.getElementById("root");

store.dispatch(loadMessages());
// var startPoll = function() {
//     setTimeout(() => store.dispatch(pollMessages), 1500);
// }
// startPoll();
var poll = function () {
    store.dispatch(pollMessages());
};
setInterval(poll, 1000);

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={Welcome}></Route>
            <Route path="/chat" component={Chat}></Route>
            <Route path="/messages" component={Messages}></Route>
        </Router>
    </Provider>
    , $root);
