import equilibriumImage from "./images/image-equilibrium.jpg";
import etheriumImage from "./images/icon-ethereum.svg";
import clockImage from "./images/icon-clock.svg";
import avatarPicture from "./images/image-avatar.png";

function Card() {
  return (
    <div className="wrapper" style={styles.wrapper}>
      <img src={equilibriumImage} alt="Equilibrium" />
      <h1 style={{ color: "var(--neutral-white)", paddingTop: 24 }}>
        Equilibrium #3429
      </h1>
      <p style={{ color: "var(--primary-soft-blue)", paddingTop: 12 }}>
        Our Equilibrium collection promotes balance and calm.
      </p>
      <Eth eth="0.041" days={3} />
      <Avatar />
    </div>
  );
}

function Eth(props) {
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
        <span style={{ color: "var(--primary-cyan)" }}>{props.eth} ETH</span>
      </div>
      <div style={{ display: "flex", gap: "6.48px", alignItems: "center" }}>
        <img src={clockImage} alt="Clock" />
        <span style={{ color: "var(--primary-soft-blue)" }}>
          {props.days} days left
        </span>
      </div>
    </div>
  );
}

const styles = {
  bgWrapper: {
    backgroundColor: "var(--neutral-very-dark-blue-bg)",
    padding: "62px 24px",
  },
  wrapper: {
    backgroundColor: "var(--neutral-very-dark-blue-card-bg)",
    padding: 24,
    maxWidth: 593,
    margin: "0 auto",
  },
};

function Avatar() {
  return (
    <div>
      <div
        style={{
          height: "1px",
          width: "100%",
          backgroundColor: "var(--neutral-very-dark-blue-line)",
          margin: "16px 0",
        }}
      ></div>
      <div className="flex-center" style={{ gap: "16px" }}>
        <img
          style={{ border: "1px solid white", borderRadius: 50 }}
          src={avatarPicture}
          height={"33px"}
        />
        <span style={{ color: "var(--primary-soft-blue)" }}>
          Creation of <span style={{ color: "white" }}>{returnName()}</span>
        </span>
      </div>
    </div>
  );

  function returnName() {
    return "Jules Wyvern";
  }
}

export default Card;
