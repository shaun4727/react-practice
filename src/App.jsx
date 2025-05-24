import Bracket from "./components/composition/Bracket";
import Emoji from "./components/composition/Emoji";
import Text from "./components/composition/Text";
import Counter from "./components/render-props/counter";
// import User from "./components/render-props/user-component";

function App() {
    return (
        <>
            {" "}
            <Text />
            {/* composition vs inheritance */}
            <Emoji>
                {({ addEmoji }) => (
                    <Bracket>
                        {({ addBracket }) => <Text addEmoji={addEmoji} addBracket={addBracket} />}
                    </Bracket>
                )}
            </Emoji>
            {/* render props */}
            <Counter>
                {(counter, incrementCount) => (
                    <ClickCounter count={counter} incrementCount={incrementCount} />
                )}
            </Counter>
            <Counter>
                {(counter, incrementCount) => (
                    <HoverCounter count={counter} incrementCount={incrementCount} />
                )}
            </Counter>
            {/* <User render={(isLoggedIn) => (isLoggedIn ? "Shaun" : "Guest")} /> */}
        </>
    );
}

export default App;
