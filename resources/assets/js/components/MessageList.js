import React, {PropTypes} from 'react';
import Message from "./Message";

var $;
$ = require('jquery');

class MessageList extends React.Component{
    constructor(props) {
        super(props);
        this.state = {scroll_to_bottom: true};
        // this.handleSubmit = this.handleSubmit.bind(this);
        // this.handleMessageChange = this.handleMessageChange.bind(this);
    }

    componentDidUpdate(prevProps, prevState){
      if (prevProps.messages !== this.props.messages) {
          var scrollTop = $('#color-list').scrollTop();
          console.log("scroll-top:" + scrollTop);
          console.log("innerHeight:" + $('#color-list').innerHeight());
          console.log("scrollHeight:" + $('#color-list')[0].scrollHeight);
          if (scrollTop + $('#color-list').innerHeight() + 120 >= $('#color-list')[0].scrollHeight) {
            document.getElementById('chat-end').scrollIntoView();
          }
      }
    }

    render(){
      return (
        <div id="color-list" className="panel-body">
          <ul id="chat-component"  className="chat">
                {this.props.messages.map(message => 
                  <li className="right clearfix" key={message.id}>
                      <Message message={message}/>
                  </li>
                )}
                <li id="chat-end"/>
          </ul>
        </div>
      );
    }
}

MessageList.propTypes = {  
  messages: PropTypes.array.isRequired
};

export default MessageList;  