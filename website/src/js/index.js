require("../css/style.css");
document.write(require("./content.js"));

import React from 'react';
import ReactDOM from 'react-dom';

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
  document.getElementById('root')
);

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}



function List() {
  return (
    <div>
      <Welcome name="Sara" />
    </div>
  );
}

ReactDOM.render(
  <List />,
  document.getElementById('list')
);


class ListAnother extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <div>
        <Welcome name="Sara"/>
        <Welcome name="Cahal"/>
        <Welcome name="Edite"/>
      </div>
    );
  }
}

ReactDOM.render(
  <ListAnother />,
  document.getElementById('anotherlist')
);
