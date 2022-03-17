import React from "react";
import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";
import Single from "../Single/Single";

let parents = {
    display: "grid",
    gridTemplateColumns: "repeat(3,1fr)",
    gridGap: "9px",
    width: "80%",
    margin: "9px auto",
};
const Todo = () => {
    const [todo, SetToDos] = useState([]);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos")
            .then(res => res.json())
            .then(data => SetToDos(data));
    }, []);
    return (
        <div style={parents}>
            {todo.map(todo => (
                <Single post={todo}></Single>
            ))}
        </div>
    );
};

export default Todo;
