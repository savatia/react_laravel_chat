import React, {PropTypes} from 'react';


class Message extends React.Component{
    constructor(props) {
        super(props);
        // this.state = {message: ''};
        // this.handleSubmit = this.handleSubmit.bind(this);
        // this.handleMessageChange = this.handleMessageChange.bind(this);
    }
    render(){
        return (
            <div>
                <span class="chat-img pull-right">
                    <img src="http://placehold.it/50/FA6F57/fff&text=ME" alt="User Avatar" className="img-circle" />
                </span>
                <div className="chat-body clearfix">
                    <div className="header">
                        <small className=" text-muted"><span class="glyphicon glyphicon-time"></span>{this.props.message.created_at}</small>
                        <strong className="pull-right primary-font">{this.props.message.user.name}</strong>
                    </div>
                    <p>{this.props.message.text}</p>
                </div>
            </div>
        );
    }
}

Message.propTypes = {  
  message: PropTypes.object
};

export default Message;  