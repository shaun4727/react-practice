import React from "react";

export default class Form extends React.Component {
    state = {
        title: "JavaScript",
        text: "JavaScript is popular"
    };
    handleChange = (e) => {
        console.log(e.target.value);
        if (e.target.type === "text") {
            this.setState({ title: e.target.value });
        } else if (e.target.type === "textarea") {
            this.setState({ text: e.target.value });
        }
    };

    render() {
        const { title, text } = this.state;

        return (
            <div>
                {/* follow forms in react doc */}
                <form>
                    {/* If I write in a input field. As you type, the browser automatically updates */}
                    {/* // the value property of that DOM element.  */}
                    {/* //However, this value is only stored */}
                    {/* in memory — it is not persisted anywhere unless you explicitly save it (e.g., to
                    a variable, database, localStorage, etc.).  */}
                    {/* this file is not html. it is jsx. so it's behavior is different from html. */}
                    {/* for html, dom handles state. but here we are working with react. so dom does
                    not handle state here. Instead react does it. In this example, It is not clear
                    that between react and dom which one is controlling this form behavior */}
                    {/* adding a value attribute in the input element hand over the control of this
                    field to react */}
                    {/* If I don't provide value attribute  in this Input element, dom controls this Input element */}
                    {/* if dom controls Input element, it is called uncontrolled way. otherwise it is called
                    controlled way */}
                    {/* if I don't provide onChange handler with a state in this input element, it behaves like readonly field */}
                    <input
                        type="text"
                        placeholder="Enter title"
                        value={title}
                        onChange={this.handleChange}
                    />
                    <br />
                    <br />
                    <textarea name="text" value={text} onChange={this.handleChange} />
                </form>
            </div>
        );
    }
}
