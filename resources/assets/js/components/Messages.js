import React, {Proptypes} from 'react';
import {connect} from 'react-redux';
import MessageList from './MessageList';
import * as messageActions from '../actions/messageActions';

class Messages extends React.Component{
    render(){
        return(
            <div className="col-md1-2">
                <h1>Messages</h1>
                <div className="col-md-12">
                    <MessageList messages={this.props.messages}/>
                </div>
            </div>
        );
    }
}

Messages.propTypes = {
    messages: React.PropTypes.array
}

function mapStateToProps(state, ownProps){
    return {
        messages: state.messages
    };
}

export default connect(mapStateToProps)(Messages);