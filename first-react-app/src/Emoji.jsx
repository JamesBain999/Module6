import { useState } from "react";

function EmojiChanger(){
    const [emoji, setEmoji] = useState('😊')

    const handleSadEmoji = () => {
        let newEmoji = "😀"
        if (emoji === "😀") newEmoji = "🫥"
        setEmoji(newEmoji)
    }

    return (
      <div className="MoodChanger">
        Current Mood: {emoji}
        <button onClick={() => setEmoji("😂")}>Laughing Emoji</button>
        <button onClick={() => setEmoji("😘")}>Kissing Emoji</button>
        <button onClick={() => setEmoji("😎")}>Sunglasses Emoji</button>
        <button onClick={handleSadEmoji}>Sad Emoji</button>
      </div>
    );
}

export default EmojiChanger