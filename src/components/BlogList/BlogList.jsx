import React from 'react'

const BlogList = ({blogs,header}) => {
    return (
        <div className="blog-list">
            <h2>{header}</h2>
            {blogs.map(b=>(
               <div className="blog-preview" key={b.id}>
                   <h2>{b.title}</h2>
                   <p>Written by {b.author}</p>
                   
               </div>
           ))}
        </div>
    )
}

export default BlogList
