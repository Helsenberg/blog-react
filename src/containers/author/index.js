import React from 'react';
import { connect } from "react-redux";
import { fetchAuthorById, unsetAuthor } from "../../actions/author";
import Author from '../../components/author';
import { withRouter } from "react-router";

class AuthorContainer extends React.Component {

    componentDidMount() {
        this.props.fetchAuthorById(this.props.userId);
    }

    componentWillUnmount(){
        this.props.unsetAuthor();
    }

    render() {
        if(!this.props.author){
            return null;
        }
        return <Author name={this.props.author.name} email={this.props.author.email}/>;
    }
}

const mapDispatchToProps = {
    fetchAuthorById,
    unsetAuthor
}

const mapStateToProps = (state, ownProps) => ({
    ...ownProps,
    author: state.author
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AuthorContainer));
