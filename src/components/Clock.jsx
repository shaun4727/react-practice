import React from "react";

import Button from "./Button";

class Clock extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            date: new Date(),

            locale: "bn-BD"
        };
        {
            /* to use this.setState without converting handleClick to arrow function..bind this */
        }
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        this.timerId = setInterval(() => {
            this.tick();
        }, 1000);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    // handleClick(locale) {
    //     this.setState({
    //         locale: locale
    //     });
    // }
    handleClick = (locale) => {
        this.setState({
            locale: locale
        });
    };

    componentWillUnmount() {
        clearInterval(this.timerId);
    }

    render() {
        const { date, locale } = this.state;
        // console.log("Clock component render");
        /**
         * we can bind this from render
         *
         * because Since render() is called on the instance, inside render() → this refers to the instance of Clock.
         *
         * clockInstance.render();
         *
         * so we can bind this to handleClick like
         * this.handleClick.bind(this)
         */

        /**
         * if we see console, we can see clock and button component is being re-rendered continuously
         *
         * because time is being updated on every on sec. so component is also rendering. on every
         * render a new function with new reference (handleClick) is being created. so a new props is
         * being passed to Button component and those components are being re rendered.
         * .bind() returns a new function every time.
         *
         * How to solve this re-render issue?
         * 1. define function as an arrow function
         * 2. send function and parameters separately using props
         */
        return (
            <>
                <h1>
                    <span className="text">{date.toLocaleTimeString(locale)}</span>
                </h1>
                {/* we can't set parameter like following way because it's being called. Instead
                    use bind
                */}
                {/* <Button change={this.handleClick("en-US")} /> */}

                {/* general way with re render */}
                {/* <Button change={this.handleClick.bind(this, "en-US")}>Click Here</Button> */}

                {/* avoiding re-render */}
                <Button change={this.handleClick} locale="en-US"></Button>

                {/* <button onClick={this.handleClick.bind(this, "en-US")}>Click</button> */}
                {/* <button onClick={() => this.handleClick.bind("en-US")}>Click</button> */}
            </>
        );
    }
}

export default Clock;
