import React from 'react';
import { connect } from "react-redux";
import PostPreview from '../../components/postPreview';
import { getPostById } from '../../helpers/selectors';

class PostPreviewContainer extends React.Component {

    render() {
        if(!this.props.post){
            return null;
        }
        const body = this.props.post.body.length > 60 ? this.props.post.body.substr(0, 59) + '...' : this.props.post.body;
        return <PostPreview
                    id={this.props.post.id}
                    userId={this.props.post.userId}
                    title={this.props.post.title}
                    body={body}
                />
    }
}

const mapDispatchToProps = {
}

const mapStateToProps = (state, ownProps) => ({
    post: getPostById(state.posts.data, ownProps.id)
})

export default connect(mapStateToProps, mapDispatchToProps)(PostPreviewContainer);
