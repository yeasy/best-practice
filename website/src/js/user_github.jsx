import React from "react";
import $ from "jquery";

class UserGithub extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            githubtUrl: '',
            avatarUrl: '',
        };
    }

    componentDidMount() {
        $.get(this.props.source)
            .then(result => {
                console.log(result);
                const data = result;
                if (data) {
                    console.log(data.name);
                    this.setState({
                        username: data.name,
                        githubtUrl: data.html_url,
                        avatarUrl: data.avatar_url
                    });
                }
            });
    }

    render() {
        return (
            <div>
                <h3>{this.state.username}</h3>
                <img src={this.state.avatarUrl}/>
                <a href={this.state.githubtUrl}>Github Link</a>.
            </div>
        );
    }
}