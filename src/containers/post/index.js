import React, { Component } from 'react';
import { connect } from "react-redux";
import { fetchPostById, fetchAuthorById, fetchCommentsByPostId } from "../../actions";
import { Link } from "react-router-dom";

class Post extends Component {

    componentDidMount() {
        this.props.fetchPostById(this.props.match.params.postId);
        this.props.fetchCommentsByPostId(this.props.match.params.postId);
        this.props.fetchAuthorById(this.props.match.params.userId);
    }

    render() {
        const { post } = this.props;
        if(!post){
            return null
        }
        const { comments } = this.props;
        const { author } = this.props;
        return (
            <div className="post-page">
                <div className="back">
                    <Link to="/">Back</Link>
                </div>
                <div className="post">
                    <h3>
                        {post.title}
                    </h3>
                    <p>{post.body}</p>
                    {
                        author ?
                        <div className="author">
                            Author: <br/>
                            <div>{author.name}</div>
                            <span>{author.email}</span>
                        </div>
                        : null
                    }
                </div>
                <div className="comments">
                    <h3>Comments:</h3>
                    {
                        comments.map((comment, index) => {
                            return(
                                <div className="comment" key={index}>
                                    <div>{comment.name}</div>
                                    <span>{comment.email}</span>
                                    <p>{comment.body}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = {
    fetchPostById,
    fetchAuthorById,
    fetchCommentsByPostId
}

const mapStateToProps = state => ({
    post: state.post,
    author: state.author,
    comments: state.comments
})

export default connect(mapStateToProps, mapDispatchToProps)(Post)
