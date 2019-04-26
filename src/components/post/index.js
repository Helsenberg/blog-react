import React from 'react';
import { Link } from "react-router-dom";
import Author from '../../containers/author';
import Comments from '../../containers/comments';
import PropTypes from 'prop-types';

export default class Post extends React.Component {

    render() {
        return (
            <div className="post-page">
                <div className="back">
                    <Link to="/">Back</Link>
                </div>
                <div className="post">
                    <h3>
                        {this.props.title}
                    </h3>
                    <p>{this.props.body}</p>
                    <Author userId={this.props.userId}/>
                </div>
                <Comments postId={this.props.id}/>
            </div>
        )
    }
}


Post.propTypes = {
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    userId: PropTypes.number.isRequired
};

Post.defaultProps = {
}
