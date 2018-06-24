import React, {Component} from 'react'
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button'
import './Blog.css';

export default class Blog extends Component {

    render(){
        return (
            <div className="post-container">
                <h1 className="post-blog-title">Blog</h1>
                <Paper className="template-post post">
                    <h2 className="post-title">Titulo</h2>
                    <span className="post-contenido">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sed lacus finibus, posuere orci ac, ornare quam. Donec at fringilla odio. Sed fermentum mi non congue finibus. Vivamus vel sem egestas nibh laoreet commodo. Etiam nec neque lacinia, vehicula lacus nec, hendrerit ante. Ut eu nunc arcu. Mauris efficitur purus non velit imperdiet, id laoreet elit ultricies. Duis eget fermentum tortor. Phasellus rhoncus risus pellentesque mauris congue rutrum. Proin aliquam congue viverra.</span>
                    <div className="post-footer">
                        {/*<img></img>*/}
                        <span className="post-date">00/00/00</span>&nbsp;
                        <span className="post-poster">Lorem ipsum</span>
                    </div>
                </Paper>

                <Paper className="template-post post">
                    <h2 className="post-title">Titulo</h2>
                    <span className="post-contenido">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sed lacus finibus, posuere orci ac, ornare quam. Donec at fringilla odio. Sed fermentum mi non congue finibus. Vivamus vel sem egestas nibh laoreet commodo. Etiam nec neque lacinia, vehicula lacus nec, hendrerit ante. Ut eu nunc arcu. Mauris efficitur purus non velit imperdiet, id laoreet elit ultricies. Duis eget fermentum tortor. Phasellus rhoncus risus pellentesque mauris congue rutrum. Proin aliquam congue viverra.</span>
                    <div className="post-footer">
                        {/*<img></img>*/}
                        <span className="post-date">00/00/00</span>&nbsp;
                        <span className="post-poster">Lorem ipsum</span>
                    </div>
                </Paper>
                <div className="blog-button" >
                    <Button variant="contained" href="/blog" className="blog-button-" >
                        Ir al blog
                    </Button>
                </div>
            </div>
        )
    }
}