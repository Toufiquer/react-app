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
    let allStudents = [
        { name: "Name 01", section: "A", id: "001" },
        { name: "Name 02", section: "A", id: "002" },
        { name: "Name 03", section: "A", id: "003" },
        { name: "Name 04", section: "A", id: "004" },
        { name: "Name 05", section: "A", id: "005" },
    ];
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
            <div className="container">
                <h3>this is just Heading</h3>
                {/* This is component name called myComponent */}
                <MyComponent></MyComponent>
                <Student name="Student Name 01" section="A" id="01"></Student>
                <Student name="Student Name 02" section="A" id="02"></Student>
                <Student name="Student Name 03" section="A" id="03"></Student>
                <Student name="Student Name 05" section="A" id="04"></Student>
                <h2>This is dynamic Data</h2>
                {allStudents.map(student => (
                    <Student
                        name={student.name}
                        id={student.id}
                        section={student.section}
                    ></Student>
                ))}
            </div>
        </div>
    );
}
function MyComponent() {
    return (
        <div>
            <h2>Heading of Component</h2>
            <p>This is the paragraph of Component</p>
        </div>
    );
}
function Student(props) {
    return (
        <div className="singleStudent">
            <h2>Name: {props.name}</h2>
            <h2>Section: {props.section}</h2>
            <h2>ID: {props.id}</h2>
        </div>
    );
}
export default App;
