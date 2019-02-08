import React, {Component} from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import styled from "styled-components";

const ClearSpan = styled.span`
  color: grey;
  font-weight: 900;
  font-size: 24px;
  position:absolute;
  top: 0;
  right: 25px;
  curser: pointer;

  :hover{
    color: limegreen;
  }
`
const StyledFormGroup = styled(FormGroup)`
  position: relative;
`


class SearchBar extends Component {
  state = {
    search: ''
  }

  handleChange = event =>{
    const { value } = event.target;
    this.setState({search: value})
    this.props.searchYoutube(value);
  }



  render() {
    return (
      <Form onSubmit={event => event.preventDefault()}>
        <StyledFormGroup>
          <Label for="videoSearch" hidden>Search</Label>
          <Input
            type="text"
            name="search"
            id="videoSearch"
            placeholder="search for new videos"
            value={this.state.search}
            onChange={this.handleChange}
          />
          <ClearSpan onClick={()=>this.setState({search:''})}>X</ClearSpan>
        </StyledFormGroup>
      </Form>
    )
  }
}

export default SearchBar;
