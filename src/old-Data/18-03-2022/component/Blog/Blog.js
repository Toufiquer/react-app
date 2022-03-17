import React from "react";

let Blog = props => {
    let { title, body } = props.post;
    return (
        <div className="blog">
            <article>
                <h2>Title: {title}</h2>
                <h4>Body: {body}</h4>
                <p style={{ color: "white", backgroundColor: "#aeaed6" }}>
                    {/* <p> */}
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Blanditiis earum, illo molestias distinctio laudantium nemo.
                    Placeat sed et voluptatem accusantium consequuntur
                    voluptatibus neque natus enim necessitatibus, itaque, quo
                    quod similique.
                </p>
            </article>
        </div>
    );
};

export default Blog;
