import React from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

export default class Posts extends React.Component {
    render() {
        return (
            <div className="post">
                <span>{this.props.id}</span>
                <h3>
                    <Link to={`/posts/${this.props.id}`}>{this.props.title}</Link>
                </h3>
                <p>{this.props.body}</p>
            </div>
        )
    }
}

Posts.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
};

Posts.defaultProps = {
}
