import React from "react";

const Single = props => {
    let { title, id, completed } = props.post;
    return (
        <div style={{ border: "2px solid blue" }}>
            <h2>Title: {title}</h2>
            <h4>ID: {id}</h4>
            <h4>Complete: {completed ? "True" : "False"}</h4>
        </div>
    );
};

export default Single;
