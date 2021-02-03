import React, { Component } from "react";
import API from "../../utils/API";


class Search extends Component {


    render() {
        // Notice how each input has a `value`, `name`, and `onChange` prop
        return (
            <div>
                <select onChange={this.props.sortChanged}>
                    <option value="lnNomral">Last Name</option>
                    <option value="lnReverse">Last Name Reverse</option>
                </select>
            </div>
        );
    }
}

export default Search;