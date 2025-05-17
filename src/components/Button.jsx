import React from "react";

class Button extends React.Component {
    shouldComponentUpdate(nextProps) {
        const { change: currentChange } = this.props;
        const { change: nextChange } = nextProps;

        if (currentChange === nextChange) {
            return false;
        }
        return true;
    }
    render() {
        console.log("button component rendered");
        const { change, locale } = this.props;
        return <button onClick={() => change(locale)}>Click</button>;
    }
}

export default Button;
