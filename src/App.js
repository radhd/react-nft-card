import "./App.css";
import Text from "./Text";

function App() {
  function foo() {
    return 5;
  }
  return (
    <div className="container" style={styles.container}>
      <h1>Hello </h1>
      <Text />
      <p>{false ? "done" : "not done"}</p>
    </div>
  );
}

export default App;

const styles = {
  container: {
    backgroundColor: "blue",
  },
};
