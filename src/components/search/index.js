import React, { Component } from "react";
import { connect } from "react-redux";
import { searchPosts } from "../../actions";
import './styles.css';

class Search extends Component {

    handleSubmit(event){
        event.preventDefault();
    }

    handleChange(event) {
        this.props.searchPosts(event.target.value);
    }

    render() {
        return (
            <div className="editor">
                <h2>Quick search</h2>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <input type="text" onChange={this.handleChange.bind(this)}/>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = {
    searchPosts
}

export default connect(null, mapDispatchToProps)(Search);
