import etheriumImage from "./images/icon-ethereum.svg";
import clockImage from "./images/icon-clock.svg";

function Eth() {
  return (
    <div
      style={{
        paddingTop: 16,
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <div style={{ display: "flex", gap: "6.48px", alignItems: "center" }}>
        <img src={etheriumImage} alt="etherium" />
        <span style={{ color: "var(--primary-cyan)" }}>{returnEth()} ETH</span>
      </div>
      <div style={{ display: "flex", gap: "6.48px", alignItems: "center" }}>
        <img src={clockImage} alt="Clock" />
        <span style={{ color: "var(--primary-soft-blue)" }}>
          {returnDays()} days left
        </span>
      </div>
    </div>
  );

  function returnEth() {
    return 0.041;
  }

  function returnDays() {
    return 3;
  }
}

export default Eth;
