import React, { Component } from "react";
import PropTypes from 'prop-types';
import './styles.css';

export default class Search extends Component {

    handleSubmit(event){
        event.preventDefault();
    }

    handleChange(event) {
        this.props.onSearch(event.target.value);
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

Search.propTypes = {
    onSearch: PropTypes.func.isRequired,
};

Search.defaultProps = {
}

