import React, { useState, useEffect } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

function Home() {
    const {
        data: blogs,
        isLoading,
        error,
    } = useFetch("http://localhost:8000/blogs");

    const handleDelete = (id) => {
        // setBlogs(blogs.filter((blog) => blog.id != id));
        console.log(id);
    };

    return (
        <div className='home'>
            {error && <p>{error}</p>}
            {isLoading && <div>Loading ...</div>}
            {blogs && (
                <BlogList
                    blogs={blogs}
                    title={"All Blog Posts!"}
                    handleDelete={handleDelete}
                />
            )}
        </div>
    );
}

export default Home;
