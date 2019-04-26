import React from 'react';
import { connect } from "react-redux";
import { fetchCommentsByPostId, unsetComments } from "../../actions/comments";
import Comments from '../../components/comments';
import { withRouter } from "react-router";

class CommentsContainer extends React.Component {

    componentDidMount() {
        this.props.fetchCommentsByPostId(this.props.postId);
    }

    componentWillUnmount(){
        this.props.unsetComments();
    }

    render() {
        if(!this.props.commentsIds.length){
            return null;
        }
        return <Comments commentsIds={this.props.commentsIds} />;
    }
}

const mapDispatchToProps = {
    fetchCommentsByPostId,
    unsetComments
}

const mapStateToProps = (state, ownProps) => ({
    ...ownProps,
    commentsIds: state.comments.map(comment => comment.id)
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CommentsContainer));
