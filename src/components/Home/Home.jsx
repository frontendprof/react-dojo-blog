import React,{useState} from 'react'

const Home = () => {

    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum deydimi?..', author: 'AbdulMalik', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum takashi..', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
      ])

    return (
        <div className="home">
           {blogs.map(b=>(
               <div className="blog-preview" key={b.id}>
                   <h2>{b.title}</h2>
                   <p>Written by {b.author}</p>
               </div>
           ))}
        </div>
    )
}

export default Home;
