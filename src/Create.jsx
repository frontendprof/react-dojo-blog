import {useState} from 'react'

const Create = () => {

    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [author, setAuthor] = useState("");

    const handleSubmit=e=>{
        e.preventDefault();
        const blog={title,body,author}

        console.log(blog);
    }


    return (
        <div className="create">
            <h2>Add a new blog</h2>

            <form onSubmit={handleSubmit}>

                <label>Blog Title</label>
                <input 
                    type="text"
                    required
                    value={title}
                    onChange={(e)=>setTitle(e.target.value)}
                />


                <label>Blog Body:</label>
                <textarea 
                    required
                    value={body}
                    onChange={(e)=>setBody(e.target.value)}
                ></textarea>



                <label>Blog Author:</label>
                <select
                    value={author}
                    onChange={(e)=>setAuthor(e.target.value)}
                >
                    <option value="">Choose the author</option>
                    <option value="abdulmalik">AbdulMalik</option>
                    <option value="guest12">Guest12</option>
                    <option value="viking3">Viking3</option>
                    
                </select>

                <button>Add Blog</button>          

                <p>{title}</p>
                <p>{body}</p>
                <p>{author}</p>

            </form>
        </div>
    )
}

export default Create
