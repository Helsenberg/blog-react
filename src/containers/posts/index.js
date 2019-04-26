import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts, loadMorePosts } from '../../actions/posts';
import { getPosts } from '../../helpers/selectors';
import Posts from '../../components/posts';

class PostsContainer extends React.Component {

    componentDidMount(){
        this.props.fetchPosts();
    }

    loadMore(){
        this.props.loadMorePosts(this.props.start + this.props.limit);
    }

    render() {
        if (this.props.postsIds.length === 0){
            return null;
        }
        return <Posts postsIds={this.props.postsIds} loadMore={this.loadMore.bind(this)}/>
    }
}

const mapDispatchToProps = {
    fetchPosts,
    loadMorePosts
}

const mapStateToProps = state => ({
    start: state.posts.start,
    limit: state.posts.limit,
    postsIds: getPosts(state.posts).map(post => post.id)
})

export default connect(mapStateToProps, mapDispatchToProps)(PostsContainer);
