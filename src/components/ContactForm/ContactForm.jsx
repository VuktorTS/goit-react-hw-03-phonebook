import { Component } from 'react';
import { nanoid } from 'nanoid';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  onSubmitForm = event => {
    event.preventDefault();

    const form = event.currentTarget;
    const { name, number } = form.elements;

    this.props.addNewContact(name.value, number.value);
    this.resetForm();
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  resetForm = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form action="" onSubmit={this.onSubmitForm}>
        <label htmlFor={nanoid()}>
          Name
          <input
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
            required
          />
        </label>
        <label htmlFor={nanoid()}>
          Number
          <input
            type="tel"
            name="number"
            value={number}
            onChange={this.handleChange}
            required
          />
        </label>

        <button type="submit">add contact</button>
      </form>
    );
  }
}
