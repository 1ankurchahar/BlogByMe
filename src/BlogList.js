import React from "react";
import { Link } from "react-router-dom";

function BlogList({ blogs, title, handleDelete }) {
    return (
        <div>
            <h2>{title}</h2>
            {blogs.map((blog) => (
                <div key={blog.id} className='blog-preview'>
                    <Link to={`/blogs/${blog.id}`}>
                        <h2>{blog.title}</h2>
                        <p>Written by {blog.author}</p>
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default BlogList;
