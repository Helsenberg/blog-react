import React from "react";
import { connect } from "react-redux";
import { searchPosts } from "../../actions/posts";
import Search from '../../components/search';

class SearchContainer extends React.Component {

    onSearch(q) {
        this.props.searchPosts(q);
    }

    render() {
        return <Search onSearch={this.onSearch.bind(this)} />
    }
}

const mapDispatchToProps = {
    searchPosts
}

export default connect(null, mapDispatchToProps)(SearchContainer);
