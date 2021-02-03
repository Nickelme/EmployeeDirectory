import React, { Component } from "react";
import API from "../../utils/API";


class Search extends Component {


    render() {
        // Notice how each input has a `value`, `name`, and `onChange` prop
        return (
            <div>
                <input
                    name="Search"
                    type="text"
                    placeholder="Search"
                    onChange={this.props.SearchChanged}
                />
            </div>
        );
    }
}

export default Search;