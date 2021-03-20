import React, { useEffect, useState } from 'react';
import queryString from 'query-string';

import List from '../../screens/PostList/List.jsx';
import Pagination from '../../screens/PostList/Pagination.jsx';
import PostFilterForm from '../../screens/PostList/PostFilterForm.jsx';

PostList.propTypes = {};

function PostList(props) {
    const [posts, setPosts] = useState([]);
    const [pagination, setPagination] = useState({
        _page: 1,
        _limit: 10,
        _totalRows: 1,
    });
    const [filter, setFilter] = useState({
        _page: 1,
        _limit: 10,
    });

    useEffect(() => {
        const getPostList = async () => {
            try {
                let paramString = queryString.stringify(filter);
                let url = `http://js-post-api.herokuapp.com/api/posts?${paramString}`;
                const response = await fetch(url);
                const responseJSON = await response.json();
                const { data, pagination } = responseJSON;
                setPosts(data);
                setPagination(pagination);
            } catch (error) {
                console.log(new Error(error));
            }
        };

        getPostList();
    }, [filter]);

    function handlePageChange(newPage) {
        setFilter({ ...filter, _page: newPage });
    }

    function handleSubmitFromFilter(value) {
        setFilter({ ...filter, _page: 1, title_like: value.q });
    }

    return (
        <div>
            <PostFilterForm
                onSubmitForm={handleSubmitFromFilter}
            ></PostFilterForm>
            <List posts={posts}></List>
            <Pagination
                pagination={pagination}
                onPageChange={handlePageChange}
            ></Pagination>
        </div>
    );
}

export default PostList;
