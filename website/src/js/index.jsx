import React from "react";
import ReactDOM from "react-dom";

import FunctionalDemo from "./functional.jsx";
import ComponentBasic from "./component_basic.jsx";
import ComponentState from "./component_state.jsx";
import UserGithub from "./user_github.jsx";

require('../css/style.css');
// document.write(require("./content.js"));

function formatName(user) {
    return user.firstName + ' ' + user.lastName;
}

const user = {
    firstName: 'Harper',
    lastName: 'Perez'
};

const element = (
    <h1>
        Hello, {formatName(user)}!
    </h1>
);

ReactDOM.render(
    element,
    document.getElementById('element_demo')
);


ReactDOM.render(
    <FunctionalDemo />,
    document.getElementById('functional_demo')
);



ReactDOM.render(
    <ComponentBasic />,
    document.getElementById('component_demo')
);


ReactDOM.render(<ComponentState />, document.getElementById('click_demo'));


ReactDOM.render(
    <UserGithub source="https://api.github.com/users/torvalds"/>,
    document.getElementById('github_api')
);