import { useEffect, useState } from "react";
import "./App.css";
function App() {
    return (
        <div className="App">
            {/* Write Here */}
            <Runner></Runner>
        </div>
    );
}
// First with out useEffect
// Dispatch Set State Action
// let Runner = () => {
//     const [run, SetRun] = useState(0);
//     let runClick = () => {
//         let newRun = run + 1;
//         SetRun(newRun);
//         console.log(run);
//     };
//     return (
//         <div>
//             <div> Current run: {run}</div>
//             <button onClick={runClick}> Add</button>
//         </div>
//     );
// };

// Second with useState
let Runner = () => {
    const [run, SetRun] = useState(0);
    let runClick = () => {
        let newRun = run + 1;
        SetRun(newRun);
        console.log(run);
    };
    // If the DependencyList change then it will run. Like run in Runner
    useEffect(() => {
        console.log(run);
    }, [run]);
    return (
        <div>
            <div> Current run: {run}</div>
            <button onClick={runClick}> Add</button>

            <Child name="Child Data" grandChild="Grand child Data"></Child>
        </div>
    );
};

let Child = props => {
    return (
        <div>
            <h2>Name: {props.name}</h2>
            {/* <Child name={props.grandChild}></Child> */}
            <GrandChild name={props.grandChild}></GrandChild>
        </div>
    );
};

let GrandChild = props => {
    return (
        <div>
            <h2>Name: form , {props.name}</h2>
        </div>
    );
};
// export default Data;
export default App;
