import logo from "./logo.svg";
import "./App.css";
let student1 = {
    name: "Abdul Rahman",
    section: "A",
    id: "34",
};
let singleStyle = {
    fontSize: "24px",
    color: "Yellow",
    backgroundColor: "rgb(0,0,0)",
    padding: "9px",
};

let { name, section, id } = student1;

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
            <div className="container">
                <h2>This is heading</h2>
                <h3 style={singleStyle}>
                    Student Name: {student1.name}, Section: {student1.section},
                    id: {student1.id}
                </h3>
                <small>By destructure</small>
                <h3
                    style={{
                        color: "black",
                        background: "yellow",
                        padding: "9px",
                    }}
                >
                    Student Name: {name}, Section: {section}, id: {id}
                </h3>
            </div>
        </div>
    );
}

export default App;
