// import { useState,useEffect } from 'react'
import BlogList from './BlogList'
import useFetch from './useFetch'

const Home = () => {

    const {data:blogs,isPending,error}=useFetch("http://localhost:8000/blogs")
    
    return (
        <div className="home">
            {error && <h3 className="condition">{error}</h3>}
            {isPending && <h3 className="condition">Loading the data...</h3>}
           {blogs && <BlogList blogs={blogs} header="All Blogs" />}
        </div>
    )
}

export default Home;
