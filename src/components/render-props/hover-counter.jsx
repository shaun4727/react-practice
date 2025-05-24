import React from "react";

export default class HoverCounterRender extends React.Component {
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
                <button type="button" onMouseOver={this.incrementCount}>
                    hover {count} times
                </button>
            </div>
        );
    }
}
