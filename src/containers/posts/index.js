import React, { Component } from 'react';
import { connect } from "react-redux";
import { fetchPosts, loadMorePosts } from "../../actions";
import { getPosts } from "../../selectors";
import { Link } from "react-router-dom";

class Posts extends Component {

    componentDidMount() {
        this.props.fetchPosts();
    }

    loadMore = () => {
        const { pagination } = this.props;
        const start = pagination.start;
        const limit = pagination.limit;
        this.props.loadMorePosts(start + limit);
    }

    render() {
        const { posts } = this.props;
        if (!posts.length){
            return null;
        }
        return (
            <div>
                <div className="posts">
                    {
                        posts.map((post, index) => {
                            const body = post.body.length > 60 ? post.body.substr(0, 59) + '...' : post.body;
                            return(
                                <div className="post" key={index}>
                                    <span>{post.id}</span>
                                    <h3>
                                        <Link to={`/posts/${post.userId}/${post.id}`}>{post.title}</Link>
                                    </h3>
                                    <p>{body}</p>
                                </div>
                            )
                        })
                    }
                    <div onClick={this.loadMore} className="load-more">Load more</div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = {
    fetchPosts,
    loadMorePosts
}

const mapStateToProps = state => ({
    posts: getPosts(state),
    pagination: state.pagination
})

export default connect(mapStateToProps, mapDispatchToProps)(Posts)
