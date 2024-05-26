import equilibriumImage from "./images/image-equilibrium.jpg";
import Eth from "./Eth";
import Avatar from "./Avatar";

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
      <Eth />
      <Avatar />
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

export default Card;
