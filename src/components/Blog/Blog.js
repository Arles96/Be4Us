import React from 'react'
import './Blog.css'
import Button from '@material-ui/core/Button'

export default () => (
    <div className="blog" >
        <div className="blog-container" >
            <h2 className="blog-title" >Blog</h2>
            <p className="blog-text" >"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
            <div className="blog-button" >
                <Button variant="contained" href="/Blog" className="go-blog" >
                    Ir a blog
                </Button>
            </div>
        </div>
    </div>
)