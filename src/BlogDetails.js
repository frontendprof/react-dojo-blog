import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from './useFetch';

const BlogDetails = () => {


    const {id}=useParams();
    const {data:blog,error,isPending}=useFetch("http://localhost:8000/blogs/"+id);


    return (
        <div className="blog-details">
            {error && <h3 className="condition">{error}</h3>}
            {isPending && <h3 className="condition">Loading the data...</h3>}
           {blog && (
               <article>
                   <h2>{blog.title}</h2>
                   <p>Written by {blog.author}</p>
                   <div>{blog.body}</div>
               </article>
           )}
        </div>
    )
}

export default BlogDetails
