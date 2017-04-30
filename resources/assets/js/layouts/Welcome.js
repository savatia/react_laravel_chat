import React from "react";
import {Link} from "react-router";

class Welcome extends React.Component{
    render(){
        return(
                <section className="container">
                    <h1>Welcome</h1>
                    <Link className="btn btn-info" to="/chat">Enter to Chat!</Link>
                </section>
        );
    }
}

export default Welcome;