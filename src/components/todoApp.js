import React from 'react';

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [], textTask:''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      textTask: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.textTask.length) {
      return;
    }
    const newItem = {
      textTask: this.state.textTask,
      id: Date.now()
    };
    this.setState(state => ({
      items: state.items.concat(newItem),
      textTask: ''
    }))
  }

  render() {
    return (
      <div>
        <h3>Pending Tasks</h3>
        <TodoList items={this.state.items}></TodoList>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="new-todo">
            What do you need to do?
          </label>
          <input
            id="new-todo"
            onChange={this.handleChange}
            value={this.state.textTask}
          />
          <button>
            Add #{this.state.items.length + 1}
          </button>
        </form>
      </div>
    )
  }
}

class TodoList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.items.map((item, key) => (
        <li key={item.id}>{item.textTask}</li>
        ))}
      </ul>
    )
  }
}

export default  TodoApp
