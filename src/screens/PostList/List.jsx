import PropTypes from 'prop-types';
import React from 'react';

List.propTypes = {
    posts: PropTypes.array,
};

List.defaultProps = {
    posts: [],
};

function List(props) {
    const { posts } = props;

    return (
        <div>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>
    );
}

export default List;
