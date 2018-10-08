import React from 'react';
import PropTypes from 'prop-types';
import BlogPost from "./BlogPost";

class PostHolder extends React.Component {
    render() {

        let posts = this.props.posts.map((item, index) => {
            return <BlogPost key={index} title={item.title} date={item.date} author={item.author}>{item.text}</BlogPost>
        });

        return <div className={"blog-main"}>
            {posts}
        </div>;
    }
}

// Свойства по умолчанию
PostHolder.defaultProps = {
    posts: []
};

// Проверка типов
PostHolder.propTypes = {
    posts: PropTypes.array.isRequired
};

export default PostHolder;