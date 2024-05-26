import "./App.css";
import Card from "./Card";

function App() {
  return (
    <div className="bgWrapper" style={styles.bgWrapper}>
      <Card />
    </div>
  );
}

const styles = {
  bgWrapper: {
    backgroundColor: "var(--neutral-very-dark-blue-bg)",
    padding: "62px 24px",
  },
};

export default App;
