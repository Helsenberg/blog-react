import React from 'react';
import Comment from '../../containers/comment';
import PropTypes from 'prop-types';

export default class Comments extends React.Component {
    render() {
        return (
            <div className="comments">
                <h3>Comments:</h3>
                {this.props.commentsIds.map(id => <Comment id={id} key={id}/>)}
            </div>
        )
    }
}

Comments.propTypes = {
    commentsIds: PropTypes.array.isRequired
};

Comments.defaultProps = {
}
