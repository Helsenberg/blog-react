import React from 'react';
import { connect } from "react-redux";
import { fetchPostById, unsetPost } from "../../actions/post";
import Post from '../../components/post';

class PostContainer extends React.Component {

    componentDidMount() {
        this.props.fetchPostById(this.props.match.params.postId);
    }

    componentWillUnmount(){
        this.props.unsetPost();
    }

    render() {
        if(!this.props.post){
            return null;
        }
        return <Post
                    title={this.props.post.title}
                    body={this.props.post.body}
                    id={this.props.post.id}
                    userId={this.props.post.userId}
                />;
    }
}

const mapDispatchToProps = {
    fetchPostById,
    unsetPost
};

const mapStateToProps = state => ({
    post: state.post
});

export default connect(mapStateToProps, mapDispatchToProps)(PostContainer);
