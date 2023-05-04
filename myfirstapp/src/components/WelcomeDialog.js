function WelcomeDialog() {
    return (
    <>
        <Dialog title ="Welcome to React Course" content="This is React Course"/>
        <Dialog title ="Welcome to JS Course" content="This is JS Course"/>
    </>
    )
}

export default WelcomeDialog;

function FancyBorder(props) {
    return <div>{props.children}</div>;
}

function Dialog(props) {
    return (
    <FancyBorder>
        <h1 className="Dialog-title">{props.title}</h1>
        <p>{props.content}</p>
    </FancyBorder>
    );

}