import React from 'react';
import PropTypes from 'prop-types';

class BlogPost extends React.Component {
    render() {
        return <div className={"blog-post"}>
            <h2 className="blog-post-title">{this.props.title}</h2>
            <p className="blog-post-meta">{this.props.date} <a href="#">{this.props.author}</a></p>
            <p>{this.props.children}</p>
        </div>;
    }

}

// Свойства по умолчанию
BlogPost.defaultProps = {
    title: "Blog post",
    date: "December 23, 2013 by ",
    author: "John Doe"
};

// Проверка типов
BlogPost.propTypes = {
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
};


export default BlogPost;