import { useState } from "react";

function MoodChanger() {
  const [mood, setMood] = useState("happy");
  // Calls setMood with a fixed value of 'ecstatic'
  // begin with 'handle' prefix by convention
  const handleWinLotto = () => {
    setMood("ecstatic");
  };
  // Calls setMood with a conditional state value
  const handleRunningLate = () => {
    let newMood = "stressed";
    if (mood === "stressed") newMood = "really stressed";
    else if (mood === "really stressed") newMood = "giving up";
    setMood(newMood);
  };

  const handleSkippingBreakfast = () => {
    let newMood = "peckish";
    if (mood === "peckish") newMood = "hungry";
    else if (mood === "hungry") newMood = "starving";
    else if (mood === "starving") newMood = "hangry";
    else if (mood === "hangry") newMood = "famine induced psychotic rage";
    setMood(newMood);
    setTimeout(() => console.log(`At end of mood change handler, mood is: ${mood}`), 3000)
  };

  return (
    <div className="MoodChanger">
      Current Mood: {mood}
      {/* Using arrow functions */}
      <button onClick={() => setMood("tired")}>Stay Up Late</button>
      <button onClick={handleSkippingBreakfast}>Skip breakfast</button>
      <button onClick={handleRunningLate}>Running Late</button>
      <button onClick={handleWinLotto}>Win Lotto</button>
    </div>
  );
}

export default MoodChanger;
