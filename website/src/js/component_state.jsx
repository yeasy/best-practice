import React from "react";

class ComponentState extends React.Component {
    constructor(props) {
        super(props);
        console.log('constructor');
        this.state = {
            name: 'Mark',
        };
    }
    handleClick(e) {
        if (this.state.name === 'Mark') {
            this.setState({'name': 'Zuck'});
        } else {
            this.setState({'name': 'Mark'});
        }
    }
    componentWillMount() {
        console.log('componentWillMount');
    }
    componentDidMount() {
        console.log('componentDidMount');
    }
    componentWillReceiveProps() {
        console.log('componentWillReceiveProps');
    }
    componentWillUpdate() {
        console.log('componentWillUpdate');
    }
    componentDidUpdate() {
        console.log('componentDidUpdate');
    }
    componentWillUnmount() {
        console.log('componentWillUnmount');
    }
    render() {
        return (
            <div onClick={this.handleClick.bind(this)}>Hi, {this.state.name}</div>
        );
    }
}

ComponentState.propTypes = {
    name: React.PropTypes.string,
};

ComponentState.defaultProps = {
    name: '',
};

module.exports = ComponentState;