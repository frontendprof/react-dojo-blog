import React,{useState,useEffect} from 'react'
import BlogList from '../BlogList/BlogList'

const Home = () => {

    const [blogs,setBlogs]=useState(null)

    // const [blogs, setBlogs] = useState([
    //     { title: 'My new website', body: 'lorem ipsum deydimi?..', author: 'AbdulMalik', id: 1 },
    //     { title: 'Welcome party!', body: 'lorem ipsum takashi..', author: 'yoshi', id: 2 },
    //     { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 },
    //     { title: 'Programming language considerations', body: 'lorem ipsum. Choose one of high level programming languages', author: 'AbdulMalik', id: 4 }
    //   ])
      

    useEffect(()=>{
        fetch("http://localhost:8000/blogs")
        .then(res=>{
            return res.json()
        })
        .then(data=>{
            console.log(data);
            setBlogs(data)
        })
    },[])
    return (
        <div className="home">
           {blogs && <BlogList blogs={blogs} header="All Blogs" />}
        </div>
    )
}

export default Home;
