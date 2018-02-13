import React, { Component } from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionsCreator';


class Categories extends Component {
    componentDidMount() {
        
    }
    render() {
        if (this.props.hasErrored) {
            return <p>Sorry! There was an error loading the items</p>;
        }
        if (this.props.isLoading) {
            return <p>Loading…</p>;
        }
        return (
            <ul>
                {this.props.categories.map((cat) => (
                    <li key={cat.id} onClick={this.props.follow.bind(null, cat.id)}>
                        {cat.name}
                    </li>
                ))}
            </ul>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        categories: state.categories,
        hasErrored: state.hasError,
        isLoading: state.isLoading
    };
};
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(actionCreators, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Categories);