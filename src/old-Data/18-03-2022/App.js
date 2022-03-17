import "./App.css";
import { useEffect, useState } from "react";
import Blog from "./component/Blog/Blog";
import Mobile from "./component/Mobile/Mobile";
import Todo from "./component/Todo/Todo";
// import Blog from "./component/Blog/Blog";
// import Blog from "./component/Blog/Blog";
function App() {
    return (
        <div className="App">
            <LoadAllPost></LoadAllPost>
        </div>
    );
}
let parents = {
    display: "grid",
    gridTemplateColumns: "repeat(3,1fr)",
    gridGap: "9px",
    width: "80%",
    margin: "9px auto",
};
let LoadAllPost = () => {
    const [allPost, SetAllPost] = useState([]);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(res => res.json())
            .then(data => SetAllPost(data));
    }, []);
    return (
        <div style={{ margin: "9px auto", textAlign: "center" }}>
            <Mobile></Mobile>
            <Todo></Todo>
            <div style={parents}>
                {allPost.map(post => (
                    <Blog post={post}></Blog>
                ))}
            </div>
        </div>
    );
};

export default App;
