import React from 'react';
import PropTypes from 'prop-types';

export default class Comment extends React.Component {

    render() {
        return (
            <div className="comment">
                <div>{this.props.name}</div>
                <span>{this.props.email}</span>
                <p>{this.props.body}</p>
            </div>
        )
    }
}


Comment.propTypes = {
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
};

Comment.defaultProps = {
}
