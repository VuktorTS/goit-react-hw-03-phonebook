import { Component } from 'react';

export class Filter extends Component {
  render() {
    const { value, onChangeFilter } = this.props;
    return (
      <label htmlFor="">
        Find contacts by name
        <input value={value} type="text" onChange={onChangeFilter} />
      </label>
    );
  }
}
