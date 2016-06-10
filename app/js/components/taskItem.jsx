import React from 'react'

var TaskItem = React.createClass({
  getInitialState: function() {
    return {
      editing: false,
      editingValue: this.props.task
    }
  },
  toggleEdit: function(e) {
    this.setState({
      editing: true,
      editingValue: this.props.task
    })
  },
  updateTask: function(e) {
    var updatedTask = e.target.value;
    this.setState({ editing: true, editingValue: updatedTask });
  },
  submitEdit: function(e) {
    this.props.editTask(this.state.editingValue, e.target.value);
    this.setState({
      editing: false,
      editingValue: this.props.task
    })
  },
  render: function() {
    return (
      <li ref='task'
        key={this.props.index}
        index={this.props.index}
        >
        <span
          className={this.state.editing ? 'hide' : ''}
          >{this.props.task}</span>
        <input
          ref='update'
          className={this.state.editing ? '' : 'hide'}
          onChange={this.updateTask}
          type='text'
          value={this.state.editingValue}
          />
        <button
          onClick={this.props.deleteTask}
          value={this.props.index}
          >X</button>
        <button
          className={this.state.editing ? 'hide' : ''}
          onClick={this.toggleEdit}
          value={this.props.index}
          >Edit</button>
        <button
          className={this.state.editing ? '' : 'hide'}
          onClick={this.submitEdit}
          value={this.props.index}
          >Submit</button>
      </li>
    )
  }
});

module.exports = TaskItem;
