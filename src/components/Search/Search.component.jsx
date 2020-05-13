import React, { Component } from "react";

import { FormContainer, InputField } from "./Search.styles";

class Search extends Component {
  render() {
    return (
      <FormContainer>
        <InputField>
          <input
            id="search"
            type="text"
            placeholder="Search for category or course"
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
