import React, {Component} from 'react'
import './Blog.css';

export default class Blog extends Component {

    render(){
        return (
            <div className="postContainer">
                <h2>Blog</h2>
                <div className="templatePost Post">
                    <h3 className="postTitle">Titulo</h3>
                    <span className="contenido">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sed lacus finibus, posuere orci ac, ornare quam. Donec at fringilla odio. Sed fermentum mi non congue finibus. Vivamus vel sem egestas nibh laoreet commodo. Etiam nec neque lacinia, vehicula lacus nec, hendrerit ante. Ut eu nunc arcu. Mauris efficitur purus non velit imperdiet, id laoreet elit ultricies. Duis eget fermentum tortor. Phasellus rhoncus risus pellentesque mauris congue rutrum. Proin aliquam congue viverra.</span>
                    <div className="postFooter">
                        {/*<img></img>*/}
                        <span className="postDate">00/00/00</span>
                        <span className="postPoster">Lorem ipsum</span>
                    </div>
                </div>
            </div>
        )
    }
}