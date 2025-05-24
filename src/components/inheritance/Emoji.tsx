import React from "react";

interface EmojiProps {
    overwrite?: string;
}

export default class Emoji extends React.Component<EmojiProps> {
    addEmoji = (text: string, emoji: string) => {
        return `${emoji} ${text} ${emoji}`;
    };

    render() {
        let text = "an emoji component";

        const { overwrite } = this.props;
        if (overwrite) text = overwrite;

        // Optionally, you can use this.props.overwrite if you want to pass overwrite as a prop
        // For now, just use the default text
        return <div>{text}</div>;
    }
}
