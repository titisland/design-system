// Voice Call mascot — always wrapped in its cyan-mint halo.
function Mascot({ size = "md" }) {
  const haloSize = size === "lg" ? 120 : size === "sm" ? 40 : 80;
  const inner = Math.round(haloSize * 0.65);
  if (size === "inline") {
    return <img className="avatar-inline" src="../../assets/avatar-voice-call.png" alt="Voice Call" />;
  }
  return (
    <div className="halo" style={{ width: haloSize, height: haloSize }}>
      <img src="../../assets/avatar-voice-call.png" alt="Voice Call" style={{ width: inner, height: inner, borderRadius: 100 }} />
    </div>
  );
}
window.Mascot = Mascot;
