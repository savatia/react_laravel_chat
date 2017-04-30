import React from "react";
import {Link} from "react-router";
import {connect} from 'react-redux';
import Messages from "../components/Messages";
import MessageList from "../components/MessageList";
import {bindActionCreators} from 'redux';  
import * as messageActions from '../actions/messageActions';  

class Chat extends React.Component{
    constructor(props) {
        super(props);
        this.state = {message: ''};
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleMessageChange = this.handleMessageChange.bind(this);
    }

    handleSubmit(event) {
        this.props.postMessage(this.state.message);
        this.setState({message: ""});
        event.preventDefault();
    }

    handleMessageChange(event){
        this.setState({message: event.target.value});
    }

    render(){
        return(
            <div className="panel panel-primary">
                <div className="panel-heading">
                        <span className="glyphicon glyphicon-comment"></span> Chat
                        <div className="btn-group pull-right">
                            <button type="button" className="btn btn-default btn-xs dropdown-toggle" data-toggle="dropdown">
                                <span className="glyphicon glyphicon-chevron-down"></span>
                            </button>
                            <ul className="dropdown-menu slidedown">
                                <li><a href="http://www.jquery2dotnet.com"><span className="glyphicon glyphicon-refresh">
                                </span>Refresh</a></li>
                                <li><a href="http://www.jquery2dotnet.com"><span className="glyphicon glyphicon-ok-sign">
                                </span>Available</a></li>
                                <li><a href="http://www.jquery2dotnet.com"><span className="glyphicon glyphicon-remove">
                                </span>Busy</a></li>
                                <li><a href="http://www.jquery2dotnet.com"><span className="glyphicon glyphicon-time"></span>
                                    Away</a></li>
                                <li className="divider"></li>
                                <li><a href="http://www.jquery2dotnet.com"><span className="glyphicon glyphicon-off"></span>
                                    Sign Out</a></li>
                            </ul>
                        </div>
                </div>
                <MessageList messages={this.props.messages}/>
                <div className="panel-footer">
                        <div className="input-group">
                            <input id="btn-input" type="text" className="form-control input-sm" onChange={this.handleMessageChange} value={this.state.message} placeholder="Type your message here..." />
                            <span className="input-group-btn">
                                <button onClick={this.handleSubmit} className="btn btn-warning btn-sm" id="btn-chat">
                                    Send</button>
                            </span>
                        </div>
                </div>
            </div>
        )
    }
}

Chat.propTypes = {
    messages: React.PropTypes.array
}

function mapStateToProps(state, ownProps){
    return {
        messages: state.messages
    };
}


function mapDispatchToProps(dispatch) {  
  return ({
      postMessage: (message)=> dispatch(messageActions.postMessage(message))
  });
}
export default connect(mapStateToProps, mapDispatchToProps)(Chat); 