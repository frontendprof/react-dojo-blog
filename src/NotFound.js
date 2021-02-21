import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <div className="not-found">
            <h3>Apologies</h3>
            <br/>
            <h3>The page cannot be found</h3>
            <Link to="/">Back to home page</Link>
        </div>
    )
}

export default NotFound
