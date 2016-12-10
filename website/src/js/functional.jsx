function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
}

function FunctionalDemo() {
    return (
        <div>
            <Welcome name="Sara"/>
        </div>
    );
}
