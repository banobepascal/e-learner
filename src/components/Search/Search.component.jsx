import React, { Component } from "react";

import { FormContainer, InputField } from "./Search.styles";

class Search extends Component {
  state = {
    query: "",
    results: {},
    loading: false,
    message: "",
  }; 
  
 cancel = '';

  handleOnInputChange = (event) => {
    const query = event.target.value;
    this.setState({ query, loading: true, message: "" });
  };

  render() {
    return (
      <FormContainer>
        <InputField>
          <input
            id="search"
            type="text"
            placeholder="Search for category or course"
            onChange={this.handleOnInputChange}
          />
        </InputField>
        <button type="submit">
          <i className="fas fa-search"></i>
        </button>
      </FormContainer>
    );
  }
}

export default Search;
