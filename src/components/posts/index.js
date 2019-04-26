import React from 'react';
import PostPreview from '../../containers/postPreview';
import PropTypes from 'prop-types';

export default class Posts extends React.Component {
    render() {
        return (
            <div className="posts">
                {this.props.postsIds.map(id => <PostPreview id={id} key={id}/>)}
                <div onClick={this.props.loadMore} className="load-more">Load more</div>
            </div>
        )
    }
}

Posts.propTypes = {
    postsIds: PropTypes.array.isRequired,
    loadMore: PropTypes.func.isRequired,
};

Posts.defaultProps = {
}
