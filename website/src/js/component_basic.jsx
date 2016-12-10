import React from "react";

class ComponentBasic extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <Welcome name="Cahal"/>
            </div>
        );
    }
}