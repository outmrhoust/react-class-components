import { Component } from "react";
import './search-box.styles.css'
class SearchBox extends Component {
  render() {
    const {placeholder, className, onChangeHandler} = this.props;
    return (
      <input
        placeholder={placeholder}
        className={`search-box ${className}`}
        type="search"
        onChange={onChangeHandler}
      />
    );
  }
}
export default SearchBox