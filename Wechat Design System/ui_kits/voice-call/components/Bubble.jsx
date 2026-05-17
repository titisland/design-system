// Chat bubbles · variants
//   <Bubble who="user"> — right-aligned gradient
//   <Bubble who="agent"> — short text, with avatar
//   <Bubble who="agent-soft"> — soft gray onboarding card
function Bubble({ who = "agent", children }) {
  if (who === "user") {
    return (
      <div className="row user">
        <div className="bubble user">{children}</div>
      </div>
    );
  }
  if (who === "agent-soft") {
    return (
      <div className="row">
        <div className="bubble agent-soft">{children}</div>
      </div>
    );
  }
  // agent inline w/ avatar
  return (
    <div className="row agent">
      <img className="avatar-inline" src="../../assets/avatar-voice-call.png" alt="Voice Call" />
      <div className="bubble agent-inline">{children}</div>
    </div>
  );
}
window.Bubble = Bubble;
