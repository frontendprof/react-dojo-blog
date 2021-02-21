import React,{useState,useEffect} from 'react'
import BlogList from './BlogList'

const Home = () => {

    const [blogs,setBlogs]=useState(null);
    const [isPending,setIsPending]=useState(true);
    const [error,setError]=useState(null)

    // const [blogs, setBlogs] = useState([
    //     { title: 'My new website', body: 'lorem ipsum deydimi?..', author: 'AbdulMalik', id: 1 },
    //     { title: 'Welcome party!', body: 'lorem ipsum takashi..', author: 'yoshi', id: 2 },
    //     { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 },
    //     { title: 'Programming language considerations', body: 'lorem ipsum. Choose one of high level programming languages', author: 'AbdulMalik', id: 4 }
    //   ])
      

    useEffect(()=>{
        setTimeout(()=>{
            fetch("http://localhost:8000/blogs")
            .then(res=>{
                if(!res.ok){
                    throw Error("Could not fetch the data for the resource")
                }
                return res.json()
            })
            .then(data=>{
                setBlogs(data)
                setIsPending(false)
                setError(null)
            })
            .catch(err=>{
                setIsPending(false)
                setError(err.message);
            })
        },1000)
    },[])
    return (
        <div className="home">
            {error && <h3 className="condition">{error}</h3>}
            {isPending && <h3 className="condition">Loading the data...</h3>}
           {blogs && <BlogList blogs={blogs} header="All Blogs" />}
        </div>
    )
}

export default Home;
