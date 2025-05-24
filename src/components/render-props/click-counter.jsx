import React from "react";

export default class ClickCounterRender extends React.Component {
    state = {
        count: 0
    };
    incrementCount = () => {
        this.setState((prevState) => ({ count: prevState.count + 1 }));
    };
    render() {
        const { count } = this.state;

        return (
            <div>
                <button type="button" onClick={this.incrementCount}>
                    Clicked {count} times
                </button>
            </div>
        );
    }
}
