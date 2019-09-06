import React, { Component } from 'react';
import Options from "./Options/Options";
import Cover from "./Cover/Cover";

class Home extends Component {

    render() {
        if (this.props.auth.isAuthenticated()) {
            return <Options />
        } else {
            return (
                <Cover login={this.props.auth.login} />
            );
        }
    }
}

export default Home;