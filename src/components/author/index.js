import React from 'react';
import PropTypes from 'prop-types';

export default class Author extends React.Component {
    render() {
        return (
            <div className="author">
                Author: <br/>
                <div>{this.props.name}</div>
                <span>{this.props.email}</span>
            </div>
        )
    }
}


Author.propTypes = {
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired
};

Author.defaultProps = {
}
