import React from 'react';
import { connect } from "react-redux";
import Comment from '../../components/comment';
import { getCommentById } from '../../helpers/selectors'
import { withRouter } from "react-router";

class CommentsContainer extends React.Component {
    render() {
        if(!this.props.comment){
            return null;
        }
        return <Comment name={this.props.comment.name} email={this.props.comment.email} body={this.props.comment.body} />;
    }
}

const mapDispatchToProps = {
}

const mapStateToProps = (state, ownProps) => ({
    comment: getCommentById(state.comments, ownProps.id)
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CommentsContainer));
