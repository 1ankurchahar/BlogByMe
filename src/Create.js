import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function Create() {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [author, setAuthor] = useState("YOU");
    const [loading, setLoading] = useState(false);

    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, body, author };

        setLoading(true);
        // console.log(blog);
        fetch("http://localhost:8000/blogs", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog),
        }).then(() => {
            console.log("New Blog Added");
            setLoading(false);
            // history.go(-1);
            history.push("/");
        });
        setTitle("");
        setBody("");
        setAuthor("");
    };

    return (
        <div className='create'>
            <h2>Add a new Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog Title: </label>
                <input
                    type='text '
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>Blog Body:</label>
                <textarea
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}></textarea>
                <label>Author</label>
                <select
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}>
                    <option value='YOU'> YOU</option>
                    <option value='ME'>ME</option>
                </select>
                {!loading && <button>Add Blog</button>}
                {loading && <button disabled>Add Blog....</button>}
            </form>
        </div>
    );
}

export default Create;
