import logo from "./logo.svg";
import "./App.css";
let singleStyle = {
    fontSize: "24px",
    color: "Yellow",
    backgroundColor: "rgb(0,0,0)",
};
function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
            <div className="container" style={singleStyle}>
                <h2>This is heading</h2>
            </div>
        </div>
    );
}

export default App;
