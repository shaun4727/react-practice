import Emoji from "./Emoji";

export default class Text extends Emoji {
    // constructor function required for inheritance
    constructor(props) {
        super(props);
    }

    // problems using inheritance
    /**
     * 1. text component depends(tightly coupled) on Emoji component.
     * If we remove Emoji, text component won't work.
     *
     * 2. Unable to know That Text components depends on Emoji, from App.jsx
     * 3. If Text component wants to extend another component, procedure will be complex, we
     * have to define an intermediate component
     *
     * So, react suggests to used composition over inheritance
     *
     * @returns true
     */

    /**
     * what is composition in react
     * ✅ What is Composition in React?
     * Composition in React means building complex UIs by combining smaller, reusable components —
     * like putting Lego blocks together. It's not about avoiding class components specifically,
     * but rather about how you structure and reuse components, whether you're using class or functional
     * components.
     *
     *
     * 🧩 The Core Idea:
     * Instead of using inheritance (extending components), React encourages you to compose components using
     * props and children.
     *
     *
     * @returns true
     */

    render() {
        const decoratedText = this.addEmoji("I am practicing js", "🔥");

        return <Emoji overwrite={decoratedText} />;
    }
}
