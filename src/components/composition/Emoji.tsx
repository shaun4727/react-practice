import React from "react";

type EmojiProps = {
    children: (props: { addEmoji: (text: string, emoji: string) => string }) => React.ReactNode;
};

export default class Emoji extends React.Component<EmojiProps> {
    addEmoji = (text: string, emoji: string) => `${emoji} ${text} ${emoji}`;

    render() {
        const { children } = this.props;

        return children({ addEmoji: this.addEmoji });
    }
}
